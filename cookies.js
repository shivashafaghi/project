document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptCookiesButton = document.getElementById("accept-cookies");

    // Check if cookies have been accepted
    if (!localStorage.getItem("cookiesAccepted")) {
        cookieBanner.style.display = "block"; // Show the banner if not accepted
    }

    // Handle the 'Accept' button click
    acceptCookiesButton.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true"); // Store the user's acceptance
        cookieBanner.style.display = "none"; // Hide the banner after acceptance
    });
});
