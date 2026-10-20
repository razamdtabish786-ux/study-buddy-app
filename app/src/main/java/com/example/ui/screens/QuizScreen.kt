package com.example.ui.screens

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewmodel.compose.viewModel
import com.example.data.StudyBuddyPreferences
import com.example.model.QuizQuestion
import com.example.ui.quiz.QuizUiState
import com.example.ui.quiz.QuizViewModel

@Composable
fun QuizScreen(
    preferences: StudyBuddyPreferences,
    modifier: Modifier = Modifier,
    viewModel: QuizViewModel = viewModel(factory = QuizViewModel.provideFactory(preferences))
) {
    val uiState by viewModel.uiState.collectAsStateWithLifecycle()

    if (uiState.isQuizCompleted) {
        QuizResultsView(
            score = uiState.score,
            totalQuestions = uiState.totalQuestions,
            questions = uiState.questions,
            userAnswers = uiState.userAnswers,
            highScore = uiState.highScore,
            totalQuizzesPlayed = uiState.totalQuizzesPlayed,
            onRestart = { viewModel.restartQuiz() },
            modifier = modifier
        )
    } else {
        val currentQuestion = uiState.currentQuestion

        if (currentQuestion != null) {
            LazyColumn(
                modifier = modifier
                    .fillMaxSize()
                    .padding(horizontal = 16.dp)
                    .testTag("quiz_screen"),
                contentPadding = PaddingValues(top = 8.dp, bottom = 80.dp),
                verticalArrangement = Arrangement.spacedBy(16.dp)
            ) {
                // Stats & Progress Header
                item {
                    Card(
                        modifier = Modifier.fillMaxWidth(),
                        shape = RoundedCornerShape(16.dp),
                        colors = CardDefaults.cardColors(
                            containerColor = MaterialTheme.colorScheme.primaryContainer.copy(alpha = 0.5f)
                        )
                    ) {
                        Column(modifier = Modifier.padding(14.dp)) {
                            Row(
                                modifier = Modifier.fillMaxWidth(),
                                horizontalArrangement = Arrangement.SpaceBetween,
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                Text(
                                    text = "प्रश्न ${uiState.currentQuestionIndex + 1} / ${uiState.totalQuestions}",
                                    fontSize = 15.sp,
                                    fontWeight = FontWeight.Bold,
                                    color = MaterialTheme.colorScheme.primary
                                )

                                Surface(
                                    color = MaterialTheme.colorScheme.surface,
                                    shape = RoundedCornerShape(12.dp)
                                ) {
                                    Row(
                                        modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp),
                                        verticalAlignment = Alignment.CenterVertically,
                                        horizontalArrangement = Arrangement.spacedBy(4.dp)
                                    ) {
                                        Icon(
                                            Icons.Default.EmojiEvents,
                                            contentDescription = null,
                                            tint = Color(0xFFF59E0B),
                                            modifier = Modifier.size(16.dp)
                                        )
                                        Text(
                                            text = "सर्वश्रेष्ठ: ${uiState.highScore}/${uiState.totalQuestions}",
                                            fontSize = 12.sp,
                                            fontWeight = FontWeight.SemiBold,
                                            color = MaterialTheme.colorScheme.onSurface
                                        )
                                    }
                                }
                            }

                            Spacer(modifier = Modifier.height(8.dp))

                            LinearProgressIndicator(
                                progress = { uiState.progress },
                                modifier = Modifier
                                    .fillMaxWidth()
                                    .height(8.dp)
                                    .clip(RoundedCornerShape(4.dp)),
                                color = MaterialTheme.colorScheme.primary,
                                trackColor = MaterialTheme.colorScheme.surfaceVariant
                            )
                        }
                    }
                }

                // Question Card
                item {
                    ElevatedCard(
                        modifier = Modifier
                            .fillMaxWidth()
                            .testTag("question_card"),
                        shape = RoundedCornerShape(18.dp),
                        colors = CardDefaults.elevatedCardColors(
                            containerColor = MaterialTheme.colorScheme.surface
                        ),
                        elevation = CardDefaults.elevatedCardElevation(defaultElevation = 2.dp)
                    ) {
                        Column(modifier = Modifier.padding(16.dp)) {
                            Row(
                                horizontalArrangement = Arrangement.spacedBy(8.dp),
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                Surface(
                                    color = MaterialTheme.colorScheme.secondaryContainer,
                                    shape = RoundedCornerShape(6.dp)
                                ) {
                                    Text(
                                        text = "कक्षा ${currentQuestion.classLevel}",
                                        modifier = Modifier.padding(horizontal = 8.dp, vertical = 3.dp),
                                        fontSize = 11.sp,
                                        fontWeight = FontWeight.Bold,
                                        color = MaterialTheme.colorScheme.onSecondaryContainer
                                    )
                                }
                                Text(
                                    text = currentQuestion.subject,
                                    fontSize = 12.sp,
                                    color = MaterialTheme.colorScheme.secondary,
                                    fontWeight = FontWeight.SemiBold
                                )
                            }

                            Spacer(modifier = Modifier.height(12.dp))

                            Text(
                                text = currentQuestion.questionHindi,
                                fontSize = 17.sp,
                                fontWeight = FontWeight.Bold,
                                color = MaterialTheme.colorScheme.onSurface,
                                lineHeight = 24.sp
                            )
                        }
                    }
                }

                // Options List Header
                item {
                    Text(
                        text = "उत्तर का चयन करें:",
                        fontSize = 14.sp,
                        fontWeight = FontWeight.SemiBold,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }

                itemsIndexed(currentQuestion.options) { optionIndex, optionText ->
                    val isSelected = uiState.selectedOptionIndex == optionIndex
                    val isCorrect = optionIndex == currentQuestion.correctOptionIndex

                    val borderColor = when {
                        uiState.isAnswerChecked && isCorrect -> Color(0xFF10B981) // Green
                        uiState.isAnswerChecked && isSelected && !isCorrect -> Color(0xFFEF4444) // Red
                        isSelected -> MaterialTheme.colorScheme.primary
                        else -> MaterialTheme.colorScheme.outlineVariant
                    }

                    val containerColor = when {
                        uiState.isAnswerChecked && isCorrect -> Color(0xFF10B981).copy(alpha = 0.12f)
                        uiState.isAnswerChecked && isSelected && !isCorrect -> Color(0xFFEF4444).copy(alpha = 0.12f)
                        isSelected -> MaterialTheme.colorScheme.primaryContainer.copy(alpha = 0.4f)
                        else -> MaterialTheme.colorScheme.surface
                    }

                    Card(
                        modifier = Modifier
                            .fillMaxWidth()
                            .clickable(enabled = !uiState.isAnswerChecked) {
                                viewModel.selectOption(optionIndex)
                            }
                            .testTag("quiz_option_$optionIndex"),
                        shape = RoundedCornerShape(14.dp),
                        colors = CardDefaults.cardColors(containerColor = containerColor),
                        border = BorderStroke(if (isSelected || (uiState.isAnswerChecked && isCorrect)) 2.dp else 1.dp, borderColor)
                    ) {
                        Row(
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(14.dp),
                            verticalAlignment = Alignment.CenterVertically,
                            horizontalArrangement = Arrangement.spacedBy(12.dp)
                        ) {
                            // Option Letter Label
                            Box(
                                modifier = Modifier
                                    .size(32.dp)
                                    .clip(CircleShape)
                                    .background(
                                        when {
                                            uiState.isAnswerChecked && isCorrect -> Color(0xFF10B981)
                                            uiState.isAnswerChecked && isSelected && !isCorrect -> Color(0xFFEF4444)
                                            isSelected -> MaterialTheme.colorScheme.primary
                                            else -> MaterialTheme.colorScheme.surfaceVariant
                                        }
                                    ),
                                contentAlignment = Alignment.Center
                            ) {
                                val optionLetter = ('A' + optionIndex).toString()
                                if (uiState.isAnswerChecked && isCorrect) {
                                    Icon(
                                        Icons.Default.Check,
                                        contentDescription = "सही",
                                        tint = Color.White,
                                        modifier = Modifier.size(18.dp)
                                    )
                                } else if (uiState.isAnswerChecked && isSelected && !isCorrect) {
                                    Icon(
                                        Icons.Default.Close,
                                        contentDescription = "गलत",
                                        tint = Color.White,
                                        modifier = Modifier.size(18.dp)
                                    )
                                } else {
                                    Text(
                                        text = optionLetter,
                                        color = if (isSelected) Color.White else MaterialTheme.colorScheme.onSurfaceVariant,
                                        fontWeight = FontWeight.Bold,
                                        fontSize = 14.sp
                                    )
                                }
                            }

                            Text(
                                text = optionText,
                                fontSize = 15.sp,
                                fontWeight = if (isSelected) FontWeight.SemiBold else FontWeight.Normal,
                                color = MaterialTheme.colorScheme.onSurface,
                                modifier = Modifier.weight(1f),
                                lineHeight = 20.sp
                            )
                        }
                    }
                }

                // Explanation Card (Visible after answer checking)
                if (uiState.isAnswerChecked) {
                    item {
                        val wasCorrect = uiState.selectedOptionIndex == currentQuestion.correctOptionIndex
                        Card(
                            modifier = Modifier
                                .fillMaxWidth()
                                .testTag("explanation_card"),
                            shape = RoundedCornerShape(14.dp),
                            colors = CardDefaults.cardColors(
                                containerColor = if (wasCorrect) Color(0xFF10B981).copy(alpha = 0.12f)
                                else Color(0xFFEF4444).copy(alpha = 0.12f)
                            )
                        ) {
                            Column(modifier = Modifier.padding(14.dp)) {
                                Row(
                                    verticalAlignment = Alignment.CenterVertically,
                                    horizontalArrangement = Arrangement.spacedBy(6.dp)
                                ) {
                                    Icon(
                                        if (wasCorrect) Icons.Default.CheckCircle else Icons.Default.Info,
                                        contentDescription = null,
                                        tint = if (wasCorrect) Color(0xFF059669) else Color(0xFFDC2626),
                                        modifier = Modifier.size(20.dp)
                                    )
                                    Text(
                                        text = if (wasCorrect) "शानदार! सही उत्तर" else "गलत उत्तर! सही उत्तर देखें",
                                        fontWeight = FontWeight.Bold,
                                        fontSize = 15.sp,
                                        color = if (wasCorrect) Color(0xFF059669) else Color(0xFFDC2626)
                                    )
                                }

                                Spacer(modifier = Modifier.height(6.dp))

                                Text(
                                    text = "💡 स्पष्टीकरण: ${currentQuestion.explanationHindi}",
                                    fontSize = 13.sp,
                                    lineHeight = 19.sp,
                                    color = MaterialTheme.colorScheme.onSurface
                                )
                            }
                        }
                    }
                }

                // Action Buttons
                item {
                    Spacer(modifier = Modifier.height(8.dp))

                    if (!uiState.isAnswerChecked) {
                        Button(
                            onClick = { viewModel.checkAnswer() },
                            enabled = uiState.selectedOptionIndex != null,
                            modifier = Modifier
                                .fillMaxWidth()
                                .height(50.dp)
                                .testTag("check_answer_button"),
                            shape = RoundedCornerShape(14.dp)
                        ) {
                            Text("उत्तर जांचें (Check Answer)", fontSize = 15.sp, fontWeight = FontWeight.Bold)
                        }
                    } else {
                        Button(
                            onClick = { viewModel.nextQuestion() },
                            modifier = Modifier
                                .fillMaxWidth()
                                .height(50.dp)
                                .testTag("next_question_button"),
                            shape = RoundedCornerShape(14.dp)
                        ) {
                            Text(
                                text = if (uiState.isLastQuestion) "परिणाम देखें (View Results)" else "अगला प्रश्न (Next Question) ➔",
                                fontSize = 15.sp,
                                fontWeight = FontWeight.Bold
                            )
                        }
                    }
                }
            }
        }
    }
}

@Composable
fun QuizResultsView(
    score: Int,
    totalQuestions: Int,
    questions: List<QuizQuestion>,
    userAnswers: Map<Int, Int>,
    highScore: Int,
    totalQuizzesPlayed: Int,
    onRestart: () -> Unit,
    modifier: Modifier = Modifier
) {
    val percentage = if (totalQuestions > 0) (score.toFloat() / totalQuestions * 100).toInt() else 0

    val (gradeMessage, feedbackColor) = when {
        score == totalQuestions && totalQuestions > 0 -> "अद्भुत! पूरे अंक! 🌟" to Color(0xFF10B981)
        score >= 3 -> "शाबाश! आपने बहुत अच्छा प्रयास किया! 👍" to Color(0xFF3B82F6)
        else -> "अच्छा प्रयास! पुनरावृत्ति से आप और बेहतर कर सकते हैं! 💪" to Color(0xFFF59E0B)
    }

    LazyColumn(
        modifier = modifier
            .fillMaxSize()
            .padding(horizontal = 16.dp)
            .testTag("quiz_results_screen"),
        contentPadding = PaddingValues(top = 16.dp, bottom = 90.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        // Score Summary Card
        item {
            ElevatedCard(
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(20.dp),
                colors = CardDefaults.elevatedCardColors(
                    containerColor = MaterialTheme.colorScheme.surface
                ),
                elevation = CardDefaults.elevatedCardElevation(defaultElevation = 3.dp)
            ) {
                Column(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(20.dp),
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Box(
                        modifier = Modifier
                            .size(72.dp)
                            .clip(CircleShape)
                            .background(feedbackColor.copy(alpha = 0.15f)),
                        contentAlignment = Alignment.Center
                    ) {
                        Icon(
                            imageVector = if (score >= 3) Icons.Default.EmojiEvents else Icons.Default.Refresh,
                            contentDescription = null,
                            tint = feedbackColor,
                            modifier = Modifier.size(40.dp)
                        )
                    }

                    Spacer(modifier = Modifier.height(12.dp))

                    Text(
                        text = "प्रश्नोत्तरी परिणाम (Quiz Results)",
                        fontSize = 14.sp,
                        color = MaterialTheme.colorScheme.onSurfaceVariant,
                        fontWeight = FontWeight.Medium
                    )

                    Spacer(modifier = Modifier.height(4.dp))

                    Text(
                        text = "$score / $totalQuestions",
                        fontSize = 34.sp,
                        fontWeight = FontWeight.ExtraBold,
                        color = MaterialTheme.colorScheme.onSurface
                    )

                    Text(
                        text = "सफलता दर: $percentage%",
                        fontSize = 15.sp,
                        fontWeight = FontWeight.SemiBold,
                        color = feedbackColor
                    )

                    Spacer(modifier = Modifier.height(10.dp))

                    Surface(
                        color = feedbackColor.copy(alpha = 0.12f),
                        shape = RoundedCornerShape(12.dp)
                    ) {
                        Text(
                            text = gradeMessage,
                            modifier = Modifier.padding(horizontal = 14.dp, vertical = 8.dp),
                            fontSize = 14.sp,
                            fontWeight = FontWeight.SemiBold,
                            color = feedbackColor,
                            textAlign = TextAlign.Center
                        )
                    }

                    Spacer(modifier = Modifier.height(16.dp))

                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceEvenly
                    ) {
                        Column(horizontalAlignment = Alignment.CenterHorizontally) {
                            Text(
                                text = "उच्चतम स्कोर",
                                fontSize = 12.sp,
                                color = MaterialTheme.colorScheme.outline
                            )
                            Text(
                                text = "$highScore / $totalQuestions",
                                fontSize = 16.sp,
                                fontWeight = FontWeight.Bold,
                                color = MaterialTheme.colorScheme.primary
                            )
                        }

                        VerticalDivider(
                            modifier = Modifier
                                .height(32.dp)
                                .width(1.dp)
                        )

                        Column(horizontalAlignment = Alignment.CenterHorizontally) {
                            Text(
                                text = "कुल प्रयास",
                                fontSize = 12.sp,
                                color = MaterialTheme.colorScheme.outline
                            )
                            Text(
                                text = "$totalQuizzesPlayed बार",
                                fontSize = 16.sp,
                                fontWeight = FontWeight.Bold,
                                color = MaterialTheme.colorScheme.primary
                            )
                        }
                    }
                }
            }
        }

        // Restart Quiz Button
        item {
            Button(
                onClick = onRestart,
                modifier = Modifier
                    .fillMaxWidth()
                    .height(50.dp)
                    .testTag("restart_quiz_button"),
                shape = RoundedCornerShape(14.dp)
            ) {
                Icon(Icons.Default.Refresh, contentDescription = null, modifier = Modifier.size(18.dp))
                Spacer(modifier = Modifier.width(8.dp))
                Text("पुनः प्रयास करें (Restart Quiz)", fontSize = 16.sp, fontWeight = FontWeight.Bold)
            }
        }

        // Questions Review Header
        item {
            Text(
                text = "सभी प्रश्नों की समीक्षा (Question Review):",
                fontSize = 16.sp,
                fontWeight = FontWeight.Bold,
                color = MaterialTheme.colorScheme.onSurface
            )
        }

        // Review List of all 5 questions
        itemsIndexed(questions) { index, question ->
            val userAnswerIndex = userAnswers[index]
            val isCorrect = userAnswerIndex == question.correctOptionIndex

            Card(
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(14.dp),
                colors = CardDefaults.cardColors(
                    containerColor = MaterialTheme.colorScheme.surface
                ),
                border = BorderStroke(
                    1.dp,
                    if (isCorrect) Color(0xFF10B981).copy(alpha = 0.5f) else Color(0xFFEF4444).copy(alpha = 0.5f)
                )
            ) {
                Column(modifier = Modifier.padding(14.dp)) {
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Text(
                            text = "प्रश्न ${index + 1}",
                            fontSize = 13.sp,
                            fontWeight = FontWeight.Bold,
                            color = MaterialTheme.colorScheme.primary
                        )

                        Surface(
                            color = if (isCorrect) Color(0xFF10B981).copy(alpha = 0.15f) else Color(0xFFEF4444).copy(alpha = 0.15f),
                            shape = RoundedCornerShape(8.dp)
                        ) {
                            Text(
                                text = if (isCorrect) "✓ सही" else "✗ गलत",
                                modifier = Modifier.padding(horizontal = 8.dp, vertical = 2.dp),
                                fontSize = 12.sp,
                                fontWeight = FontWeight.Bold,
                                color = if (isCorrect) Color(0xFF059669) else Color(0xFFDC2626)
                            )
                        }
                    }

                    Spacer(modifier = Modifier.height(6.dp))

                    Text(
                        text = question.questionHindi,
                        fontSize = 14.sp,
                        fontWeight = FontWeight.SemiBold,
                        color = MaterialTheme.colorScheme.onSurface
                    )

                    Spacer(modifier = Modifier.height(8.dp))

                    // Selected option
                    if (userAnswerIndex != null) {
                        Text(
                            text = "आपका उत्तर: ${question.options[userAnswerIndex]}",
                            fontSize = 13.sp,
                            color = if (isCorrect) Color(0xFF059669) else Color(0xFFDC2626),
                            fontWeight = FontWeight.Medium
                        )
                    }

                    // Correct option
                    if (!isCorrect) {
                        Text(
                            text = "सही उत्तर: ${question.options[question.correctOptionIndex]}",
                            fontSize = 13.sp,
                            color = Color(0xFF059669),
                            fontWeight = FontWeight.Bold
                        )
                    }

                    Spacer(modifier = Modifier.height(6.dp))

                    Text(
                        text = "💡 स्पष्टीकरण: ${question.explanationHindi}",
                        fontSize = 12.sp,
                        lineHeight = 17.sp,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }
            }
        }
    }
}
