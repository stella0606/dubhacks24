// Define a list of elements and their symbols
const elements = {
    H: "Hydrogen",
    He: "Helium",
    O: "Oxygen",
    C: "Carbon",
    N: "Nitrogen",
    // Add more elements as needed
};

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const checkElementBtn = document.getElementById('checkElement');
    const elementInput = document.getElementById('element');
    const elementResult = document.getElementById('elementResult');

    checkElementBtn.addEventListener('click', () => {
        const symbol = elementInput.value.trim().toUpperCase(); // Normalize input
        if (elements[symbol]) {
            elementResult.innerText = `Correct! ${symbol} stands for ${elements[symbol]}.`;
        } else {
            elementResult.innerText = `Sorry, ${symbol} is not a valid element symbol.`;
        }
    });
});
