function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}
