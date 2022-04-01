let regex = new RegExp('/\d+/g')


let boolEqual, boolLength, boolDigit;


const password1 = document.getElementById('password1').addEventListener('input',  e => {
    const password = e.target.value;
    // console.log(password1);
    return password;
});

console.log(password1);

// if(password1.value !== password2.value) {
//     let error =  document.createElement('p');
//     error.innerText= 'Error: password must be at least 6 characters long';
//     document.querySelector('form').appendChild(error);
// } else {
//     boolEqual = true;
// }