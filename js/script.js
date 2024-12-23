const body = document.body;
const toggleLanguageButton = document.getElementById('toggle-language');
const sloganText = document.getElementById('slogan-text');
const logoImage = document.getElementById('logo-image');
const contactHeading = document.getElementById('contact-heading');
const nameLabel = document.getElementById('name-label');
const emailLabel = document.getElementById('email-label');
const messageLabel = document.getElementById('message-label');
const sendButton = document.getElementById('send-button');

let currentLanguage = 'english';

toggleLanguageButton.addEventListener('click', () => {
  if (currentLanguage === 'english') {
    body.className = 'japanese';
    sloganText.textContent = 'ローカルからグローバルへ、英語で';
    contactHeading.textContent = 'お問い合わせ';
    nameLabel.textContent = '名前:';
    emailLabel.textContent = 'メール:';
    messageLabel.textContent = 'メッセージ:';
    sendButton.textContent = '送信';
    toggleLanguageButton.textContent = 'English';
    logoImage.src = 'images/logo-white.png'; // Switch to white logo
    currentLanguage = 'japanese';
  } else {
    body.className = 'english';
    sloganText.textContent = 'From Local to Global, in English';
    contactHeading.textContent = 'Contact Us';
    nameLabel.textContent = 'Name:';
    emailLabel.textContent = 'Email:';
    messageLabel.textContent = 'Message:';
    sendButton.textContent = 'Send';
    toggleLanguageButton.textContent = '日本語';
    logoImage.src = 'images/logo-black.png'; // Switch to black logo
    currentLanguage = 'english';
  }
});

const logoLink = document.getElementById('logo-link');

logoLink.addEventListener('click', () => {
  window.location.href = 'secret.html'; // Redirect to the secret page
});
