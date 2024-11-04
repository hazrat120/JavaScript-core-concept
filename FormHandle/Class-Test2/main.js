// initial value
let userName = "";
let email = "";
let id = "";

const submitButton = document.getElementById("submit");

// namva input validation
const nameInput = document.getElementById("name");
function nameValidation(event) {
  const { value } = event.target;

  if (submitButton.classList.contains("disable")) {
    submitButton.classList.remove("disable");
  }

  if (value && value.length >= 4) {
    userName = value;
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
    alert("Your name is invalid. Name Start 4 char!");
  }
}
nameInput.addEventListener("change", nameValidation);

// id input validation
const idInput = document.getElementById("id");
function idValidation(event) {
  const { value } = event.target;
  if (submitButton.classList.contains("disable")) {
    submitButton.classList.remove("disable");
  }
  if (value && value.length >= 6) {
    id = value;
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}
idInput.addEventListener("change", idValidation);

// Email validation check
let emailInput = document.getElementById("email");
function checkEmail(event) {
  let { value } = event.target;
  let alertShow = document.getElementById("alert-show");
  let emailIsNan = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (submitButton.classList.contains("disable")) {
    submitButton.classList.remove("disable");
  }

  if (!emailIsNan.test(value)) {
    alertShow.style.display = "block";
    alertShow.style.color = "#FF0000";
    submitButton.disabled = true;
    email = undefined;
  } else {
    alertShow.style.display = "none";
    submitButton.disabled = false;
    email = value;
  }
}

emailInput.addEventListener("change", checkEmail);

// catch name id and regular exp.
// let name = document.getElementById("name");
// let id = document.getElementById("id");

function formHandler() {
  let title = "Window popup";
  let fullname = document.form.fullname.value;
  let id = document.form.id.value;
  let email = document.form.email.value;
  let round = document.form.round.value;
  let sex = document.form.gen.value;

  // new window style attribute
  let formStyle = `style='width: 300px;
          height: auto;
          background: linear-gradient(rgb(224, 200, 200), #797b90);
          margin: 0 auto;
          margin-top: 100px;
          padding: 50px;
          border-radius: 10px;
          color: #fff !important;
          '`;

  let newWindow = window.open("", "", "width: 300px; height: auto");

  with (newWindow.document) {
    write(`<html>`);
    write(`<head><title>` + title + `</title></head>`);
    write(`<body>`);
    write(`<form ${formStyle}>`);
    write(`Full Name: ${fullname} <br/> <br/>`);
    write(`Email: ${email} <br/> <br/>`);
    write(`ID: ${id} <br/> <br/>`);
    write(`Round: ${round} <br/> <br/>`);
    write(`Sex: ${sex} <br/> <br/>`);
    write(`<form/>`);
    write(`</body>`);
    write(`Full Name: ${fullname}`);
    write(`</html>`);
  }
}

document.getElementById("form").addEventListener("submit", onsubmit);

function onsubmit(event) {
  event.preventDefault();

  if (userName && id && email) {
    formHandler();
  } else {
    submitButton.setAttribute("class", "disable");
  }
}
