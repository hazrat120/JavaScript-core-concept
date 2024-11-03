function submitBtn() {
  let fname = document.form.fname.value;
  let lname = document.form.lname.value;
  let email = document.form.email.value;

  newWindow = open("", "", "Width: 300px, height:500px ");

  with (newWindow.document) {
    write("First Name: " + fname);
    write("<br>");
    write("Last Name: " + lname);
    write("<br>");
    write("Email: " + email);
  }
}
