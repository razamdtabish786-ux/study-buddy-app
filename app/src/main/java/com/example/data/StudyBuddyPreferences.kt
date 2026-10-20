package com.example.data

import android.content.Context
import android.content.SharedPreferences

class StudyBuddyPreferences(context: Context) {
    private val prefs: SharedPreferences =
        context.getSharedPreferences("study_buddy_prefs", Context.MODE_PRIVATE)

    companion object {
        private const val KEY_QUIZ_HIGH_SCORE = "quiz_high_score"
        private const val KEY_QUIZ_COMPLETED_COUNT = "quiz_completed_count"
        private const val KEY_LAST_QUIZ_SCORE = "last_quiz_score"
        private const val KEY_BOOKMARKS = "bookmarked_notes"
        private const val KEY_MATH_SOLVED = "math_solved_questions"
    }

    fun getQuizHighScore(): Int {
        return prefs.getInt(KEY_QUIZ_HIGH_SCORE, 0)
    }

    fun saveQuizScore(score: Int) {
        val currentHigh = getQuizHighScore()
        val totalCount = getQuizCompletedCount()
        prefs.edit()
            .putInt(KEY_LAST_QUIZ_SCORE, score)
            .putInt(KEY_QUIZ_COMPLETED_COUNT, totalCount + 1)
            .apply()

        if (score > currentHigh) {
            prefs.edit().putInt(KEY_QUIZ_HIGH_SCORE, score).apply()
        }
    }

    fun getQuizCompletedCount(): Int {
        return prefs.getInt(KEY_QUIZ_COMPLETED_COUNT, 0)
    }

    fun getLastQuizScore(): Int {
        return prefs.getInt(KEY_LAST_QUIZ_SCORE, 0)
    }

    fun getBookmarkedNoteIds(): Set<String> {
        return prefs.getStringSet(KEY_BOOKMARKS, emptySet()) ?: emptySet()
    }

    fun toggleBookmark(noteId: String): Boolean {
        val current = getBookmarkedNoteIds().toMutableSet()
        val isNowBookmarked = if (current.contains(noteId)) {
            current.remove(noteId)
            false
        } else {
            current.add(noteId)
            true
        }
        prefs.edit().putStringSet(KEY_BOOKMARKS, current).apply()
        return isNowBookmarked
    }

    fun isNoteBookmarked(noteId: String): Boolean {
        return getBookmarkedNoteIds().contains(noteId)
    }

    fun getSolvedMathQuestionIds(): Set<String> {
        return prefs.getStringSet(KEY_MATH_SOLVED, emptySet()) ?: emptySet()
    }

    fun markMathQuestionSolved(questionId: String) {
        val current = getSolvedMathQuestionIds().toMutableSet()
        current.add(questionId)
        prefs.edit().putStringSet(KEY_MATH_SOLVED, current).apply()
    }
}
