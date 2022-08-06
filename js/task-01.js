const numberOfCategories = document.querySelector("#categories");
console.log("Number of categories: ", numberOfCategories.children.length);

const categorуElement = numberOfCategories.querySelectorAll(".item");

[...categorуElement].forEach((item) => {
  console.log("Category: ", item.querySelector("h2").textContent);
  console.log("Elements: ", item.querySelectorAll("li").length);
});