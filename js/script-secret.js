const accessButton = document.getElementById('hidden-access-button');
const passwordContainer = document.getElementById('password-container');
const passwordInput = document.getElementById('password-input');
const submitPasswordButton = document.getElementById('submit-password');
const feedback = document.getElementById('feedback');

// Show the password input when the access button is clicked
accessButton.addEventListener('click', () => {
  passwordContainer.style.display = 'block'; // Reveal the password input
  accessButton.style.display = 'none'; // Hide the access button
});

// Handle password submission
submitPasswordButton.addEventListener('click', () => {
  const enteredPassword = passwordInput.value.trim();
  const correctPassword = '特別アクセスコード01'; // The correct password in Japanese

  if (enteredPassword === correctPassword) {
    feedback.textContent = 'アクセスが許可されました。リダイレクト中...'; // "Access granted. Redirecting..."
    feedback.style.color = '#00FF00'; // Green for success
    setTimeout(() => {
      window.location.href = 'twine/chinese-room.html'; // Redirect to the Twine file
    }, 2000); // 2-second delay
  } else {
    feedback.textContent = 'アクセスコードが間違っています。もう一度お試しください。'; // "Incorrect access code. Try again."
    feedback.style.color = '#FF69B4'; // Pink for failure
  }
});
