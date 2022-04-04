let regex = new RegExp('/\w+/g');

const formElement = document.querySelector("form");


formElement.addEventListener('submit', e => {
  const password1Element = e.target.elements.password1.value;  
  const password2Element = e.target.elements.password2.value;
  const passwordHelp1Element = document.getElementById('passwordhelp1');
  const passwordHelp2Element = document.getElementById('passwordhelp2');
  
  console.log(password1Element.elements);
  if(password1Element !== password2Element){
      console.log(password1Element);
    passwordHelp2Element.innerHTML = 'Doesn\'t match password1';
    passwordHelp2Element.style.color = 'red';
  }

  e.preventDefault();
})


