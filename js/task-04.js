const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector("#value");

let counterValue = 0;

const decrement = () => {
    counterValue -= 1;
    valueRef.textContent = counterValue
};

const increment = () => {
    counterValue += 1;
    valueRef.textContent = counterValue
};

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);

