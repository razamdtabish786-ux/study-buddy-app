package com.example

import android.content.Context
import androidx.test.core.app.ApplicationProvider
import com.example.data.SampleStudyData
import com.example.data.StudyBuddyPreferences
import org.junit.Assert.*
import org.junit.Test
import org.junit.runner.RunWith
import org.robolectric.RobolectricTestRunner
import org.robolectric.annotation.Config

@RunWith(RobolectricTestRunner::class)
@Config(sdk = [34])
class ExampleRobolectricTest {

    @Test
    fun `read app_name string from context`() {
        val context = ApplicationProvider.getApplicationContext<Context>()
        val appName = context.getString(R.string.app_name)
        assertEquals("Study Buddy", appName)
    }

    @Test
    fun `study notes cover classes 6 to 10`() {
        val notes = SampleStudyData.studyNotes
        val classes = notes.map { it.classLevel }.toSet()
        assertTrue("Must cover Class 6", classes.contains(6))
        assertTrue("Must cover Class 7", classes.contains(7))
        assertTrue("Must cover Class 8", classes.contains(8))
        assertTrue("Must cover Class 9", classes.contains(9))
        assertTrue("Must cover Class 10", classes.contains(10))
    }

    @Test
    fun `quiz has 5 valid questions with answers`() {
        val quiz = SampleStudyData.quizQuestions
        assertTrue("Must have at least 5 quiz questions", quiz.size >= 5)
        quiz.take(5).forEach { question ->
            assertTrue("Question must have options", question.options.size >= 4)
            assertTrue("Correct option index must be valid", question.correctOptionIndex in question.options.indices)
            assertFalse("Explanation must not be empty", question.explanationHindi.isBlank())
        }
    }

    @Test
    fun `math practice questions have valid explanations and formulas`() {
        val mathQuestions = SampleStudyData.mathQuestions
        assertTrue("Must have math questions", mathQuestions.isNotEmpty())
        mathQuestions.forEach { math ->
            assertTrue("Math question must have step-by-step steps", math.stepByStepExplanationHindi.isNotEmpty())
            assertFalse("Hint must not be blank", math.hintHindi.isBlank())
            assertFalse("Final answer must not be blank", math.finalAnswerHindi.isBlank())
        }
    }

    @Test
    fun `preferences persists quiz score and bookmarks`() {
        val context = ApplicationProvider.getApplicationContext<Context>()
        val prefs = StudyBuddyPreferences(context)

        prefs.saveQuizScore(4)
        assertEquals(4, prefs.getLastQuizScore())
        assertTrue(prefs.getQuizHighScore() >= 4)

        val noteId = "test_note_123"
        val isBookmarkedFirst = prefs.toggleBookmark(noteId)
        assertTrue(isBookmarkedFirst)
        assertTrue(prefs.isNoteBookmarked(noteId))

        val isBookmarkedSecond = prefs.toggleBookmark(noteId)
        assertFalse(isBookmarkedSecond)
        assertFalse(prefs.isNoteBookmarked(noteId))
    }
}
