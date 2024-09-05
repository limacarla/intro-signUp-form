
const inputName = document.getElementById('firstName');
const inputLastName = document.getElementById('lastName');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');

inputName.addEventListener('blur', function() {
    if (inputName.value !== "") {
        document.querySelector('.alertName').innerHTML = "";
        inputName.classList.remove('errorIcon');
    }
});

inputLastName.addEventListener('blur', function () {
    if (inputLastName.value !== "") {
        document.querySelector(".alertLastName").innerHTML = "";
        lastName.classList.remove('errorIcon');
    }
});

inputEmail.addEventListener('blur', function() {
    if (inputEmail.value !== "" && validateEmail(inputEmail.value)) {
        document.querySelector('.alertEmail').innerHTML = "";
        inputEmail.classList.remove('errorIcon');
    } else {
        document.querySelector('.alertEmail').innerHTML = 'Looks like this is not an email';
        inputEmail.classList.add('errorIcon');
        inputEmail.placeholder = '';
    }
});

inputPassword.addEventListener('blur', function() {
    if (inputPassword.value !== '') {
        document.querySelector('.alertPassword').innerHTML = '';
        inputPassword.classList.remove('errorIcon');
    }
});

document.getElementById('formSign').addEventListener('submit', function(e) {
    let formValid = true;
    if (inputName.value === '') {
        document.querySelector('.alertName').innerHTML = 'First Name cannot be empty';
        inputName.classList.add('errorIcon');
        inputName.placeholder = '';
        formValid = false;
    } else {
        document.querySelector('.alertName').innerHTML = '';
        inputName.classList.remove('errorIcon');
    }

    if (inputLastName.value === '') {
        document.querySelector('.alertLastName').innerHTML = 'Last Name cannot be empty';
        inputLastName.classList.add('errorIcon');
        inputLastName.placeholder = '';
        formValid = false;
    } else {
        document.querySelector('.alertLastName').innerHTML = '';
        inputLastName.classList.remove('errorIcon');
    }

    if (!validateEmail(inputEmail.value)) {
        document.querySelector('.alertEmail').innerHTML = 'Looks like this is not an email';
        inputEmail.classList.add('errorIcon');
        inputEmail.placeholder = '';
        formValid = false;
    } else {
        document.querySelector('.alertEmail').innerHTML = '';
        inputEmail.classList.remove('errorIcon');
    }

    if (inputPassword.value === '') {
        document.querySelector('.alertPassword').innerHTML = 'Password cannot be empty';
        inputPassword.classList.add('errorIcon');
        inputPassword.placeholder = '';
        formValid = false;
    } else {
        document.querySelector('.alertPassword').innerHTML = '';
        inputPassword.classList.remove('errorIcon');
    }

    if (!formValid) {
        e.preventDefault();
    } else {
        e.preventDefault();
        let popup = document.getElementById('popUp');
        popup.style.display = 'block';

        let closepopUp = document.getElementById('close');
        closepopUp.onclick = function() {
            popup.style.display = 'none';

            location.reload();
        }


    }

    document.querySelectorAll('input').innerHTML = '';
});

function validateEmail(value) {
    let formatoEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (value.match(formatoEmail)) {
        return true;
    } else {
        return false;
    }
}


