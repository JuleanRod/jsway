// Write the JavaScript code that validates the password when the user submits the form. The validation rules are as follow:
//
// The two inputted passwords must be identical.
// The minimal password length is 6 characters.
// The password must contain at least one digit.
// The validation result must be shown on the page with an appropriate message in each case.

const numCheck = new RegExp("\\d");
const formElement = document.querySelector("form");

formElement.addEventListener("submit", (e) => {
  const password1Element = e.target.elements.password1.value;
  const password2Element = e.target.elements.password2.value;
  const passwordHelp1Element = document.getElementById("passwordhelp1");
  const passwordHelp2Element = document.getElementById("passwordhelp2");

  console.log(password1Element);
  console.log(password2Element);

  if (password2Element !== password1Element) {
    passwordHelp2Element.innerHTML = "error: invalid confirmation";
    passwordHelp2Element.style.color = "red";
  } else {
    passwordHelp1Element.innerHTML = "";
    passwordHelp2Element.innerHTML = "";
  }

  if (password1Element.length < 6) {
    passwordHelp2Element.innerHTML = "error: length must be 6 or greater";
    passwordHelp2Element.style.color = "red";
    passwordHelp1Element.innerHTML = "error: length must be 6 or greater";
    passwordHelp1Element.style.color = "red";
  } else {
    passwordHelp1Element.innerHTML = "";
    passwordHelp2Element.innerHTML = "";
  }

  if (numCheck.test(password1Element) == false) {
    passwordHelp1Element.innerHTML = "error: missing a number";
    passwordHelp1Element.style.color = "red";
  } else {
    const passwordHelp = document.getElementById("passwordHelp");
    passwordHelp.innerHTML = "Signing in ...";
    passwordHelp.style.color = "lightgreen";
  }

  e.preventDefault();
});
