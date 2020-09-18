const inputEl = document.querySelector('#validation-input');
const validLength = Number(inputEl.dataset.length);
console.log(validLength);
inputEl.addEventListener('blur', onInputValidation);
function onInputValidation() {
  console.log(inputEl.value.length);
  if (inputEl.value.length === validLength) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
}
