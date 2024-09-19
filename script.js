function toggleContent() {
    const content = document.getElementById('card-content');
    const button = document.querySelector('.toggle-btn');

    // Check if the content is currently collapsed or expanded
    if (content.classList.contains('open')) {
        // Collapse the content
        content.classList.remove('open');
        button.textContent = '+';
    } else {
        // Expand the content
        content.classList.add('open');
        button.textContent = '-';
    }
}