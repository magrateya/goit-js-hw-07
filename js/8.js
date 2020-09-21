const inputEl = document.querySelector('#controls > input');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const divBoxes = document.querySelector('#boxes');

const createBoxes = function (amount) {
  const arrDivs = [];
  divBoxes.innerHTML = '';
  if (amount > 0) {
    for (let i = 1; i <= amount; i += 1) {
      const divEl = document.createElement('div');
      divEl.style.width = String(30 + i * 10) + 'px';
      divEl.style.height = String(30 + i * 10) + 'px';
      divEl.style.backgroundColor = `rgb(${Math.round(
        Math.random() * 255,
      )}, ${Math.round(Math.random() * 255)}, ${Math.round(
        Math.random() * 255,
      )})`;
      arrDivs.push(divEl);
    }
  }
  return divBoxes.append(...arrDivs);
};
renderBtn.addEventListener('click', () => createBoxes(inputEl.value));
destroyBtn.addEventListener('click', () => (divBoxes.innerHTML = ''));
