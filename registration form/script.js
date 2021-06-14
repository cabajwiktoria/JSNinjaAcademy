"use strict";

const button = document.getElementById("send");
button.addEventListener("click", (e) => {
  console.log(e);
  validation(e);
});

function validation(e) {
  let errorMessage = "";

  const firstNameInput = document.getElementById("firstname");
  const firstName = firstNameInput.value;
  if (
    firstName.length == 0 ||
    firstName.indexOf(" ") >= 0 ||
    firstName.search(/[0-9]/) > 0 ||
    firstName.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-]/) > 0
  ) {
    e.preventDefault();
    showErrorMessage("Wrong first name");
  }

  const lastNameInput = document.getElementById("lastname");
  const lastName = lastNameInput.value;
  if (
    lastName.length == 0 ||
    lastName.indexOf(" ") >= 0 ||
    firstName.search(/[0-9]/) > 0
  ) {
    e.preventDefault();
    showErrorMessage("Wrong last name");
  }

  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  if (
    email.length == 0 ||
    email.indexOf(" ") >= 0 ||
    email.includes("@") == false ||
    email.includes(".") == false
  ) {
    e.preventDefault();
    showErrorMessage("Wrong email");
  }

  const passwordInput = document.getElementById("password");
  const password = passwordInput.value;
  if (
    password.length == 0 ||
    lastName.indexOf(" ") >= 0 ||
    password.length < 8 ||
    password.search(/[0-9]/) < 0 ||
    password.search(/[A-Z]/) < 0 ||
    password.search(/[a-z]/) < 0 ||
    password.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-]/) < 0
  ) {
    e.preventDefault();
    showErrorMessage("Wrong password");
  }

  const replayPasswordInput = document.getElementById("replaypassword");
  const replayPassword = replayPasswordInput.value;
  if (replayPassword.length == 0 || replayPassword !== password) {
    e.preventDefault();
    showErrorMessage("Replay Password is not the same as Password");
  }
}

function showErrorMessage(mess) {
  const errorPanel = document.getElementById("error-panel");
  const div = document.createElement("div");
  div.classList.add("error-message");
  div.innerHTML = mess;
  errorPanel.appendChild(div);
}

document.getElementsByTagName("body");
