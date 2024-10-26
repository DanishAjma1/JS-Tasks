const lengthCheck = document.getElementById('length-box');
const capitalCheck = document.getElementById('capital-letter-box');
const integerCheck = document.getElementById('integer-box');

function checkPassword(pass) {
    let haslength = false;
    if (pass.length >= 10) {
        haslength = true;
    } else {
        haslength = false;
    }

    let hasCapital = false;
    let hasNumber = false;

    for (let ch of pass) {
        if (ch === ch.toUpperCase() && isNaN(ch)) {
            hasCapital = true;
        }
        if (!isNaN(ch)) {
            hasNumber = true;
        }
    }
    capitalCheck.checked = hasCapital;
    integerCheck.checked = hasNumber;
    lengthCheck.checked = haslength;

    return hasCapital && haslength && hasNumber;
}

function validate() {
    const pass = document.getElementById("pass").value;
    let msg = document.getElementById("msg");
    if (checkPassword(pass)) {
        msg.innerHTML = "password is valid";
    } else {
        msg.innerHTML = "Password must contain one capital letter <br> at least one integer and length of 10..";
        lengthCheck = capitalCheck = integerCheck = false;
    }
}

const images_list = [
    "Github Profile.jpg",
    "Internees.jpeg",
    "mypic.jpg",
    "FiverrPic.jpg"
];
let current_image = 3;
const image = document.getElementById('image');

function nextImage() {
    current_image = (current_image + 1) % images_list.length;
    changeImage();
}

function prevImage() {
    current_image = (current_image - 1 + images_list.length) % images_list.length;
    changeImage();
}

function changeImage() {
    image.classList.remove('show');
    setTimeout(() => {
        image.src = images_list[current_image];
        image.classList.add('show');
    }, 500);
}