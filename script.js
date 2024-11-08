function toggleMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenuOverlay");
    mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
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