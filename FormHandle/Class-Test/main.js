// form handler function
function formHandler(e) {
  e.preventDefault();

  let title = "Hello World";
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

  let newWindow = window.open("", "", "width: 200px, height: 700px");

  with (newWindow.document) {
    write(`<html>`);
    write(`<head><title>` + title + `</title></head>`);
    write(`<body>`);
    write(`<div>`);
    write(`Full Name: ${fullname} <br/>`);
    write(`Email: ${email} <br/>`);
    write(`Gender: ${gender} <br/>`);
    write(`Address: ${address} <br/>`);
    write(`Round: ${round} <br/>`);
    write(`Education: ${subject} <br/> <br/> `);
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
    write(`</div>`);
    write(`</body>`);
    write(`</html>`);
  }
}
