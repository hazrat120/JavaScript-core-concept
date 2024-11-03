function formValue() {
  // catch input value
  let title = "Form Value Catch.";
  let fullname = document.form.fullname.value;
  let email = document.form.email.value;
  let id = document.form.id.value;
  let gender = document.form.gender.value;
  let round = document.form.round.value;
  let country = "";

  // create a popup window
  let newWindow = window.open("", "", "width: 400px, height: 500px");

  // catch cheak box value using loop
  for (i = 0; i < document.form.country.length; i++) {
    if (document.form.country[i].checked) {
      country += document.form.country[i].value + ", ";
      console.log(country);
    }
  }

  // print value using open window popup
  with (newWindow.document) {
    // create a html document
    write("<html>");
    write("<head><title>" + title + "</title></head>");
    write("<body>");

    write("<div style='border: 1px solid gray;'> Name: " + fullname + "<br>");
    write("Email: " + email + "<br/>");
    write("Id: " + id + "<br/>");
    write("Gender: " + gender + "<br/>");
    write("Round: " + round + "<br/>");
    write("Country: " + country + "<br/>");

    write('<input type="button" value="Close me" onclick="self.close();"/>');
    write('<input type="button" value="Print" onClick="self.print();" />');
    write("</div>");

    write("</body>");
    write("</html>");
  }
}
