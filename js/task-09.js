//!!!!!!!!!gotovo\

/* Напиши скрипт, который изменяет цвета фона элемента <body> 
через инлайн стиль при клике на button.change-color 
и выводит значение цвета в span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
} */

const btnRef = document.querySelector('.change-color');
console.log(btnRef);
const textColorRef = document.querySelector('.color');
console.log(textColorRef);
const bodyRef = document.querySelector('body')


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
  };

const changeBgColor = (event) => {
  const randomColor = getRandomHexColor();
 // console.log(randomColor)

  textColorRef.textContent = randomColor;
  
  bodyRef.style.background = randomColor;
}

btnRef.addEventListener('click', changeBgColor)




