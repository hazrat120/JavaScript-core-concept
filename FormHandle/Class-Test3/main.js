// variable initial
let fullname = "";
let email = "";
let subject = "";

// let subid = document.getElementById('')
// if()

// submit btn
let submitBtn = document.getElementById("submit");

// name validation
function nameValidate(event) {
  let { value } = event.target;

  if (value && value.length >= 4 && value.length <= 12) {
    fullname = value;
    submitBtn.disable = false;
    console.log(value);
  } else {
    alert("Invalid name!");
    submitBtn.disable = true;
    console.log(value);
  }
}

// email validation
function emailValidate(event) {
  let { value } = event.target;
  let emailRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegx.test(value)) {
    submitBtn.disable = true;
    alert("Enter valid email");
    console.log(value);
  } else {
    submitBtn.disable = false;
    email = value;
    console.log(value);
  }
}

//  form handler
function formHandler() {
  let title = "Window popup";
  let address = document.form.address.value;
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
    write(`Round: ${round} <br/> <br/>`);
    write(`Address: ${address} <br/> <br/>`);
    write(`Sex: ${sex} <br/> <br/>`);
    write(
      `<input type='button' value='Close me' style="
                    background-color: red;
                    color: white;
                    font-size: 14px;
                    padding: 8px 15px;
                    border: none;
                    border-radius: 8px;
                    margin-right: 10px;
                  " onclick='self.close();' />`
    );
    write(`<input type='button' value='Print' onclick='self.print();' />`);
    write(`<form/>`);
    write(`</body>`);
    write(`</html>`);
  }
}

function onsubmit(event) {
  event.preventDefault();

  if (fullname && email) {
    formHandler();
  } else {
    alert("Can't submit!");
  }
}
