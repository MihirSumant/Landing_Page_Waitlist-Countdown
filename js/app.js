let nameInput = document.getElementsByClassName("name-input")[0];

let emailInput = document.getElementsByClassName("email-input")[0];

let joinButton = document.getElementsByClassName("join-button")[0];

let invalidEmail = document.getElementsByClassName("invalid-email")[0];

const countdown = () => {
  // getting the current time
  const theTime = new Date();
  const hours = theTime.getHours();
  const mins = theTime.getMinutes();
  const seconds = theTime.getSeconds();

  const hoursLeft = 24 - hours;
  const minsLeft = 60 - mins;
  const secondsLeft = 59 - seconds;

  document.getElementById("hour-number").innerHTML = hoursLeft;
  document.getElementById("minute-number").innerHTML = minsLeft;
  document.getElementById("second-number").innerHTML = secondsLeft;
};

countdown();
setInterval(countdown, 1000);

function emailIsValid(email) {
  console.log(email);
  console.log(/\S+@\S+\.\S+/.test(email));
  return /\S+@\S+\.\S+/.test(email);
}

let addErrors = () => {
  emailInput.classList.add("error-highlight");
  invalidEmail.classList.add("invalid-email-show");
};

let removeErrors = () => {
  emailInput.classList.remove("error-highlight");
  invalidEmail.classList.remove("invalid-email-show");
};

nameInput.addEventListener("click", () => {
  nameInput.classList.remove("error-highlight");
  nameInput.value = null;
});

emailInput.addEventListener("click", () => {
  removeErrors();
  emailInput.value = null;
});

joinButton.addEventListener("click", () => {
  if (emailIsValid(emailInput.value)) {
    if (nameInput.value !== "") {
      removeErrors();
      console.log(nameInput.value);
      joinButton.innerHTML = "Done! You are on the waitlist!";
      joinButton.classList.add("button-disabled");
      joinButton.classList.remove("hover-effect");
      joinButton.setAttribute("disabled", false);
    } else {
      nameInput.classList.add("error-highlight");
    }
  } else {
    addErrors();
  }
});
