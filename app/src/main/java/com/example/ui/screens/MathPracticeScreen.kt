package com.example.ui.screens

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.expandVertically
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.shrinkVertically
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.*
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.data.SampleStudyData
import com.example.data.StudyBuddyPreferences
import com.example.model.MathPracticeQuestion

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun MathPracticeScreen(
    preferences: StudyBuddyPreferences,
    modifier: Modifier = Modifier
) {
    val allQuestions = remember { SampleStudyData.mathQuestions }
    var selectedTopic by remember { mutableStateOf<String?>(null) } // null means "All"

    val topics = remember {
        listOf("सभी") + allQuestions.map { it.topicHindi.split(" ")[0] }.distinct()
    }

    val filteredQuestions = remember(selectedTopic) {
        if (selectedTopic == null || selectedTopic == "सभी") {
            allQuestions
        } else {
            allQuestions.filter { it.topicHindi.startsWith(selectedTopic!!) }
        }
    }

    var currentQuestionIndex by remember(selectedTopic) { mutableIntStateOf(0) }
    var selectedOptionIndex by remember(currentQuestionIndex, selectedTopic) { mutableStateOf<Int?>(null) }
    var showHint by remember(currentQuestionIndex, selectedTopic) { mutableStateOf(false) }
    var showSolution by remember(currentQuestionIndex, selectedTopic) { mutableStateOf(false) }

    var solvedQuestionIds by remember { mutableStateOf(preferences.getSolvedMathQuestionIds()) }

    val safeIndex = currentQuestionIndex.coerceIn(0, (filteredQuestions.size - 1).coerceAtLeast(0))
    val currentQuestion = filteredQuestions.getOrNull(safeIndex)

    LazyColumn(
        modifier = modifier
            .fillMaxSize()
            .padding(horizontal = 16.dp)
            .testTag("math_practice_screen"),
        contentPadding = PaddingValues(top = 8.dp, bottom = 80.dp),
        verticalArrangement = Arrangement.spacedBy(14.dp)
    ) {
        // Topic Filters
        item {
            Text(
                text = "गणित विषय चुनें (Select Topic):",
                fontSize = 13.sp,
                fontWeight = FontWeight.SemiBold,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )

            Spacer(modifier = Modifier.height(4.dp))

            LazyRow(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                items(topics) { topic ->
                    val isSelected = (selectedTopic == null && topic == "सभी") || selectedTopic == topic
                    FilterChip(
                        selected = isSelected,
                        onClick = {
                            selectedTopic = if (topic == "सभी") null else topic
                            currentQuestionIndex = 0
                        },
                        label = { Text(topic, fontSize = 12.sp) },
                        modifier = Modifier.testTag("math_topic_chip_$topic")
                    )
                }
            }
        }

        // Solved Counter & Question Progress
        item {
            Card(
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(14.dp),
                colors = CardDefaults.cardColors(
                    containerColor = MaterialTheme.colorScheme.secondaryContainer.copy(alpha = 0.4f)
                )
            ) {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(12.dp),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.spacedBy(6.dp)
                    ) {
                        Icon(
                            Icons.Default.Calculate,
                            contentDescription = null,
                            tint = MaterialTheme.colorScheme.secondary,
                            modifier = Modifier.size(20.dp)
                        )
                        Text(
                            text = "प्रश्न ${safeIndex + 1} / ${filteredQuestions.size}",
                            fontSize = 14.sp,
                            fontWeight = FontWeight.Bold,
                            color = MaterialTheme.colorScheme.secondary
                        )
                    }

                    Surface(
                        color = MaterialTheme.colorScheme.surface,
                        shape = RoundedCornerShape(10.dp)
                    ) {
                        Text(
                            text = "कुल हल: ${solvedQuestionIds.size}",
                            modifier = Modifier.padding(horizontal = 10.dp, vertical = 4.dp),
                            fontSize = 12.sp,
                            fontWeight = FontWeight.SemiBold,
                            color = MaterialTheme.colorScheme.primary
                        )
                    }
                }
            }
        }

        if (currentQuestion != null) {
            val isCurrentSolved = solvedQuestionIds.contains(currentQuestion.id)

            // Problem Card
            item {
                ElevatedCard(
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(18.dp),
                    colors = CardDefaults.elevatedCardColors(
                        containerColor = MaterialTheme.colorScheme.surface
                    ),
                    elevation = CardDefaults.elevatedCardElevation(defaultElevation = 2.dp)
                ) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Surface(
                                color = MaterialTheme.colorScheme.primaryContainer,
                                shape = RoundedCornerShape(6.dp)
                            ) {
                                Text(
                                    text = currentQuestion.topicHindi,
                                    modifier = Modifier.padding(horizontal = 8.dp, vertical = 3.dp),
                                    fontSize = 12.sp,
                                    fontWeight = FontWeight.Bold,
                                    color = MaterialTheme.colorScheme.onPrimaryContainer
                                )
                            }

                            if (isCurrentSolved) {
                                Surface(
                                    color = Color(0xFF10B981).copy(alpha = 0.15f),
                                    shape = RoundedCornerShape(6.dp)
                                ) {
                                    Text(
                                        text = "✓ हल किया गया",
                                        modifier = Modifier.padding(horizontal = 6.dp, vertical = 2.dp),
                                        fontSize = 11.sp,
                                        fontWeight = FontWeight.Bold,
                                        color = Color(0xFF059669)
                                    )
                                }
                            }
                        }

                        Spacer(modifier = Modifier.height(12.dp))

                        Text(
                            text = currentQuestion.questionHindi,
                            fontSize = 18.sp,
                            fontWeight = FontWeight.Bold,
                            color = MaterialTheme.colorScheme.onSurface,
                            lineHeight = 25.sp
                        )
                    }
                }
            }

            // Options selection
            item {
                Text(
                    text = "उत्तर चुनें:",
                    fontSize = 14.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }

            itemsIndexed(currentQuestion.options) { optionIndex, optionText ->
                val isSelected = selectedOptionIndex == optionIndex
                val isCorrect = optionIndex == currentQuestion.correctIndex

                val borderColor = when {
                    selectedOptionIndex != null && isCorrect -> Color(0xFF10B981)
                    isSelected && !isCorrect -> Color(0xFFEF4444)
                    else -> MaterialTheme.colorScheme.outlineVariant
                }

                val containerColor = when {
                    selectedOptionIndex != null && isCorrect -> Color(0xFF10B981).copy(alpha = 0.12f)
                    isSelected && !isCorrect -> Color(0xFFEF4444).copy(alpha = 0.12f)
                    else -> MaterialTheme.colorScheme.surface
                }

                Card(
                    modifier = Modifier
                        .fillMaxWidth()
                        .clickable {
                            selectedOptionIndex = optionIndex
                            if (optionIndex == currentQuestion.correctIndex) {
                                preferences.markMathQuestionSolved(currentQuestion.id)
                                solvedQuestionIds = preferences.getSolvedMathQuestionIds()
                            }
                        }
                        .testTag("math_option_$optionIndex"),
                    shape = RoundedCornerShape(12.dp),
                    colors = CardDefaults.cardColors(containerColor = containerColor),
                    border = BorderStroke(if (isSelected || (selectedOptionIndex != null && isCorrect)) 2.dp else 1.dp, borderColor)
                ) {
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(12.dp),
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.spacedBy(10.dp)
                    ) {
                        Surface(
                            shape = CircleShape,
                            color = when {
                                selectedOptionIndex != null && isCorrect -> Color(0xFF10B981)
                                isSelected && !isCorrect -> Color(0xFFEF4444)
                                else -> MaterialTheme.colorScheme.surfaceVariant
                            },
                            modifier = Modifier.size(28.dp)
                        ) {
                            Box(contentAlignment = Alignment.Center) {
                                val letter = ('A' + optionIndex).toString()
                                Text(
                                    text = letter,
                                    fontSize = 13.sp,
                                    fontWeight = FontWeight.Bold,
                                    color = if (isSelected || (selectedOptionIndex != null && isCorrect)) Color.White
                                    else MaterialTheme.colorScheme.onSurfaceVariant
                                )
                            }
                        }

                        Text(
                            text = optionText,
                            fontSize = 15.sp,
                            fontWeight = if (isSelected) FontWeight.Bold else FontWeight.Normal,
                            color = MaterialTheme.colorScheme.onSurface,
                            modifier = Modifier.weight(1f)
                        )

                        if (selectedOptionIndex != null && isCorrect) {
                            Icon(
                                Icons.Default.CheckCircle,
                                contentDescription = "सही",
                                tint = Color(0xFF10B981),
                                modifier = Modifier.size(20.dp)
                            )
                        } else if (isSelected && !isCorrect) {
                            Icon(
                                Icons.Default.Cancel,
                                contentDescription = "गलत",
                                tint = Color(0xFFEF4444),
                                modifier = Modifier.size(20.dp)
                            )
                        }
                    }
                }
            }

            // Hint / Formula Toggle
            item {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    OutlinedButton(
                        onClick = { showHint = !showHint },
                        shape = RoundedCornerShape(10.dp),
                        modifier = Modifier.testTag("toggle_hint_button")
                    ) {
                        Icon(
                            Icons.Default.Lightbulb,
                            contentDescription = null,
                            tint = Color(0xFFF59E0B),
                            modifier = Modifier.size(16.dp)
                        )
                        Spacer(modifier = Modifier.width(6.dp))
                        Text(if (showHint) "संकेत छिपाएं" else "संकेत / सूत्र देखें")
                    }

                    FilledTonalButton(
                        onClick = { showSolution = !showSolution },
                        shape = RoundedCornerShape(10.dp),
                        modifier = Modifier.testTag("toggle_solution_button")
                    ) {
                        Icon(
                            Icons.AutoMirrored.Filled.MenuBook,
                            contentDescription = null,
                            modifier = Modifier.size(16.dp)
                        )
                        Spacer(modifier = Modifier.width(6.dp))
                        Text(if (showSolution) "हल छिपाएं" else "संपूर्ण हल देखें")
                    }
                }
            }

            // Hint Card
            if (showHint) {
                item {
                    Card(
                        modifier = Modifier
                            .fillMaxWidth()
                            .testTag("hint_card"),
                        shape = RoundedCornerShape(12.dp),
                        colors = CardDefaults.cardColors(
                            containerColor = Color(0xFFF59E0B).copy(alpha = 0.12f)
                        )
                    ) {
                        Column(modifier = Modifier.padding(12.dp)) {
                            Text(
                                text = "💡 संकेत (Hint):",
                                fontWeight = FontWeight.Bold,
                                fontSize = 13.sp,
                                color = Color(0xFFD97706)
                            )
                            Spacer(modifier = Modifier.height(4.dp))
                            Text(
                                text = currentQuestion.hintHindi,
                                fontSize = 13.sp,
                                color = MaterialTheme.colorScheme.onSurface
                            )
                            Spacer(modifier = Modifier.height(4.dp))
                            Text(
                                text = "सूत्र: ${currentQuestion.formulaUsed}",
                                fontSize = 12.sp,
                                fontWeight = FontWeight.SemiBold,
                                color = Color(0xFFD97706)
                            )
                        }
                    }
                }
            }

            // Step-by-Step Solution Card
            if (showSolution) {
                item {
                    Card(
                        modifier = Modifier
                            .fillMaxWidth()
                            .testTag("solution_card"),
                        shape = RoundedCornerShape(14.dp),
                        colors = CardDefaults.cardColors(
                            containerColor = MaterialTheme.colorScheme.primaryContainer.copy(alpha = 0.35f)
                        )
                    ) {
                        Column(modifier = Modifier.padding(14.dp)) {
                            Row(
                                verticalAlignment = Alignment.CenterVertically,
                                horizontalArrangement = Arrangement.spacedBy(6.dp)
                            ) {
                                Icon(
                                    Icons.Default.CheckCircle,
                                    contentDescription = null,
                                    tint = MaterialTheme.colorScheme.primary,
                                    modifier = Modifier.size(18.dp)
                                )
                                Text(
                                    text = "चरणबद्ध स्पष्टीकरण (Step-by-Step Solution):",
                                    fontWeight = FontWeight.Bold,
                                    fontSize = 14.sp,
                                    color = MaterialTheme.colorScheme.primary
                                )
                            }

                            Spacer(modifier = Modifier.height(8.dp))

                            currentQuestion.stepByStepExplanationHindi.forEach { step ->
                                Text(
                                    text = step,
                                    fontSize = 13.sp,
                                    lineHeight = 19.sp,
                                    color = MaterialTheme.colorScheme.onSurface,
                                    modifier = Modifier.padding(vertical = 2.dp)
                                )
                            }

                            Spacer(modifier = Modifier.height(8.dp))

                            Surface(
                                color = MaterialTheme.colorScheme.surface,
                                shape = RoundedCornerShape(8.dp)
                            ) {
                                Text(
                                    text = "अंतिम उत्तर: ${currentQuestion.finalAnswerHindi}",
                                    modifier = Modifier.padding(horizontal = 10.dp, vertical = 6.dp),
                                    fontSize = 13.sp,
                                    fontWeight = FontWeight.Bold,
                                    color = MaterialTheme.colorScheme.primary
                                )
                            }
                        }
                    }
                }
            }

            // Navigation Buttons
            item {
                Spacer(modifier = Modifier.height(4.dp))
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(10.dp)
                ) {
                    if (safeIndex > 0) {
                        OutlinedButton(
                            onClick = { currentQuestionIndex-- },
                            modifier = Modifier
                                .weight(1f)
                                .height(48.dp)
                                .testTag("previous_math_button"),
                            shape = RoundedCornerShape(12.dp)
                        ) {
                            Icon(Icons.AutoMirrored.Filled.ArrowBack, contentDescription = null, modifier = Modifier.size(16.dp))
                            Spacer(modifier = Modifier.width(4.dp))
                            Text("पिछला")
                        }
                    }

                    val isLast = safeIndex == filteredQuestions.size - 1
                    Button(
                        onClick = {
                            if (isLast) {
                                currentQuestionIndex = 0
                            } else {
                                currentQuestionIndex++
                            }
                        },
                        modifier = Modifier
                            .weight(1f)
                            .height(48.dp)
                            .testTag("next_math_button"),
                        shape = RoundedCornerShape(12.dp)
                    ) {
                        Text(if (isLast) "पुनः शुरू करें ↺" else "अगला प्रश्न ➔")
                    }
                }
            }
        }
    }
}
