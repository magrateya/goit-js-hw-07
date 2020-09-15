const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listContainer = document.querySelector('#ingredients');

// const listItems = ingredients.map(ingredient => {
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = ingredient;
//   return listItemEl;
// });
const makeListItems = ingredientsArr => {
  return ingredientsArr.map(ingredient => {
    const listItemEl = document.createElement('li');
    listItemEl.textContent = ingredient;
    return listItemEl;
  });
};
const listItems = makeListItems(ingredients);
listContainer.append(...listItems);
