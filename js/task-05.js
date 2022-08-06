const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const enteringName = (event) => {
    outputRef.textContent = event.currentTarget.value;

    if (event.currentTarget.value.trim() === "") {
        outputRef.textContent = "Anonymous"
    }
};

inputRef.addEventListener('input', enteringName);