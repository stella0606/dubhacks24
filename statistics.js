// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const checkAverageBtn = document.getElementById('checkAverage');
    const averageInput = document.getElementById('averagePosition');
    const averageResult = document.getElementById('averageResult');

    checkAverageBtn.addEventListener('click', () => {
        const userAnswer = Number(averageInput.value);
        const correctAverage = (2 + 4 + 1 + 3 + 5) / 5; // Calculate the correct average

        if (userAnswer === correctAverage) {
            averageResult.innerText = "Correct! The average position is 3.";
        } else {
            averageResult.innerText = "Oops! That's not right. Try again.";
        }
    });
});
