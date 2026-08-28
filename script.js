// ==========================================
// ERRONIX - Simple JavaScript functionality
// ==========================================

// Replace this value with your Google Form URL.
// Example: "https://forms.gle/your-form-id"
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd-ZHAMiVspaEXLDx97bnm01d5hFe_xndNpnhgShPF-7GDdAA/viewform?usp=sharing&ouid=114254994368421288939";

// Add the same registration action to every Register button.
const registerButtons = document.querySelectorAll(".register-btn");

registerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const eventName = button.dataset.event;

    // Check whether the Google Form link has been added.
    if (GOOGLE_FORM_URL === "YOUR_GOOGLE_FORM_LINK_HERE") {
      alert(
        `Registration link is not added yet.\n\nSelected event: ${eventName}\n\nPlease replace YOUR_GOOGLE_FORM_LINK_HERE in script.js with your Google Form URL.`
      );
      return;
    }

    // Open the Google Form in a new browser tab.
    window.open(GOOGLE_FORM_URL, "_blank");
  });
});
