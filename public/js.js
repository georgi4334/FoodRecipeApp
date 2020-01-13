let year = document.querySelector('#year');
let date = new Date();
let thisYear = date.getFullYear();
year.innerHTML = thisYear;

//lazy load images on html page
progressively.init({
    delay: 1000,
    smBreakpoint:600,
    throttle:300
});
//characters left in contact us section

let textarea = document.querySelector('.au-textarea');
let firstName = document.querySelector('.au-text-input');
let email = document.querySelector('.au-email-input');

textarea.onkeyup = function () {
    let text = document.querySelector(".au-textarea").value;
    let countChars = document.getElementById("textarea-msg");
    let lengthStr = text.length;
    countChars.innerHTML = 150 - lengthStr;
}

//validation of html form contact us
const red = '#F44336';

firstName.onfocusout = function () {
    //is empty and if it has only letters
    if (checkEmpty(firstName)) return;
    if (!checkIfOnlyLetters(firstName)) return;
    return true;
}


//check for letters in textarea
textarea.onfocusout = function () {
    if (checkEmpty(textarea)) return;
}

//email validation
email.onfocusout = function () {
    if (checkEmpty(email)) return;
    if (!containsCharacters(email)) return;
    return true;
}

function containsCharacters(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) return;

}

function checkEmpty(field) {
    if (isEmpty(field.value.trim())) {
        setInvalid(field, `${field.name} must not be empty`)
        return true;
    } else {
        setValid(field)
        return false;
    }
}

function isEmpty(value) {
    if (value === '') return true;
    return false;
}

function setInvalid(field, message) {
    field.classList.add = 'invalid'
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;
}

function setValid(field) {
    field.classList.add = 'valid'
    field.nextElementSibling.innerHTML = '';
}

function checkIfOnlyLetters(field) {
    if (/^[a-zA-Z ]+$/.test(field.value)) {
        setValid(field)
        return true;
    } else {
        setInvalid(field, `${field.name} must contain only letters`);
        return false;
    }
}