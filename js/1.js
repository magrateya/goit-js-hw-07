const getItemElLength = (function () {
  const listEl = document.querySelector('#categories');
  const itemEl = listEl.querySelectorAll('.item');
  console.log(`В списке ${itemEl.length} категории.`);

  const itemsListArr = [...itemEl];
  itemsListArr.forEach(item => {
    console.log(`Категория: ${item.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${itemsListArr.length}`);
  });
})();
