function formValue() {
  let title = "Form Value Catch.";
  let fullname = document.form.fullname.value;
  let email = document.form.email.value;
  let id = document.form.id.value;
  let gender = document.form.gender.value;
  let round = document.form.round.value;
  let country = "";

  let newWindow = window.open("", "", "width: 400px, height: 500px");

  for (i = 0; i < document.form.country.length; i++) {
    if (document.form.country[i].checked) {
      country += document.form.country[i].value + ", ";
      console.log(country);
    }
  }

  with (newWindow.document) {
    write(`${title}`);
    write("<br>");
    write(`Full name: ${fullname}`);
    write("<br>");
    write(`Email: ${email}`);
    write("<br>");
    write(`Id: ${id}`);
    write("<br>");
    write(`Gender: ${gender}`);
    write("<br>");
    write(`Round: ${round}`);
    write("<br>");
    write(`Country: ${country}`);
  }
}
