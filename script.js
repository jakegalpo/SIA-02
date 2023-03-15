let firstNameInput = document.getElementById("first-name-input");
let firstNameError = document.getElementById("first-name-error");
let emptyFirstNameError = document.getElementById("empty-first-name");

let lastNameInput = document.getElementById("last-name-input");
let lastNameError = document.getElementById("last-name-error");
let emptyLastNameError = document.getElementById("empty-last-name");

//Middle Name
let middleNameInput = document.getElementById("middle-name-input");
let middleNameError = document.getElementById("middle-name-error");
let emptymiddleNameError = document.getElementById("empty-middle-name");

//Email
let emailInput = document.getElementById("email");
let emailError = document.getElementById("email-error");
let emptyEmailError = document.getElementById("empty-email");


let phoneInput = document.getElementById("phone");
let phoneError = document.getElementById("phone-error");
let emptyPhoneError = document.getElementById("empty-phone");

//Password
let passwordInput = document.getElementById("password");
let passwordError = document.getElementById("password-error");
let emptyPasswordError = document.getElementById("empty-password");

//next
let submitButton = document.getElementById("next-button");

//Valid
let validClasses = document.getElementsByClassName("valid");
let invalidClasses = document.getElementsByClassName("error");
//Text verification (if input contains only text)
const textVerify = (text) => {
  const regex = /^[a-zA-Z]{2,}$/;
  return regex.test(text);
};

//Phone number verification
const phoneVerify = (number) => {
  const regex = /^[0-9]{11}$/;
  return regex.test(number);
};

//Email verification
const emailVerify = (input) => {
  const regex = /^[a-z0-9_]+@[a-z]{3,}\.[a-z\.]{3,}$/;
  return regex.test(input);
};

//For empty input - accepts(input,empty error for that input and other errors)
const emptyUpdate = (
  inputReference,
  emptyErrorReference,
  otherErrorReference
) => {
  if (!inputReference.value) {
    //input is null/empty
    emptyErrorReference.classList.remove("hide");
    otherErrorReference.classList.add("hide");
    inputReference.classList.add("error");
  } else {
    //input has some content
    emptyErrorReference.classList.add("hide");
  }
};

//For error styling and displaying error message
const errorUpdate = (inputReference, errorReference) => {
  errorReference.classList.remove("hide");
  inputReference.classList.remove("valid");
  inputReference.classList.add("error");
};

//For no errors
const validInput = (inputReference) => {
  inputReference.classList.remove("error");
  inputReference.classList.add("valid");
};
//Last name
lastNameInput.addEventListener("input", () => {
  if (textVerify(lastNameInput.value)) {
    lastNameError.classList.add("hide");
    validInput(lastNameInput);
  } else {
    errorUpdate(lastNameInput, lastNameError);
    emptyUpdate(lastNameInput, emptyLastNameError, lastNameError);
  }
});

//First name
firstNameInput.addEventListener("input", () => {
  if (textVerify(firstNameInput.value)) {
    //If verification returns true
    firstNameError.classList.add("hide");
    validInput(firstNameInput);
  } else {
    //for false
    errorUpdate(firstNameInput, firstNameError);
    //empty checker
    emptyUpdate(firstNameInput, emptyFirstNameError, firstNameError);
  }
});

//Last name
lastNameInput.addEventListener("input", () => {
  if (textVerify(lastNameInput.value)) {
    lastNameError.classList.add("hide");
    validInput(lastNameInput);
  } else {
    errorUpdate(lastNameInput, lastNameError);
    emptyUpdate(lastNameInput, emptyLastNameError, lastNameError);
  }
});


//Phone
phoneInput.addEventListener("input", () => {
  if (phoneVerify(phoneInput.value)) {
    phoneError.classList.add("hide");
    validInput(phoneInput);
  } else {
    errorUpdate(phoneInput, phoneError);
    emptyUpdate(phoneInput, emptyPhoneError, phoneError);
  }
});

//middle name
middleNameInput.addEventListener("input", () => {
  if (textVerify(middleNameInput.value)) {
    middleNameError.classList.add("hide");
    validInput(middleNameInput);
  } else {
    errorUpdate(middleNameInput, lastNameError);
    emptyUpdate(middleNameInput, emptymiddleNameError, middleNameError);
  }
});

//Submit button
submitButton.addEventListener("click", () => {
  if (validClasses.length == 6 && invalidClasses.length == 0) {
    alert("Success");
  } else {
    alert("Error");
  }
});

