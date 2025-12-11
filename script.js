document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('mainForm');
    const textInput = document.getElementById('textInput');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const inputValue = textInput.value;
        alert('You submitted: ' + inputValue);
        textInput.value = '';
    });
});
