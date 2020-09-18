let counterValue = 0;
const calculatedValue = document.querySelector('#value');
const onIncrementButtonClick = function () {
  counterValue += 1;
  calculatedValue.textContent = counterValue;
};
const onDecrementButtonClick = function () {
  counterValue -= 1;
  calculatedValue.textContent = counterValue;
};
const btnIncrement = document.querySelector(
  '#counter button[data-action="increment"]',
);
const btnDecrement = document.querySelector(
  '#counter button[data-action="decrement"]',
);
btnIncrement.addEventListener('click', onIncrementButtonClick);
btnDecrement.addEventListener('click', onDecrementButtonClick);
