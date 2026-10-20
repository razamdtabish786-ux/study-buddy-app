package com.example

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.*
import androidx.compose.material.icons.automirrored.outlined.*
import androidx.compose.material.icons.filled.*
import androidx.compose.material.icons.outlined.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.data.StudyBuddyPreferences
import com.example.ui.screens.AITeacherScreen
import com.example.ui.screens.MathPracticeScreen
import com.example.ui.screens.QuizScreen
import com.example.ui.screens.StudyNotesScreen
import com.example.ui.theme.StudyBuddyTheme

enum class StudyBuddySection(
    val titleHindi: String,
    val titleEnglish: String,
    val iconFilled: ImageVector,
    val iconOutlined: ImageVector,
    val testTag: String
) {
    NOTES(
        titleHindi = "नोट्स",
        titleEnglish = "Notes",
        iconFilled = Icons.AutoMirrored.Filled.MenuBook,
        iconOutlined = Icons.AutoMirrored.Outlined.MenuBook,
        testTag = "nav_item_notes"
    ),
    QUIZ(
        titleHindi = "क्विज",
        titleEnglish = "Quiz",
        iconFilled = Icons.Filled.Quiz,
        iconOutlined = Icons.Outlined.Quiz,
        testTag = "nav_item_quiz"
    ),
    MATH(
        titleHindi = "गणित",
        titleEnglish = "Math",
        iconFilled = Icons.Filled.Calculate,
        iconOutlined = Icons.Outlined.Calculate,
        testTag = "nav_item_math"
    ),
    AI_TEACHER(
        titleHindi = "एआई शिक्षक",
        titleEnglish = "AI Guide",
        iconFilled = Icons.Filled.SmartToy,
        iconOutlined = Icons.Outlined.SmartToy,
        testTag = "nav_item_ai"
    )
}

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            StudyBuddyTheme {
                StudyBuddyApp()
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun StudyBuddyApp() {
    val context = LocalContext.current
    val preferences = remember { StudyBuddyPreferences(context) }
    var currentSection by remember { mutableStateOf(StudyBuddySection.NOTES) }
    var showInfoDialog by remember { mutableStateOf(false) }

    Scaffold(
        modifier = Modifier
            .fillMaxSize()
            .testTag("study_buddy_main_scaffold"),
        topBar = {
            TopAppBar(
                title = {
                    Column {
                        Row(
                            verticalAlignment = Alignment.CenterVertically,
                            horizontalArrangement = Arrangement.spacedBy(8.dp)
                        ) {
                            Text(
                                text = "Study Buddy",
                                fontSize = 18.sp,
                                fontWeight = FontWeight.ExtraBold,
                                color = MaterialTheme.colorScheme.onSurface
                            )
                            Surface(
                                color = MaterialTheme.colorScheme.primaryContainer,
                                shape = RoundedCornerShape(6.dp)
                            ) {
                                Text(
                                    text = "स्टडी बडी",
                                    fontSize = 11.sp,
                                    fontWeight = FontWeight.Bold,
                                    color = MaterialTheme.colorScheme.onPrimaryContainer,
                                    modifier = Modifier.padding(horizontal = 6.dp, vertical = 2.dp)
                                )
                            }
                        }
                        Text(
                            text = "नमस्ते! अपनी पढ़ाई को आसान और मजेदार बनाएं",
                            fontSize = 12.sp,
                            fontWeight = FontWeight.Medium,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                },
                actions = {
                    IconButton(
                        onClick = { showInfoDialog = true },
                        modifier = Modifier.testTag("app_info_button")
                    ) {
                        Icon(
                            Icons.Default.Info,
                            contentDescription = "ऐप जानकारी",
                            tint = MaterialTheme.colorScheme.primary
                        )
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.surface
                )
            )
        },
        bottomBar = {
            NavigationBar(
                modifier = Modifier
                    .testTag("bottom_navigation_bar"),
                containerColor = MaterialTheme.colorScheme.surface,
                tonalElevation = 8.dp
            ) {
                StudyBuddySection.values().forEach { section ->
                    val isSelected = currentSection == section
                    NavigationBarItem(
                        selected = isSelected,
                        onClick = { currentSection = section },
                        icon = {
                            Icon(
                                imageVector = if (isSelected) section.iconFilled else section.iconOutlined,
                                contentDescription = section.titleHindi
                            )
                        },
                        label = {
                            Text(
                                text = section.titleHindi,
                                fontSize = 11.sp,
                                fontWeight = if (isSelected) FontWeight.Bold else FontWeight.Normal
                            )
                        },
                        modifier = Modifier.testTag(section.testTag)
                    )
                }
            }
        }
    ) { innerPadding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding)
        ) {
            // Motivational Quote Banner
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp, vertical = 4.dp),
                colors = CardDefaults.cardColors(
                    containerColor = MaterialTheme.colorScheme.primaryContainer.copy(alpha = 0.35f)
                ),
                shape = RoundedCornerShape(12.dp)
            ) {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 12.dp, vertical = 8.dp),
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.SpaceBetween
                ) {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.spacedBy(8.dp),
                        modifier = Modifier.weight(1f)
                    ) {
                        Text(text = "💡", fontSize = 16.sp)
                        Text(
                            text = "“ज्ञान ही शक्ति है — निरंतर अभ्यास ही सफलता की कुंजी है।”",
                            fontSize = 11.sp,
                            fontWeight = FontWeight.Medium,
                            color = MaterialTheme.colorScheme.onSurface,
                            lineHeight = 15.sp
                        )
                    }

                    Surface(
                        color = MaterialTheme.colorScheme.surface,
                        shape = RoundedCornerShape(8.dp)
                    ) {
                        Text(
                            text = "🔥 5 दिन स्ट्रीक",
                            fontSize = 11.sp,
                            fontWeight = FontWeight.Bold,
                            color = Color(0xFFF59E0B),
                            modifier = Modifier.padding(horizontal = 6.dp, vertical = 3.dp)
                        )
                    }
                }
            }

            // Screen Content based on active section
            when (currentSection) {
                StudyBuddySection.NOTES -> StudyNotesScreen(preferences = preferences)
                StudyBuddySection.QUIZ -> QuizScreen(preferences = preferences)
                StudyBuddySection.MATH -> MathPracticeScreen(preferences = preferences)
                StudyBuddySection.AI_TEACHER -> AITeacherScreen()
            }
        }
    }

    if (showInfoDialog) {
        AlertDialog(
            onDismissRequest = { showInfoDialog = false },
            icon = {
                Icon(
                    Icons.Default.School,
                    contentDescription = null,
                    tint = MaterialTheme.colorScheme.primary,
                    modifier = Modifier.size(32.dp)
                )
            },
            title = {
                Text(
                    text = "Study Buddy (स्टडी बडी) v1.0",
                    fontWeight = FontWeight.Bold,
                    fontSize = 18.sp
                )
            },
            text = {
                Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                    Text(
                        text = "कक्षा 6 से 10 तक के हिंदी माध्यम और द्विभाषी विद्यार्थियों के लिए एक सुलभ, आधुनिक और उपयोगी शैक्षिक ऐप।",
                        fontSize = 13.sp,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )

                    Surface(
                        color = MaterialTheme.colorScheme.secondaryContainer.copy(alpha = 0.5f),
                        shape = RoundedCornerShape(8.dp),
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        Column(modifier = Modifier.padding(10.dp)) {
                            Text(
                                text = "विशेषताएँ:",
                                fontWeight = FontWeight.Bold,
                                fontSize = 12.sp,
                                color = MaterialTheme.colorScheme.secondary
                            )
                            Text("• कक्षा 6-10 के अध्ययन नोट्स", fontSize = 12.sp)
                            Text("• 5-प्रश्नों की त्वरित प्रश्नोत्तरी एवं स्कोर ट्रैकिंग", fontSize = 12.sp)
                            Text("• चरणबद्ध गणित अभ्यास और सूत्र", fontSize = 12.sp)
                            Text("• ऑफ़लाइन स्मार्ट अध्ययन गाइड और परीक्षा टिप्स", fontSize = 12.sp)
                            Text("• 100% ऑफ़लाइन — बिना लॉगिन या शुल्क के उपलब्ध", fontSize = 12.sp)
                        }
                    }
                }
            },
            confirmButton = {
                Button(
                    onClick = { showInfoDialog = false },
                    modifier = Modifier.testTag("close_info_dialog_button")
                ) {
                    Text("ठीक है (OK)")
                }
            }
        )
    }
}
