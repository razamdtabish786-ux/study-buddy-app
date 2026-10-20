# Study Buddy (स्टडी बडी) — Responsive Education Web App

Study Buddy is a mobile-first, responsive educational web application designed for Hindi-medium and bilingual school students (Classes 6 to 10). It provides comprehensive study notes, interactive math practice with step-by-step solutions, a 5-question interactive quiz with answer checking and local score persistence, and smart offline study strategies.

---

## 🌟 Key Features

1. **Study Notes (अध्ययन नोट्स)**:
   - Covers Class 6 to 10 Science (विज्ञान) and Mathematics (गणित) in Hindi.
   - Real-time search filter and class filter chips (कक्षा 6, 7, 8, 9, 10, सभी).
   - Interactive reader with font size toggle (**सामान्य / बड़ा**) for small phone screens, key takeaways, and bookmarking.

2. **5-Question Interactive Quiz (प्रश्नोत्तरी)**:
   - Multiple choice questions with instant answer validation (green for correct, red for incorrect).
   - In-depth Hindi explanations for every answer.
   - Comprehensive score report with success percentage and high score tracker stored locally in `localStorage`.
   - Complete question-by-question review and restart button.

3. **Math Practice (गणित अभ्यास)**:
   - Interactive math problems spanning Fractions (भिन्न), Percentage (प्रतिशत), Profit & Loss (लाभ-हानि), Area & Perimeter (क्षेत्रफल), and Algebra (बीजगणित).
   - **"संकेत / सूत्र देखें (Show Hint)"** toggle providing mathematical formulas and guidance.
   - **"संपूर्ण हल देखें (Step-by-Step Solution)"** toggle displaying complete Hindi step-by-step working and final answers.
   - Solved question tracker.

4. **AI Teacher & Smart Study Companion (एआई शिक्षक / सहायक)**:
   - 100% transparent offline badge explaining that live AI server connectivity will be available in upcoming cloud releases.
   - Interactive **"AI से पूछें (Ask AI)"** modal with pre-filled suggestions.
   - Offline exam preparation strategies (Pomodoro & Active Recall), algebraic and geometric formula cheat sheets, daily timetables, and study FAQs.

5. **Mobile-First & Privacy Friendly**:
   - Zero login, payments, or personal data required.
   - No external API keys or secrets exposed in frontend code.
   - Dark Mode / Light Mode toggle with persistence.
   - Responsive design tailored for Android mobile browsers, tablets, and desktop screens.
   - Progressive Web App (PWA) manifest support for "Add to Home Screen" installation on Android.

---

## 📁 Source Code Structure

```text
├── index.html          # Main HTML5 web application entry point
├── style.css           # Responsive CSS styles with Material 3 design & dark mode
├── app.js              # Full application logic, sample content & localStorage state
├── manifest.json       # PWA Web App Manifest for mobile installation
├── icon-192.png        # 192x192 app icon
├── icon-512.png        # 512x512 app icon
├── server.js           # Lightweight Node.js server (zero dependencies)
├── package.json        # Node.js project manifest & run scripts
└── public/             # Mirror copy of static assets ready for static hosting
```

---

## 🚀 How to Run Locally

### Option 1: Double-click or open directly
Because Study Buddy is built with vanilla HTML, CSS, and JavaScript, you can simply open `index.html` directly in any web browser (Chrome, Firefox, Edge, Safari, Android Chrome).

### Option 2: Using Node.js
```bash
npm start
# or
node server.js
```
The app will be live at `http://localhost:3000`.

### Option 3: Using Python
```bash
python3 -m http.server 3000
```
Open `http://localhost:3000` in your browser.

---

## 🌐 Deploying as a Public Website

You can deploy Study Buddy as a 100% free public website on any of the following platforms with zero build steps:

### 1. GitHub Pages (Free)
1. Push this repository to GitHub.
2. In your repository on GitHub, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select `Deploy from a branch`.
4. Choose the `main` branch and `/ (root)` folder, then click **Save**.
5. Your public website will be live at `https://<your-username>.github.io/<repo-name>/`.

### 2. Vercel (Free)
1. Install Vercel CLI via `npm i -g vercel` or connect your GitHub repository to [Vercel](https://vercel.com).
2. Run `vercel` in the project directory.
3. Vercel automatically detects the static HTML/CSS/JS and deploys it immediately with an SSL certificate.

### 3. Netlify (Free)
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop the folder containing `index.html`, `style.css`, `app.js`, and `manifest.json`.
3. Your site is deployed online within seconds.

### 4. Firebase Hosting (Free)
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Specify current directory '.' as the public directory
firebase deploy --only hosting
```

---

## 📦 How to Export or Download Complete Source Files

To download the complete project from Google AI Studio:

1. **Export as ZIP**:
   - In the top-right corner of the AI Studio interface, open the **Project Settings** (gear icon) or the **Code** menu.
   - Select **"Export as ZIP"** (or **"Download Project"**).
   - Unzip the downloaded archive on your computer. You will have all files (`index.html`, `style.css`, `app.js`, `manifest.json`, etc.) ready to use, edit, or upload.

2. **Push to GitHub**:
   - In the AI Studio top bar or settings, select **"Push to GitHub"**.
   - Connect your GitHub account and choose a new repository name (e.g., `study-buddy-web`).
   - Clone it to your local computer:
     ```bash
     git clone https://github.com/<your-username>/study-buddy-web.git
     ```

3. **Using in Any Web Browser**:
   - Simply double-click `index.html` or upload the folder to your web host.

---

## 🔒 Security & Privacy Notice
- This web application does not contain or expose any sensitive API keys, database credentials, or secret tokens.
- All study notes, practice questions, and quiz answers are bundled directly within the app for maximum speed and reliable offline access.
