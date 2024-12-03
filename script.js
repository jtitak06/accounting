// Function to toggle the mobile menu overlay
function toggleMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenuOverlay");
    mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
}

// Real-time phone number formatting and validation
const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', function () {
    let value = phoneInput.value.replace(/\D/g, ''); // Remove all non-numeric characters
    let formattedValue = '';

    if (value.length > 0) {
        formattedValue = `(${value.slice(0, 3)}`;
    }
    if (value.length > 3) {
        formattedValue += `) ${value.slice(3, 6)}`;
    }
    if (value.length > 6) {
        formattedValue += `-${value.slice(6, 10)}`;
    }

    phoneInput.value = formattedValue; // Apply the formatted value
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from actually submitting

    const formData = new FormData(this);  // Create form data object

    // Basin form submission endpoint
    const endpoint = "https://usebasin.com/f/542cad0a0c29";  // Replace YOUR_FORM_ID with your actual form ID from Basin

    fetch(endpoint, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            console.log("Form successfully submitted!");
            document.getElementById('thank-you-message').style.display = 'block';  // Show thank-you message
            document.getElementById('contactForm').style.display = 'none';  // Hide the form
        } else {
            console.log("Form submission failed");
        }
    })
    .catch(error => {
        console.log("Error:", error);
    });
});

