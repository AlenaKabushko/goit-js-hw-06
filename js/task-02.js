//!!!!!!!!!!!!!!!!!!!!!!!!ГОТОВО

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

/* Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul#ingredients. */

const list = document.querySelector("#ingredients");

const items = ingredients.map((ingridient) => {
  const newItem = document.createElement("li");
  newItem.textContent = ingridient;
  newItem.classList.add("item")
  return newItem
})

list.append(...items)

