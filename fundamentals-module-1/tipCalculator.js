// Simple tip calculator using functions and variables.

// calculateTip(): receives a bill + tip percentage and returns the tip amount.
function calculateTip(billAmount, tipPercent) {
    return billAmount * (tipPercent / 100); // convert percentage + calculate tip.
}

// calculateTotal(): returns bill + calculated tip
function calculateTotal(billAmount, tipPercent) {
    const tip = calculateTip(billAmount, tipPercent); // reuses the calculateTip() function in the "tip" variable
    return billAmount + tip; // adds bill + tip
}

//Tests function by logging results to the console.
console.log(calculateTip(100, 20)); // should log: 20
console.log(calculateTotal(100, 20)); // should log: 120
