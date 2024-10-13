// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const checkEnergyBtn = document.getElementById('checkEnergy');
    const energyInput = document.getElementById('potentialEnergy');
    const energyResult = document.getElementById('energyResult');

    checkEnergyBtn.addEventListener('click', () => {
        const userAnswer = Number(energyInput.value);
        const mass = 500; // in kg
        const height = 40; // in meters
        const gravity = 9.8; // m/s²
        const correctEnergy = mass * gravity * height; // Calculate potential energy

        if (userAnswer === correctEnergy) {
            energyResult.innerText = "Correct! The potential energy is " + correctEnergy + " joules.";
        } else {
            energyResult.innerText = "Oops! That's not right. Try again.";
        }
    });
});
