// Subject topics data - will be populated from PDF analysis
// Structure: { subjectId: [{ id, title, description }] }
const topicsData = {
    'chemistry': [
        { id: 'chem-1', title: 'Section 1: Introduction to Chemistry', description: 'Basic concepts and principles' },
        { id: 'chem-2', title: 'Section 2: Atomic Structure', description: 'Understanding atoms and elements' },
        { id: 'chem-3', title: 'Section 3: Chemical Bonding', description: 'How atoms combine' },
        { id: 'chem-4', title: 'Section 4: States of Matter', description: 'Solids, liquids, and gases' },
        { id: 'chem-5', title: 'Section 5: Chemical Reactions', description: 'Types and mechanisms' },
        { id: 'chem-6', title: 'Section 6: Acids and Bases', description: 'pH and chemical properties' },
        { id: 'chem-7', title: 'Section 7: Organic Chemistry', description: 'Carbon compounds' },
        { id: 'chem-8', title: 'Section 8: Electrochemistry', description: 'Chemical and electrical energy' },
        { id: 'chem-9', title: 'Section 9: Thermodynamics', description: 'Energy in chemical systems' },
        { id: 'chem-10', title: 'Section 10: Advanced Topics', description: 'Complex chemical concepts' }
    ],
    'biology': [
        { id: 'bio-1', title: 'Section 1: Introduction to Biology', description: 'Life and living organisms' },
        { id: 'bio-2', title: 'Section 2: Cell Biology', description: 'Cell structure and function' },
        { id: 'bio-3', title: 'Section 3: Genetics', description: 'Heredity and variation' },
        { id: 'bio-4', title: 'Section 4: Ecology', description: 'Organisms and environment' },
        { id: 'bio-5', title: 'Section 5: Human Biology', description: 'Human body systems' },
        { id: 'bio-6', title: 'Section 6: Plant Biology', description: 'Plant structure and function' },
        { id: 'bio-7', title: 'Section 7: Evolution', description: 'Origin and development of species' },
        { id: 'bio-8', title: 'Section 8: Microbiology', description: 'Microorganisms and their roles' }
    ],
    'add-maths': [
        { id: 'math-1', title: 'Section 1: Functions', description: 'Mathematical functions' },
        { id: 'math-2', title: 'Section 2: Quadratic Equations', description: 'Solving quadratic problems' },
        { id: 'math-3', title: 'Section 3: Trigonometry', description: 'Angles and triangles' },
        { id: 'math-4', title: 'Section 4: Calculus', description: 'Derivatives and integrals' },
        { id: 'math-5', title: 'Section 5: Vectors', description: 'Vector mathematics' },
        { id: 'math-6', title: 'Section 6: Statistics', description: 'Data analysis' },
        { id: 'math-7', title: 'Section 7: Probability', description: 'Chance and likelihood' },
        { id: 'math-8', title: 'Section 8: Sequences and Series', description: 'Mathematical patterns' },
        { id: 'math-9', title: 'Section 9: Complex Numbers', description: 'Advanced number systems' },
        { id: 'math-10', title: 'Section 10: Advanced Topics', description: 'Complex mathematical concepts' }
    ]
};

// Subject names mapping
const subjectNames = {
    'chemistry': 'Chemistry',
    'add-maths': 'Additional Mathematics',
    'core-maths': 'Core Mathematics',
    'physics': 'Physics',
    'biology': 'Biology',
    'computing': 'Computing',
    'general-science': 'General Science',
    'social-studies': 'Social Studies',
    'english': 'English',
    'government': 'Government',
    'economics': 'Economics',
    'geography': 'Geography',
    'aviation': 'Aviation and Aerospace',
    'french': 'French',
    'metal-work': 'Metal Work',
    'electricals': 'Electricals',
    'wood-work': 'Wood Work'
};

// Load topics on page load
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const subjectId = urlParams.get('subject') || 'chemistry';
    
    const subjectTitle = document.getElementById('subjectTitle');
    subjectTitle.textContent = `${subjectNames[subjectId] || 'Subject'} Topics`;
    
    const topicsGrid = document.getElementById('topicsGrid');
    const topics = topicsData[subjectId] || topicsData['chemistry'];
    
    if (topics.length === 0) {
        topicsGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">Topics will be loaded from PDF files. Please check back soon!</p>';
        return;
    }
    
    topics.forEach(topic => {
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.innerHTML = `
            <span class="subject-icon">📄</span>
            <h3>${topic.title}</h3>
            <p>${topic.description}</p>
        `;
        card.addEventListener('click', () => {
            window.location.href = `topic-content.html?subject=${subjectId}&topic=${topic.id}`;
        });
        topicsGrid.appendChild(card);
    });
});

