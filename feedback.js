document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedbackForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const feedback = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            date: new Date().toLocaleString()
        };
        
        // Save to localStorage (in a real app, this would be sent to a server)
        let feedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
        feedbacks.push(feedback);
        localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
        
        // Show success message
        alert('Thank you for your feedback! We appreciate your input.');
        form.reset();
    });
});

