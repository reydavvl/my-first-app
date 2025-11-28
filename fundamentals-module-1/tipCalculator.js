function calculateTip(billAmount, tipPercent) {
    const tip = billAmount * (tipPercent / 100);
    const total = billAmount + tip;
    return total;
}

console.log(calculateTip(50, 20))