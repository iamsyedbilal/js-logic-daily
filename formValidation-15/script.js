const form = document.querySelector(".form");
const userName = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const cPassword = document.querySelector(".cPassword");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add("error");
  const small = formControl.querySelector("small");
  small.innerText = message;
  small.style.visibility = "visible";
}

function clearError(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  const small = formControl.querySelector("small");
  small.innerText = " ";
  small.style.visibility = "hidden";
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  formControl.classList.add("success");
  const small = formControl.querySelector("small");
  small.innerText = "";
  small.style.visibility = "hidden";
}

function validateEmail(input) {
  const res =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (res.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be at less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

function checkedRequired(inputs) {
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function checkPasswordMatch(password, cPassword) {
  if (password.value.trim() !== cPassword.value.trim()) {
    showError(cPassword, "Passwords does not match");
  }
}

function getFieldName(input) {
  return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkedRequired([userName, email, password, cPassword]);
  checkLength(userName, 3, 15);
  checkLength(password, 8, 20);
  validateEmail(email);
  checkPasswordMatch(password, cPassword);

  const formControls = document.querySelectorAll(".form-control");
  const isValid = Array.from(formControls).every(
    (fc) => !fc.classList.contains("error")
  );

  if (isValid) {
    alert(`${userName.value} registered successfully`);
    form.reset();
    formControls.forEach((fc) => fc.classList.remove("success"));
  }
});
