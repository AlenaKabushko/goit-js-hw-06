//!!!!!!!!!!!!!!!!!!!!!!!!ГОТОВО
//trim ne pashet

//узнатьб только один раз или после обновления 
//!!!!!!!1 trim i 5

/* Напиши скрипт, который при потере фокуса на инпуте (событие blur),
 проверяет его содержимое на правильное количество введённых символов.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество символов, то border инпута 
становится зелёным, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid, 
которые мы уже добавили в исходные файлы задания.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
} */

const inputRef = document.querySelector('#validation-input');
console.log(inputRef);

const changeBorderColor = (event) => {
  inputRef.value.trim();
  console.log(event.currentTarget.value.length);
  
  event.currentTarget.value.length !== 6 
  ? inputRef.classList.add('invalid') 
  : inputRef.classList.replace('invalid', 'valid');
}

inputRef.addEventListener("blur", changeBorderColor)

