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

document.getElementById('submit-button').addEventListener('click', async function(event) {
    event.preventDefault();  // Prevent the default form submission

    var form = document.getElementById('getStarted');
    var formData = new FormData(form);

    // Prepare the data to be sent in JSON format
    var formDataJSON = {};
    formData.forEach((value, key) => {
        formDataJSON[key] = value;
    });

    try {
        // Send the data to the SheetDB API
        const response = await fetch('https://sheetdb.io/api/v1/zslbufpfze95p', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataJSON)
        });

        if (response.ok) {
            // If submission is successful, redirect to the calendar page
            window.location.href = './calendar.html';  // Redirect to the calendar page
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an issue with your submission. Please try again later.');
    }
});
