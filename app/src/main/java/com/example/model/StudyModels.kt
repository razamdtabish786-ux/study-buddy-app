package com.example.model

/**
 * Data model for Study Notes across Classes 6 to 10 in Hindi.
 */
data class StudyNote(
    val id: String,
    val classLevel: Int, // 6, 7, 8, 9, 10
    val subject: String, // विज्ञान, गणित, सामाजिक विज्ञान, हिंदी
    val chapterNumber: Int,
    val titleHindi: String,
    val titleEnglish: String,
    val readTimeMinutes: Int,
    val summary: String,
    val keyPoints: List<String>,
    val detailedContent: String,
    val importantFormulasOrDefinitions: List<String> = emptyList(),
    val isBookmarked: Boolean = false
)

/**
 * Data model for 5-question Quiz in Hindi.
 */
data class QuizQuestion(
    val id: String,
    val classLevel: Int,
    val subject: String,
    val questionHindi: String,
    val options: List<String>,
    val correctOptionIndex: Int,
    val explanationHindi: String
)

/**
 * Data model for Math Practice with hints, step-by-step answers and explanations in Hindi.
 */
data class MathPracticeQuestion(
    val id: String,
    val classLevel: Int,
    val topicHindi: String, // भिन्न, प्रतिशत, क्षेत्रफल, बीजगणित, लाभ-हानि
    val questionHindi: String,
    val options: List<String>,
    val correctIndex: Int,
    val hintHindi: String,
    val formulaUsed: String,
    val stepByStepExplanationHindi: List<String>,
    val finalAnswerHindi: String
)

/**
 * Data model for offline AI Teacher guide items (smart study strategies, formula books, FAQs).
 */
data class AIGuideItem(
    val id: String,
    val titleHindi: String,
    val subtitleHindi: String,
    val category: String, // "Exam Tips", "Formula Sheet", "Study Plan", "FAQ"
    val contentHindi: String,
    val tips: List<String>
)
