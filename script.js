const pass1 = document.querySelector("#password");
const pass2 = document.querySelector("#confirm_pass");
const matchDiv = document.querySelector(".no-match")

function passwordCheck() {
    if (pass1.value != pass2.value) {
        matchDiv.innerText = "Passwords do not match.";
    }
    else {
        matchDiv.innerText = "";
    }
}

pass1.addEventListener('input', passwordCheck);

pass2.addEventListener('input', passwordCheck);