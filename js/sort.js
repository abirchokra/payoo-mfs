// value and number converter
function getInputValue(id) {
    const input = document.getElementById(id).value;
    const inputNumber = parseFloat(input);

    return inputNumber;


}
// value 
function getTextValue(id) {
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;

}
function showSectionId(id) {
    document.getElementById('add-money-section').classList.add('hidden');
    document.getElementById('cash-out-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');

}