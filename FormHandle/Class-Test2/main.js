function formHandler() {
  let title = "Window popup";
  let fullname = document.form.fullname.value;
  let id = document.form.id.value;
  // let email = document.form.email.value;
  let round = document.form.round.value;
  let sex = document.form.gen.value;

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
    write(`Full name: ${fullname} <br/> <br/>`);
    write(`ID: ${id} <br/> <br/>`);
    write(`Round: ${round} <br/> <br/>`);
    write(`Sex: ${sex} <br/> <br/>`);
    write(`<form/>`);
    write(`</body>`);
    write(`Full Name: ${fullname}`);
    write(`</html>`);
  }
}
