function toggleMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenuOverlay");
    mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
  }

  document.getElementById('contactForm').addEventListener('submit', handleSubmit);

  function handleSubmit(event) {
      event.preventDefault(); // Prevents form from actually submitting
      
      // Hide the form
      document.getElementById('contactForm').style.display = 'none';
      
      // Show the thank-you message
      document.getElementById('thank-you-message').style.display = 'block';
  }

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_92gh8he', 'template_pi93b61', this, 'U6tApi-QiEBFxwAZ2')
        .then(function(response) {
            console.log('Success!', response.status, response.text);
        }, function(error) {
            console.log('Failed...', error);
        });
});