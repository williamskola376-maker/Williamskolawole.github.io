document.addEventListener('DOMContentLoaded', () => {
    loadLeaderboard();
});

function loadLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard') || '[]');
    const tbody = document.getElementById('leaderboardBody');
    
    if (leaderboard.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; padding: 2rem;">No scores yet. Be the first to take a quiz!</td></tr>';
        return;
    }
    
    tbody.innerHTML = '';
    
    leaderboard.forEach((entry, index) => {
        const row = document.createElement('tr');
        
        // Determine rank badge
        let badgeClass = '';
        let rankText = index + 1;
        if (index === 0) badgeClass = 'gold';
        else if (index === 1) badgeClass = 'silver';
        else if (index === 2) badgeClass = 'bronze';
        
        const percentage = ((entry.score / entry.total) * 100).toFixed(1);
        
        row.innerHTML = `
            <td>
                ${badgeClass ? `<span class="rank-badge ${badgeClass}">${rankText}</span>` : rankText}
            </td>
            <td>${entry.name}</td>
            <td>${entry.score}/${entry.total} (${percentage}%)</td>
            <td>Phase ${entry.phase}</td>
            <td>${entry.date}</td>
        `;
        
        tbody.appendChild(row);
    });
}

