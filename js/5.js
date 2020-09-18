const inputEl = document.querySelector('#name-input');
const spanNameOutput = document.querySelector('#name-output');
inputEl.addEventListener('input', onInputChangeValue);
function onInputChangeValue(event) {
  spanNameOutput.textContent =
    inputEl.value !== '' ? inputEl.value : 'незнакомец';
}
