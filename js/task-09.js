const btnRef = document.querySelector('.change-color');
const textColorRef = document.querySelector('.color');
const bodyRef = document.querySelector('body')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
  };

const changeBgColor = (event) => {
  const randomColor = getRandomHexColor();
  textColorRef.textContent = randomColor;
  bodyRef.style.background = randomColor;
};

btnRef.addEventListener('click', changeBgColor)




