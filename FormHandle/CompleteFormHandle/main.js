// html form handle and modifie value
function formHandler() {
  let title = "Popup Form";
  let parent = document.getElementById("parent");
  let fname = document.form.fname.value;
  let lname = document.form.lname.value;
  let email = document.form.email.value;
  let phone = document.form.phone.value;
  let bdate = document.form.bdate.value;
  let gender = document.form.gender.value;
  let addres = document.form.addres.value;
  let staddress = document.form.staddress.value;
  let city = document.form.city.value;
  let zipcode = document.form.zipcode.value;
  let aboutus = document.form.aboutus.value;
  let update = document.form.update.value;
  let term = document.form.term.value;
  let education = "";

  for (i = 0; i < document.form.edu.length; i++) {
    if (document.form.edu[i].checked) {
      education += document.form.edu[i].value + ", ";
      console.log(education);
    }
  }

  let newWindow = window.open("", "", "width: 450px; height: auto");

  with (newWindow.document) {
    write(`<html>`);
    write(`<head><title>` + title + `</title></head>`);
    write(`<body>`);
    write("<div style='border: 1px solid black' >");
    write(`First Name: ${fname} <br/>`);
    write(`Last Name: ${lname} <br/>`);
    write(`Email: ${email} <br/>`);
    write(`Phone: ${phone} <br/>`);
    write(`Date of birth: ${bdate} <br/>`);
    write(`Gender: ${gender} <br/>`);
    write(`Address: ${addres} <br/>`);
    write(`State address: ${staddress} <br/>`);
    write(`City: ${city} <br/>`);
    write(`Zipcode: ${zipcode} <br/>`);
    write(`Aboutus: ${aboutus} <br/>`);
    write(`Promotional email: ${update} <br/>`);
    write(`Term & conditions: ${term} <br/>`);
    write(`Education: ${education} `);
    write("</div>");
    write(`</body>`);
    write(`</html>`);
  }
}
