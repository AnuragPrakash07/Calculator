// Get the input box and all buttons
const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

// Initialize a variable to store the input value
let inputValue = '';

// Add event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the text content of the button
        const buttonValue = button.textContent;

        // Add blink effect
        if (button.classList.contains('equalBtn')) {
            button.classList.add('blink-equal');
            setTimeout(() => button.classList.remove('blink-equal'), 400);
        } else {
            button.classList.add('blink');
            setTimeout(() => button.classList.remove('blink'), 200);
        }

        // Handle the "AC" (All Clear) button
        if (buttonValue === 'AC') {
            inputValue = '';
            inputBox.value = inputValue;

        // Handle the "DEL" (Delete) button
        } else if (buttonValue === 'DEL') {
            inputValue = inputValue.slice(0, -1);
            inputBox.value = inputValue;

        // Handle the "=" (Equal) button
        } else if (buttonValue === '=') {
            try {
                // Evaluate the expression and update the input value
                inputValue = eval(inputValue).toString();
                inputBox.value = inputValue;
            } catch (error) {
                inputBox.value = 'Error';
            }

        // Handle all other button inputs
        } else {
            inputValue += buttonValue;
            inputBox.value = inputValue;
        }
    });
});
