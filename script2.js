document.addEventListener("DOMContentLoaded", () => {
    let votesF1 = parseInt(localStorage.getItem('votesF1')) || 0;
    let votesEq = parseInt(localStorage.getItem('votesEq')) || 0;
    document.getElementById('votes-f1').textContent = votesF1;
    document.getElementById('votes-eq').textContent = votesEq;
    document.getElementById('vote-f1').addEventListener('click', () => {
        votesF1++;
        localStorage.setItem('votesF1', votesF1);
        document.getElementById('votes-f1').textContent = votesF1;
    });
    document.getElementById('vote-eq').addEventListener('click', () => {
        votesEq++;
        localStorage.setItem('votesEq', votesEq);
        document.getElementById('votes-eq').textContent = votesEq;
    });
});