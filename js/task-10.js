//gotovo

/* Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
после чего рендерится коллекция. При нажатии на кнопку Очистить, 
коллекция элементов очищается.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
Создай функцию createBoxes(amount), которая принимает один параметр - число. 
Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую 
функцию getRandomHexColor для получения цвета.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, 
тем самым удаляя все созданные элементы.*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsRef = document.querySelector('#controls');
const boxesRef = document.querySelector('#boxes');
const inputRef = controlsRef.querySelector('input');
const buttonCreateRef = controlsRef.querySelector('button[data-create]');
const buttonDestroyRef = controlsRef.querySelector('button[data-destroy]');

//console.log(controlsRef, inputRef, buttonCreateRef, buttonDestroyRef, boxesRef);

let amount;
const amountFromInput = (event) => {
  //console.log(Number(event.currentTarget.value))
  amount = Number(event.currentTarget.value)
}

inputRef.addEventListener('input', amountFromInput);

const createBoxes = () => {
  const collection = []

  for (let i = 0; i < amount; i +=1) {
    const box = document.createElement("div");
  
    box.setAttribute('style',
    `width: ${30 + (i * 10)}px; 
    height: ${30 + (i *10)}px; 
    background-color: ${getRandomHexColor()};
    margin: 0 auto;
    text-align: center`)

    collection.push(box)
  } 
  boxesRef.append(...collection) 
}

const destroyBoxes = () => {
  for (let i = 0; i < amount; i +=1) {
    boxesRef.firstChild.remove()
  }

  inputRef.value = "";
}

buttonCreateRef.addEventListener('click', createBoxes)
buttonDestroyRef.addEventListener('click', destroyBoxes)