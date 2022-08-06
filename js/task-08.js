const formRef = document.querySelector(".login-form");
const formEmailRef = formRef.elements.email;
const formPasswordRef = formRef.elements.password;

const submitForm = (event) => {
  event.preventDefault();

  if (formEmailRef.value === "" || formPasswordRef.value === "") {
    return (alert("Все поля должны быть заполнены! Спасибо!"));
  };

  const formData = {
    email: formEmailRef.value, 
    password: formPasswordRef.value,
  };

  console.log(formData);

  event.currentTarget.reset();
};

formRef.addEventListener("submit", submitForm);