// Quiz data structure - questions organized by phase
const quizData = {
    phase1: {
        title: 'Phase 1: Beginner',
        questions: [
            {
                question: 'What is the chemical symbol for water?',
                options: ['H2O', 'CO2', 'O2', 'NaCl'],
                correct: 0
            },
            {
                question: 'What is 2 + 2?',
                options: ['3', '4', '5', '6'],
                correct: 1
            },
            {
                question: 'Which planet is closest to the sun?',
                options: ['Venus', 'Earth', 'Mercury', 'Mars'],
                correct: 2
            }
        ]
    },
    phase2: {
        title: 'Phase 2: Intermediate',
        questions: [
            {
                question: 'What is the speed of light?',
                options: ['300,000 km/s', '150,000 km/s', '450,000 km/s', '200,000 km/s'],
                correct: 0
            },
            {
                question: 'What is the derivative of x²?',
                options: ['x', '2x', 'x²', '2x²'],
                correct: 1
            }
        ]
    },
    phase3: {
        title: 'Phase 3: Advanced',
        questions: [
            {
                question: 'What is quantum entanglement?',
                options: ['A type of chemical bond', 'A phenomenon where particles are connected', 'A mathematical equation', 'A type of energy'],
                correct: 1
            }
        ]
    }
    // Phases 4-10 would be added with increasing difficulty
};

// Generate phases 4-10 with placeholder questions
for (let i = 4; i <= 10; i++) {
    quizData[`phase${i}`] = {
        title: `Phase ${i}: Expert Level`,
        questions: [
            {
                question: `This is a Phase ${i} question. More challenging content would be here.`,
                options: ['Option A', 'Option B', 'Option C', 'Option D'],
                correct: 0
            }
        ]
    };
}

let currentPhase = null;
let currentAnswers = {};
let userScore = 0;

document.addEventListener('DOMContentLoaded', () => {
    const phaseSelector = document.getElementById('phaseSelector');
    
    // Generate phase buttons
    Object.keys(quizData).forEach((phaseKey, index) => {
        const btn = document.createElement('button');
        btn.className = 'phase-btn';
        btn.textContent = `Phase ${index + 1}`;
        btn.onclick = () => loadPhase(phaseKey);
        phaseSelector.appendChild(btn);
    });
    
    // Load first phase by default
    loadPhase('phase1');
});

function loadPhase(phaseKey) {
    currentPhase = phaseKey;
    currentAnswers = {};
    userScore = 0;
    
    // Update active button
    document.querySelectorAll('.phase-btn').forEach((btn, index) => {
        const phaseKeys = Object.keys(quizData);
        if (phaseKeys[index] === phaseKey) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    const phase = quizData[phaseKey];
    const quizContainer = document.getElementById('quizContainer');
    
    quizContainer.innerHTML = `
        <h2>${phase.title}</h2>
        <div id="questionsContainer"></div>
        <button class="btn-submit" onclick="submitQuiz()" style="margin-top: 2rem;">Submit Quiz</button>
    `;
    
    const questionsContainer = document.getElementById('questionsContainer');
    phase.questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <h3>${index + 1}. ${q.question}</h3>
            <ul class="options">
                ${q.options.map((opt, optIndex) => `
                    <li class="option" onclick="selectQuizOption(${index}, ${optIndex})" data-q="${index}" data-o="${optIndex}">${opt}</li>
                `).join('')}
            </ul>
        `;
        questionsContainer.appendChild(questionDiv);
    });
    
    document.getElementById('scoreDisplay').style.display = 'none';
}

function selectQuizOption(questionIndex, optionIndex) {
    currentAnswers[questionIndex] = optionIndex;
    
    // Update UI
    const options = document.querySelectorAll(`[data-q="${questionIndex}"]`);
    options.forEach(opt => opt.classList.remove('selected'));
    options[optionIndex].classList.add('selected');
}

function submitQuiz() {
    if (!currentPhase) return;
    
    const phase = quizData[currentPhase];
    let score = 0;
    
    phase.questions.forEach((q, index) => {
        if (currentAnswers[index] === q.correct) {
            score++;
        }
    });
    
    userScore = score;
    const percentage = (score / phase.questions.length) * 100;
    
    document.getElementById('scoreValue').textContent = `${score}/${phase.questions.length} (${percentage.toFixed(1)}%)`;
    document.getElementById('scoreDisplay').style.display = 'block';
    
    // Scroll to score
    document.getElementById('scoreDisplay').scrollIntoView({ behavior: 'smooth' });
}

function saveScore() {
    const userName = prompt('Enter your name to save your score:');
    if (!userName) return;
    
    // Get leaderboard from localStorage
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard') || '[]');
    
    // Add new score
    const phaseNumber = parseInt(currentPhase.replace('phase', ''));
    leaderboard.push({
        name: userName,
        score: userScore,
        total: quizData[currentPhase].questions.length,
        phase: phaseNumber,
        date: new Date().toLocaleDateString(),
        timestamp: Date.now()
    });
    
    // Sort by score (descending), then by phase (descending)
    leaderboard.sort((a, b) => {
        const scoreA = (a.score / a.total) * 100;
        const scoreB = (b.score / b.total) * 100;
        if (scoreB !== scoreA) return scoreB - scoreA;
        return b.phase - a.phase;
    });
    
    // Keep top 100
    leaderboard = leaderboard.slice(0, 100);
    
    // Save to localStorage
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    
    alert('Score saved! Check the leaderboard to see your ranking.');
    window.location.href = 'leaderboard.html';
}

