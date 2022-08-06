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

let amount;
const amountFromInput = (event) => {
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
    text-align: center`);

    collection.push(box);
  } 
  boxesRef.append(...collection); 
}

const destroyBoxes = () => {
  for (let i = 0; i < amount; i +=1) {
    boxesRef.firstChild.remove();
  }

  inputRef.value = "";
}

buttonCreateRef.addEventListener('click', createBoxes);
buttonDestroyRef.addEventListener('click', destroyBoxes);