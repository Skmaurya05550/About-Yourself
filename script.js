function findTrait() {
    const traits = ['Very Intelligent 🧠',
                    'Anger 😡',
                    'Speaking More 🗣️',
                    'Cute 🥰'];
    const numberInput = document.getElementById('numberInput').value;
    const number = parseInt(numberInput, 10);

    if (isNaN(number) || number < 1) {
        alert("Please enter a valid number between 1 and 31.");
        return;
    }

    const traitIndex = (number - 1) % 4;
    const result = traits[traitIndex];

    const resultBox = document.getElementById('result');
    resultBox.innerHTML = `The trait for number ${number} is: ${result}`;
    resultBox.style.animation = 'none';
    resultBox.offsetHeight; // trigger reflow
    resultBox.style.animation = null; 
}

























