// Subjects data - will be populated from PDF analysis
const subjects = [
    { id: 'chemistry', name: 'Chemistry', icon: '⚗️', color: '#4a90e2' },
    { id: 'add-maths', name: 'Add Maths', icon: '📐', color: '#50c878' },
    { id: 'core-maths', name: 'Core Maths', icon: '🔢', color: '#ff6b6b' },
    { id: 'physics', name: 'Physics', icon: '⚛️', color: '#9b59b6' },
    { id: 'biology', name: 'Biology', icon: '🧬', color: '#e74c3c' },
    { id: 'computing', name: 'Computing', icon: '💻', color: '#3498db' },
    { id: 'general-science', name: 'General Science', icon: '🔬', color: '#1abc9c' },
    { id: 'social-studies', name: 'Social Studies', icon: '🌍', color: '#f39c12' },
    { id: 'english', name: 'English', icon: '📖', color: '#e67e22' },
    { id: 'government', name: 'Government', icon: '🏛️', color: '#34495e' },
    { id: 'economics', name: 'Economics', icon: '💰', color: '#27ae60' },
    { id: 'geography', name: 'Geography', icon: '🗺️', color: '#16a085' },
    { id: 'aviation', name: 'Aviation and Aerospace', icon: '✈️', color: '#2980b9' },
    { id: 'french', name: 'French', icon: '🇫🇷', color: '#c0392b' },
    { id: 'metal-work', name: 'Metal Work', icon: '🔧', color: '#7f8c8d' },
    { id: 'electricals', name: 'Electricals', icon: '⚡', color: '#f1c40f' },
    { id: 'wood-work', name: 'Wood Work', icon: '🪵', color: '#8b4513' }
];

// Load subjects on page load
document.addEventListener('DOMContentLoaded', () => {
    const subjectsGrid = document.getElementById('subjectsGrid');
    
    subjects.forEach(subject => {
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.innerHTML = `
            <span class="subject-icon">${subject.icon}</span>
            <h3>${subject.name}</h3>
            <p>Click to explore topics</p>
        `;
        card.addEventListener('click', () => {
            window.location.href = `subject-topics.html?subject=${subject.id}`;
        });
        subjectsGrid.appendChild(card);
    });
});

