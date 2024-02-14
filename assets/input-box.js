document.addEventListener("DOMContentLoaded", () => {
  // Function to remove leading zeros from the phone number input
  function removeLeadingZerosFromInput(inputElement) {
    // If the input element is found, proceed to modify the value
    if (inputElement) {
      // Get the current value of the input field
      const inputValue = inputElement.value;

      // Remove leading zeros by converting the value to an integer and back to a string
      const modifiedValue = parseInt(inputValue, 10).toString();

      // Update the input field with the modified value
      inputElement.value = modifiedValue;
    }
  }

  function setupInputListener() {
    // Find all the input elements with class "remove-zero" and attach an "input" event listener
    const inputElements = document.querySelectorAll(".remove-zero");

    // Loop through each input element and attach the event listener
    inputElements.forEach(function (inputElement) {
      inputElement.addEventListener("input", function () {
        // Call removeLeadingZerosFromInput with the current inputElement
        removeLeadingZerosFromInput(inputElement);
      });
    });
  }

  // Set up the event listeners for input elements
  setupInputListener();

  // Get all the forms with the class "contact_Form"
  const forms = document.querySelectorAll(".contact_Form");

  // Attach a "submit" event listener to the common ancestor element (document) using event delegation
  document.addEventListener("submit", function (event) {
    // Find the closest ancestor form with class "contact-Form" to the event target
    const targetForm = event.target.closest(".contact-Form");

    // If the event target is not within any of the forms, do nothing
    if (!targetForm) {
      return;
    }

    // Find the input element with class "input-Maxlength" within the current form
    const input = targetForm.querySelector(".input-Maxlength");

    // Get the value of the phone number input
    const phoneNumber = input.value;

    // Find the error message element within the form
    const errorMessage = targetForm.querySelector(".errorMessage");

    // Check if the phone number has exactly 10 digits
    if (phoneNumber.length !== 10) {
      // Prevent form submission
      event.preventDefault();
      // Display the error message
      errorMessage.style.display = "block";
      // Scroll to the top of the form to show the error message
      targetForm.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // If the phone number is valid, hide the error message
      errorMessage.style.display = "none";
    }
  });
});
