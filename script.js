function sendEmail (){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "ehalstead92@googlemail.com",
        Password : "J0ssBut13r21!",
        To : 'ehalstead92@googlemail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Submission",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Message: " + document.getElementById("message").value

    }).then(
    message => alert("Message Sent Successfully")
    );
}

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }