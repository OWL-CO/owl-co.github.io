const passwordInput = document.getElementById('password-input');
const submitPasswordButton = document.getElementById('submit-password');
const feedback = document.getElementById('feedback');

// Correct Password in Japanese
const correctPassword = '特別アクセスコード01'; // Special Access Code 01 in Japanese

// Handle Password Submission
submitPasswordButton.addEventListener('click', () => {
  const enteredPassword = passwordInput.value.trim();
  if (enteredPassword === correctPassword) {
    feedback.textContent = 'アクセスが許可されました。リダイレクト中...'; // "Access granted. Redirecting..."
    feedback.style.color = '#00FF00'; // Green for success
    setTimeout(() => {
      window.location.href = 'twine/chinese-room.html'; // Redirect to the Twine story
    }, 2000);
  } else {
    feedback.textContent = 'アクセスコードが間違っています。もう一度お試しください。'; // "Incorrect access code. Try again."
    feedback.style.color = '#FF69B4'; // Pink for failure
  }
});
