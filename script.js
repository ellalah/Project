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


$(document).ready(function() {
  $("#toggle").click(function() {
    var elem = $("#toggle").text();
    if (elem == "Read More") {
      $("#toggle").text("Read Less");
      $("#text").slideDown();
    } else {
      $("#toggle").text("Read More");
      $("#text").slideUp();
    }
  });
});