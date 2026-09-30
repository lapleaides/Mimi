const buttons = document.querySelectorAll('.buy-button');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        button.textContent = 'Добавлено ✓';
        button.style.background = '#cfea75';
    });
});