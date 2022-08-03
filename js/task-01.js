/* Посчитает и выведет в консоль количество категорий 
в ul#categories, то есть элементов li.item.

Для каждого элемента li.item в списке ul#categories, 
найдет и выведет в консоль текст заголовка элемента (тега <h2>) 
и количество элементов в категории (всех вложенных в него <li>).

В результате, в консоли будут выведены такие сообщения.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5 */

const numberOfCategories = document.querySelector("#categories");
console.log("Number of categories: ", numberOfCategories.children.length);

const categorуElement = numberOfCategories.querySelectorAll(".item");
console.log(categorуElement);

const categoryTitle = document.querySelectorAll("h2")
console.log("Category: ", categoryTitle)
// console.log("Elements: ", ul.children.length)
//console.log(categorуElement.textContent)