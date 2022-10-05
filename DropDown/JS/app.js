const toggleBtn = document.querySelector(".dropdown .dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");
const options = document.querySelectorAll(".dropdown-option")
const nextButton = document.querySelector(".next-button");


const DROPDOWNSHOW = "show"

function handleToggleOn () {
    dropdownMenu.classList.toggle(DROPDOWNSHOW);
};

options.forEach(function (item) {
    item.addEventListener("click", selectOption);
})

function handleBlurOn () {
    dropdownMenu.classList.remove(DROPDOWNSHOW);
}

function selectOption (item) {
    toggleBtn.innerText = item.currentTarget.innerText;
    toggleBtn.classList.add("selected");
    nextButton.removeAttribute("disabled");
}

toggleBtn.addEventListener("click", handleToggleOn);
toggleBtn.addEventListener("blur", handleBlurOn);

