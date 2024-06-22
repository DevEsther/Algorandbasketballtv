(function () {
    emailjs.init("uC_9ktrz0D8831sIjrpt1"); // Initialize EmailJS with your user ID
})();

function sendEmail(event) {
    event.preventDefault(); // Prevent default form submission

    var to_name = "Recipient Name";   // Replace with actual recipient's name
    var from_name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (from_name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.');
        return false; // Exit function if fields are empty
    }

    var templateParams = {
        to_name: to_name,
        from_name: from_name,
        message: message
    };

    emailjs.send('service_667xpsf', 'template_p5403oc', templateParams)
        .then(function (response) {
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset(); // Clear form fields
        }, function (error) {
            alert('Failed to send message. Please try again later.');
            console.error('Error:', error);
        });

    return false; // Prevent form submission
}
