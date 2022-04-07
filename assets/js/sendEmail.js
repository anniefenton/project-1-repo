function sendMail(contactForm) {
    emailjs.send("service_kzt2xta","annie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(eroor) {
            console.log("FAILED", error);
        }
    );
    return false;
}