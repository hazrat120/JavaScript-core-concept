// form handler function
function formHandler(e) {
  e.preventDefault();

  let fullname = document.form.fullname.value;
  let email = document.form.email.value;
  let address = document.form.address.value;
  let round = document.form.round.value;
  let gender = document.form.gen.value;
  let subject = "";

  console.log(fullname, email, address, round, gender, subject);

  for (i = 0; i < document.form.subject.length; i++) {
    if (document.form.subject[i].checked) {
      subject += document.form.subject[i].value + ", ";
      console.log(subject);
    }
  }

  let newWindow = window.open("", "", "width: 400px, height: 700px");

  with (newWindow.document) {
    write(`Full name: ${fullname}. <br/>`);
    write(`Email: ${email} <br/>`);
    write(`Address: ${address} <br/>`);
    write(`Round: ${round} <br/>`);
    write(`Subject: ${subject} <br/>`);
    write(`Gender: ${gender} <br/>`);
    write(``);
  }
}
