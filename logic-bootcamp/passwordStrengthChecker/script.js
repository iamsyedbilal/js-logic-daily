const passwordInput = document.getElementById("passwordInput");
const strengthChecker = document.getElementById("strength");

passwordInput.addEventListener("input", function () {
  strengthChecker.textContent = "";
  strengthChecker.className = "";

  const passwordValue = passwordInput.value;
  let strength = 0;

  if (!passwordValue) {
    strengthChecker.textContent = "Password cannot be empty";
    strengthChecker.classList.add("very-weak");
    return;
  }

  if (passwordValue.length >= 8) strength++;
  if (/[A-Z]/.test(passwordValue)) strength++;
  if (/[a-z]/.test(passwordValue)) strength++;
  if (/[0-9]/.test(passwordValue)) strength++;
  if (/[^A-Za-z0-9]/.test(passwordValue)) strength++;

  let strengthText = "";
  let strengthClass = "";

  switch (strength) {
    case 0:
    case 1:
      strengthText = "Very Weak";
      strengthClass = "very-weak";
      break;
    case 2:
      strengthText = "Weak";
      strengthClass = "weak";
      break;
    case 3:
      strengthText = "Moderate";
      strengthClass = "moderate";
      break;
    case 4:
      strengthText = "Strong💪";
      strengthClass = "strong";
      break;
    case 5:
      strengthText = "Very Strong💪";
      strengthClass = "very-strong";
      break;
  }

  strengthChecker.textContent = `Strength: ${strengthText}`;
  strengthChecker.classList.add(strengthClass);
});
