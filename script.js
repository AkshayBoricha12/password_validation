let labelMessage = document.querySelector("#lblMessage2");
let passwordMessage = document.querySelector("#lblMessage");
let password = document.querySelector(".password-input");

function validatePassword() {
  let message = "";
  let passwd = password.value;
  let containsNumber = false,
    containsCapital = false,
    containsSmall = false;

  let capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let smalls = "abcdefghijklmnopqrstuvwxyz";
  let numbers = "0123456789";

  characters = passwd.split("");

  for (const character of characters) {
    if (capitals.includes(character)) {
      containsCapital = true;
    }
    if (smalls.includes(character)) {
      containsSmall = true;
    }
    if (numbers.includes(character)) {
      containsNumber = true;
    }
  }

  if (!containsCapital) {
    message += "<br /><br />Password must contain a capital letter.";
  }
  if (!containsSmall) {
    message += "<br /><br />Password must contain a small letter.";
  }
  if (!containsNumber) {
    message += "<br /><br />Password must contain a number.";
  }

  if (passwd.length <= 8) {
    message += "<br /><br />Password must contain at least 8 characters.";
    passwordMessage.style.display = "block";
  } else {
    if (containsCapital && containsSmall && containsNumber) {
      passwordMessage.style.display = "none";
    }
  }
  labelMessage.innerHTML = message;
}
