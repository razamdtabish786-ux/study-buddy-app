package com.example

import android.content.Context
import androidx.test.core.app.ApplicationProvider
import com.example.data.StudyBuddyPreferences
import com.example.ui.quiz.QuizViewModel
import org.junit.Assert.*
import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith
import org.robolectric.RobolectricTestRunner
import org.robolectric.annotation.Config

@RunWith(RobolectricTestRunner::class)
@Config(sdk = [34])
class QuizViewModelTest {

    private lateinit var context: Context
    private lateinit var preferences: StudyBuddyPreferences
    private lateinit var viewModel: QuizViewModel

    @Before
    fun setUp() {
        context = ApplicationProvider.getApplicationContext()
        preferences = StudyBuddyPreferences(context)
        viewModel = QuizViewModel(preferences = preferences)
    }

    @Test
    fun `initial state has 5 questions and zero score`() {
        val state = viewModel.uiState.value
        assertEquals(5, state.questions.size)
        assertEquals(0, state.currentQuestionIndex)
        assertNull(state.selectedOptionIndex)
        assertFalse(state.isAnswerChecked)
        assertFalse(state.isQuizCompleted)
        assertEquals(0, state.score)
    }

    @Test
    fun `selecting an option updates state`() {
        viewModel.selectOption(2)
        assertEquals(2, viewModel.uiState.value.selectedOptionIndex)
    }

    @Test
    fun `checking correct answer increments score`() {
        val currentQ = viewModel.uiState.value.currentQuestion!!
        val correctIndex = currentQ.correctOptionIndex

        viewModel.selectOption(correctIndex)
        viewModel.checkAnswer()

        val state = viewModel.uiState.value
        assertTrue(state.isAnswerChecked)
        assertTrue(state.isCurrentAnswerCorrect)
        assertEquals(1, state.score)
        assertEquals(correctIndex, state.userAnswers[0])
    }

    @Test
    fun `checking wrong answer does not increment score`() {
        val currentQ = viewModel.uiState.value.currentQuestion!!
        val wrongIndex = (currentQ.correctOptionIndex + 1) % currentQ.options.size

        viewModel.selectOption(wrongIndex)
        viewModel.checkAnswer()

        val state = viewModel.uiState.value
        assertTrue(state.isAnswerChecked)
        assertFalse(state.isCurrentAnswerCorrect)
        assertEquals(0, state.score)
    }

    @Test
    fun `advancing to next question resets selection and answer check state`() {
        viewModel.selectOption(0)
        viewModel.checkAnswer()
        viewModel.nextQuestion()

        val state = viewModel.uiState.value
        assertEquals(1, state.currentQuestionIndex)
        assertNull(state.selectedOptionIndex)
        assertFalse(state.isAnswerChecked)
    }

    @Test
    fun `completing all 5 questions marks quiz completed and saves progress`() {
        val initialQuizzesPlayed = preferences.getQuizCompletedCount()

        for (i in 0 until 5) {
            val q = viewModel.uiState.value.currentQuestion!!
            viewModel.selectOption(q.correctOptionIndex)
            viewModel.checkAnswer()
            viewModel.nextQuestion()
        }

        val state = viewModel.uiState.value
        assertTrue(state.isQuizCompleted)
        assertEquals(5, state.score)
        assertEquals(5, state.highScore)
        assertEquals(initialQuizzesPlayed + 1, preferences.getQuizCompletedCount())
        assertEquals(5, preferences.getQuizHighScore())
    }

    @Test
    fun `restarting quiz resets state to start`() {
        viewModel.selectOption(0)
        viewModel.checkAnswer()

        viewModel.restartQuiz()

        val state = viewModel.uiState.value
        assertEquals(0, state.currentQuestionIndex)
        assertNull(state.selectedOptionIndex)
        assertFalse(state.isAnswerChecked)
        assertFalse(state.isQuizCompleted)
        assertEquals(0, state.score)
        assertTrue(state.userAnswers.isEmpty())
    }
}
