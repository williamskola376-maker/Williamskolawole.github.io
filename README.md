# Educational Learning Platform

A comprehensive educational website designed to help students learn across multiple subjects, test their understanding, and track their progress.

## Features

- **Home Page**: Welcome page with "Start Learning" button
- **Subjects Page**: Browse all available subjects with hover animations
- **Topic Pages**: Detailed content for each topic with:
  - Learning materials
  - Understanding tests
  - Q&A section for user questions
- **Quiz Room**: Progressive difficulty quizzes (Phase 1-10)
- **Leader Board**: Track top performers with scores and rankings
- **Feedback**: Submit feedback and suggestions
- **About Us**: Information about the platform

## Available Subjects

- Chemistry
- Additional Mathematics
- Core Mathematics
- Physics
- Biology
- Computing
- General Science
- Social Studies
- English
- Government
- Economics
- Geography
- Aviation and Aerospace
- French
- Metal Work
- Electricals
- Wood Work

## How to Use

1. Open `index.html` in a web browser
2. Click "Start Learning" to browse subjects
3. Select a subject to see available topics
4. Click on a topic to view content and take understanding tests
5. Visit Quiz Room to test your knowledge across different phases
6. Check the Leader Board to see top scores
7. Submit feedback through the Feedback page

## PDF Integration

The website is designed to integrate content from PDF files. Currently, the structure supports:
- Chemistry sections (1-10)
- Biology sections (1-8)
- Additional Mathematics sections (1-10)

To add more content from PDFs:
1. Extract topics from PDF files
2. Update `subject-topics.js` with topic data
3. Update `topic-content.js` with actual content from PDFs

## Technical Details

- Pure HTML, CSS, and JavaScript (no frameworks required)
- Responsive design for mobile and desktop
- LocalStorage for quiz scores and leaderboard
- Modern UI with smooth animations and transitions

## File Structure

```
├── index.html              # Homepage
├── subjects.html           # Subjects listing page
├── subject-topics.html     # Topics for a specific subject
├── topic-content.html      # Individual topic content
├── quiz-room.html          # Quiz interface
├── leaderboard.html        # Leaderboard display
├── feedback.html           # Feedback form
├── about.html              # About page
├── styles.css              # Main stylesheet
├── script.js               # Homepage JavaScript
├── subjects.js             # Subjects page logic
├── subject-topics.js       # Topics listing logic
├── topic-content.js        # Topic content and Q&A
├── quiz-room.js            # Quiz functionality
├── leaderboard.js          # Leaderboard logic
└── feedback.js            # Feedback form handling
```

## Future Enhancements

- Server-side storage for scores and feedback
- PDF parsing to automatically extract topics
- More interactive learning tools
- Progress tracking per user
- Certificate generation for completed phases

