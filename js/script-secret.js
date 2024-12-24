// Get references to DOM elements
const inputField = document.getElementById("puzzle-input");
const submitButton = document.getElementById("submit-code");
const feedback = document.getElementById("feedback");

// Object containing valid passwords and their destinations
const validCodes = {
  "gateway": "lore-room.html", // Redirects to lore room
  "特別アクセスコード01": "twine/chinese-room.html" // Redirects to Twine page
};

// Add an event listener for the button click
submitButton.addEventListener("click", () => {
  // Normalize input by trimming spaces
  const enteredCode = inputField.value.trim();

  // Check if the entered code matches a valid password
  if (validCodes[enteredCode]) {
    // Show success message
    feedback.textContent = "正しいコードです！リダイレクト中..."; // "Correct code! Redirecting..."
    feedback.style.color = "#00FF00"; // Green for success

    // Redirect to the corresponding page after a short delay
    setTimeout(() => {
      window.location.href = validCodes[enteredCode];
    }, 2000);
  } else {
    // Show error message
    feedback.textContent = "間違ったコードです。もう一度お試しください。"; // "Incorrect code. Try again."
    feedback.style.color = "#FF69B4"; // Pink for error
  }
});
