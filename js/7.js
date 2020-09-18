const inputRangeEl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

inputRangeEl.addEventListener('input', onInputChangeFontSize);
function onInputChangeFontSize(event) {
  spanText.style.fontSize = event.target.value + 'px';
}
