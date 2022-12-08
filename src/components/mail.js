// inlcude this tag inside the root
// <script src="https://smtpjs.com/v3/smtp.js">
// </script>
function sendMail(to, subject, body){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
        message => alert(message)
    );
}