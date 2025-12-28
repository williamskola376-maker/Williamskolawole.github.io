// Topic content data - will be populated from PDFs
const topicContent = {
    // Example structure - will be expanded with actual PDF content
    'chem-1': {
        title: 'Section 1: Introduction to Chemistry',
        content: `
            <h2>Introduction to Chemistry</h2>
            <p>Chemistry is the study of matter and the changes it undergoes. This section covers fundamental concepts...</p>
            <h3>Key Concepts:</h3>
            <ul>
                <li>Matter and its properties</li>
                <li>Elements and compounds</li>
                <li>Chemical reactions</li>
            </ul>
        `,
        testQuestions: [
            {
                question: 'What is chemistry?',
                options: ['Study of matter', 'Study of life', 'Study of space', 'Study of numbers'],
                correct: 0
            },
            {
                question: 'What is an element?',
                options: ['A pure substance', 'A mixture', 'A compound', 'A solution'],
                correct: 0
            }
        ]
    }
};

// Q&A storage (in a real app, this would be server-side)
let qaData = {};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const subjectId = urlParams.get('subject');
    const topicId = urlParams.get('topic') || 'chem-1';
    
    const topic = topicContent[topicId] || topicContent['chem-1'];
    document.getElementById('topicTitle').textContent = topic.title;
    document.getElementById('contentArea').innerHTML = topic.content;
    
    // Load test questions
    const testContainer = document.getElementById('testContainer');
    topic.testQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <h3>${index + 1}. ${q.question}</h3>
            <ul class="options">
                ${q.options.map((opt, optIndex) => `
                    <li class="option" onclick="selectOption(${index}, ${optIndex})" data-question="${index}" data-option="${optIndex}">${opt}</li>
                `).join('')}
            </ul>
        `;
        testContainer.appendChild(questionDiv);
    });
    
    // Load existing Q&A
    if (qaData[topicId]) {
        displayAnswers(topicId);
    }
    
    // Handle question form submission
    document.getElementById('questionForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const question = document.getElementById('userQuestion').value;
        if (!question.trim()) return;
        
        if (!qaData[topicId]) qaData[topicId] = [];
        qaData[topicId].push({
            question: question,
            answer: `Thank you for your question! Our answer: This is a placeholder answer. In a full implementation, answers would be provided based on the topic content.`,
            date: new Date().toLocaleDateString()
        });
        
        document.getElementById('userQuestion').value = '';
        displayAnswers(topicId);
    });
});

let selectedAnswers = {};

function selectOption(questionIndex, optionIndex) {
    selectedAnswers[questionIndex] = optionIndex;
    
    // Update UI
    const options = document.querySelectorAll(`[data-question="${questionIndex}"]`);
    options.forEach(opt => opt.classList.remove('selected'));
    options[optionIndex].classList.add('selected');
}

function submitTest() {
    const topicId = new URLSearchParams(window.location.search).get('topic') || 'chem-1';
    const topic = topicContent[topicId] || topicContent['chem-1'];
    
    let score = 0;
    topic.testQuestions.forEach((q, index) => {
        if (selectedAnswers[index] === q.correct) {
            score++;
        }
    });
    
    const percentage = (score / topic.testQuestions.length) * 100;
    alert(`Test completed! You scored ${score}/${topic.testQuestions.length} (${percentage.toFixed(1)}%)`);
}

function displayAnswers(topicId) {
    const answerSection = document.getElementById('answerSection');
    if (!qaData[topicId] || qaData[topicId].length === 0) {
        answerSection.innerHTML = '<p>No questions answered yet. Be the first to ask!</p>';
        return;
    }
    
    answerSection.innerHTML = '<h3>Questions & Answers:</h3>';
    qaData[topicId].forEach((qa, index) => {
        const qaDiv = document.createElement('div');
        qaDiv.style.cssText = 'background: white; padding: 1.5rem; margin: 1rem 0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);';
        qaDiv.innerHTML = `
            <p><strong>Q${index + 1}:</strong> ${qa.question}</p>
            <p style="margin-top: 0.5rem; color: #4a90e2;"><strong>A:</strong> ${qa.answer}</p>
            <small style="color: #666;">Answered on ${qa.date}</small>
        `;
        answerSection.appendChild(qaDiv);
    });
}

