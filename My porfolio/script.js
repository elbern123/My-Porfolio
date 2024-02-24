
let sections = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');


var typed = new Typed(".auto-typing", {
  strings: ["I am a Front End Developer", " Programmer ", " and a Graphics Designer"],
  typeSpeed: 150,
  backSpeed: 60,
  loop: true,
});

var typed = new Typed(".typing", {
  strings: ["Programmer", "Front End Developer", "Graphics Designer"],
  typeSpeed: 150,
  backSpeed: 60,
  loop: true,
});

var subjectInput1 = document.getElementById('fname');
var subjectInput2 = document.getElementById('lname');
var subjectInput3 = document.getElementById('email');
var subjectInput4 = document.getElementById('number');
var subjectInput5 = document.getElementById('message');

var form = document.getElementById('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('hello');

    var firstname = subjectInput1.value;
    var lastname = subjectInput2.value;
    var emailadd = subjectInput3.value;
    var phonenumber = subjectInput4.value;
    var messages = subjectInput5.value;


    console.log(firstname);
    console.log(lastname);
    console.log(emailadd);
    console.log(phonenumber);
    console.log(messages);

    const emailBody = `
    <html>
    
      <p>
        <strong>First Name:</strong> ${firstname} <br>
        <strong>Last Name:</strong> ${lastname} <br>
        <strong>Email:</strong> ${emailadd} <br>
        <strong>Phone Number:</strong> ${phonenumber} <br>
        <strong>Message:</strong> ${messages}
      </p>
    </body>
    </html>
    `;

    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "elbernberdera123@gmail.com",
      Password : "BB766D747720411A004430EBCC97A930FFF7",
      To : "elbernberdera@gmail.com",
      From :emailadd,
      Subject : "My porfolio",
      Body :  emailBody
  }).then(
    message => Swal.fire({
      icon: 'success',
      title: 'Email Sent!',
      text: 'Your message has been sent successfully.',
      confirmButtonText: 'OK'
    })
   
  );
    
    form.reset();
});