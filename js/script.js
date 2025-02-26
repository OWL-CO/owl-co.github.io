// Select elements
const body = document.body;
const toggleLanguageButton = document.getElementById("toggle-language");
const sloganText = document.getElementById("slogan-text");
const logoImage = document.getElementById("logo-image");
const logoLink = document.getElementById("logo-link");
const contactHeading = document.getElementById("contact-heading");
const nameLabel = document.getElementById("name-label");
const emailLabel = document.getElementById("email-label");
const messageLabel = document.getElementById("message-label");
const sendButton = document.getElementById("send-button");

// Default language set to Japanese
let currentLanguage = "japanese";

// Apply default Japanese content
body.className = "japanese";
sloganText.textContent = "ローカルからグローバルへ、英語で";
contactHeading.textContent = "お問い合わせ";
nameLabel.textContent = "名前:";
emailLabel.textContent = "メール:";
messageLabel.textContent = "メッセージ:";
sendButton.textContent = "送信";
toggleLanguageButton.textContent = "English";
logoImage.src = "images/logo-white.png"; // Set logo for Japanese

// Toggle Language Function
toggleLanguageButton.addEventListener("click", () => {
  if (currentLanguage === "japanese") {
    body.className = "english";
    sloganText.textContent = "From Local to Global, in English";
    contactHeading.textContent = "Contact Us";
    nameLabel.textContent = "Name:";
    emailLabel.textContent = "Email:";
    messageLabel.textContent = "Message:";
    sendButton.textContent = "Send";
    toggleLanguageButton.textContent = "日本語";
    logoImage.src = "images/logo-black.png"; // Set logo for English
    currentLanguage = "english";
  } else {
    body.className = "japanese";
    sloganText.textContent = "ローカルからグローバルへ、英語で";
    contactHeading.textContent = "お問い合わせ";
    nameLabel.textContent = "名前:";
    emailLabel.textContent = "メール:";
    messageLabel.textContent = "メッセージ:";
    sendButton.textContent = "送信";
    toggleLanguageButton.textContent = "English";
    logoImage.src = "images/logo-white.png"; // Set logo for Japanese
    currentLanguage = "japanese";
  }
});

// Redirect logo to the secret page
logoLink.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default link behavior
  window.location.href = "secret.html"; // Navigate to the secret page
});
