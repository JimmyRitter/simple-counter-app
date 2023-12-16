document.addEventListener('DOMContentLoaded', () => {
    const counterDisplay = document.getElementById('counter');
    let counter = 0;

    document.getElementById('plusBtn').addEventListener('click', () => {
        counter++;
        counterDisplay.textContent = counter;
    });

    document.getElementById('minusBtn').addEventListener('click', () => {
        counter--;
        counterDisplay.textContent = counter;
    });
});
