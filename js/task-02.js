const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector("#ingredients");

const items = ingredients.map((ingridient) => {
  const newItem = document.createElement("li");
  newItem.textContent = ingridient;
  newItem.classList.add("item");

  return newItem;
});

listRef.append(...items);

