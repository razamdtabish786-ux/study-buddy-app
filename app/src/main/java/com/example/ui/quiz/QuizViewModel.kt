package com.example.ui.quiz

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import com.example.data.SampleStudyData
import com.example.data.StudyBuddyPreferences
import com.example.model.QuizQuestion
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update

/**
 * UI State representing the 5-question interactive quiz.
 */
data class QuizUiState(
    val questions: List<QuizQuestion> = emptyList(),
    val currentQuestionIndex: Int = 0,
    val selectedOptionIndex: Int? = null,
    val isAnswerChecked: Boolean = false,
    val userAnswers: Map<Int, Int> = emptyMap(), // questionIndex -> selectedOptionIndex
    val isQuizCompleted: Boolean = false,
    val score: Int = 0,
    val highScore: Int = 0,
    val totalQuizzesPlayed: Int = 0
) {
    val currentQuestion: QuizQuestion?
        get() = questions.getOrNull(currentQuestionIndex)

    val totalQuestions: Int
        get() = questions.size

    val progress: Float
        get() = if (questions.isNotEmpty()) {
            (currentQuestionIndex + 1).toFloat() / questions.size
        } else {
            0f
        }

    val isCurrentAnswerCorrect: Boolean
        get() {
            val q = currentQuestion ?: return false
            val selected = selectedOptionIndex ?: return false
            return selected == q.correctOptionIndex
        }

    val isLastQuestion: Boolean
        get() = questions.isNotEmpty() && currentQuestionIndex == questions.size - 1
}

/**
 * ViewModel managing quiz lifecycle, answer validation, score calculation,
 * and local progress persistence.
 */
class QuizViewModel(
    private val preferences: StudyBuddyPreferences? = null,
    initialQuestions: List<QuizQuestion>? = null
) : ViewModel() {

    private val questionsBank: List<QuizQuestion> =
        initialQuestions ?: SampleStudyData.quizQuestions.take(5)

    private val _uiState = MutableStateFlow(
        QuizUiState(
            questions = questionsBank,
            highScore = preferences?.getQuizHighScore() ?: 0,
            totalQuizzesPlayed = preferences?.getQuizCompletedCount() ?: 0
        )
    )
    val uiState: StateFlow<QuizUiState> = _uiState.asStateFlow()

    init {
        refreshStats()
    }

    /**
     * Refresh high score and games played count from preferences.
     */
    fun refreshStats() {
        if (preferences != null) {
            _uiState.update { current ->
                current.copy(
                    highScore = preferences.getQuizHighScore(),
                    totalQuizzesPlayed = preferences.getQuizCompletedCount()
                )
            }
        }
    }

    /**
     * User selects an option for the current question.
     * Only allowed if answer has not been checked yet.
     */
    fun selectOption(optionIndex: Int) {
        val state = _uiState.value
        if (state.isAnswerChecked || state.isQuizCompleted) return

        val currentQ = state.currentQuestion ?: return
        if (optionIndex in currentQ.options.indices) {
            _uiState.update { it.copy(selectedOptionIndex = optionIndex) }
        }
    }

    /**
     * Validates and checks the selected answer.
     * Updates score and records user's answer.
     */
    fun checkAnswer() {
        val state = _uiState.value
        if (state.isAnswerChecked || state.selectedOptionIndex == null || state.isQuizCompleted) return

        val selectedIndex = state.selectedOptionIndex
        val currentIndex = state.currentQuestionIndex
        val currentQ = state.currentQuestion ?: return

        val updatedAnswers = state.userAnswers.toMutableMap().apply {
            put(currentIndex, selectedIndex)
        }

        val isCorrect = selectedIndex == currentQ.correctOptionIndex
        val newScore = if (isCorrect) state.score + 1 else state.score

        _uiState.update { current ->
            current.copy(
                isAnswerChecked = true,
                userAnswers = updatedAnswers,
                score = newScore
            )
        }
    }

    /**
     * Advances to the next question or completes the quiz if on the last question.
     */
    fun nextQuestion() {
        val state = _uiState.value
        if (!state.isAnswerChecked) return

        if (state.isLastQuestion) {
            completeQuiz()
        } else {
            _uiState.update { current ->
                current.copy(
                    currentQuestionIndex = current.currentQuestionIndex + 1,
                    selectedOptionIndex = null,
                    isAnswerChecked = false
                )
            }
        }
    }

    /**
     * Finalizes quiz, computes final score and persists to SharedPreferences.
     */
    private fun completeQuiz() {
        val state = _uiState.value
        val finalScore = state.score

        // Save to preferences
        preferences?.saveQuizScore(finalScore)

        val updatedHighScore = preferences?.getQuizHighScore() ?: maxOf(state.highScore, finalScore)
        val updatedTotalCount = preferences?.getQuizCompletedCount() ?: (state.totalQuizzesPlayed + 1)

        _uiState.update { current ->
            current.copy(
                isQuizCompleted = true,
                highScore = updatedHighScore,
                totalQuizzesPlayed = updatedTotalCount
            )
        }
    }

    /**
     * Restarts the quiz from Question 1 with reset answers and refreshed stats.
     */
    fun restartQuiz() {
        _uiState.update { current ->
            QuizUiState(
                questions = questionsBank,
                currentQuestionIndex = 0,
                selectedOptionIndex = null,
                isAnswerChecked = false,
                userAnswers = emptyMap(),
                isQuizCompleted = false,
                score = 0,
                highScore = preferences?.getQuizHighScore() ?: current.highScore,
                totalQuizzesPlayed = preferences?.getQuizCompletedCount() ?: current.totalQuizzesPlayed
            )
        }
    }

    companion object {
        fun provideFactory(preferences: StudyBuddyPreferences): ViewModelProvider.Factory =
            object : ViewModelProvider.Factory {
                @Suppress("UNCHECKED_CAST")
                override fun <T : ViewModel> create(modelClass: Class<T>): T {
                    return QuizViewModel(preferences) as T
                }
            }
    }
}
