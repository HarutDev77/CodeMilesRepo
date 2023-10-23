const form = document.querySelector(".section_contact_us_form");
const buttonSend = document.querySelector("#general_button_send");
const buttonLeaveRequest = document.querySelector("#general_button_leave");
const linkElements = document.querySelectorAll("[data-href]");
const menuIcon = document.querySelector(".menu_cont_menu_icon_container img");
const menuContainer = document.querySelector(".menu_cont_menu_burger");
const LongLIne = document.querySelectorAll("#LongLine");

buttonLeaveRequest !== null
  ? buttonLeaveRequest.addEventListener("click", toggleFeedBackForm)
  : null;
buttonSend !== null
  ? buttonSend.addEventListener("click", toggleFeedBackForm)
  : null;
menuIcon !== null ? menuIcon.addEventListener("click", toggleMenu) : null;

function toggleFeedBackForm() {
  if (buttonLeaveRequest.classList.contains("d-block")) {
    buttonLeaveRequest.classList.remove("d-block");
    buttonLeaveRequest.classList.add("d-none");
    buttonSend.classList.add("d-block");
    form.classList.add("d-block");
  } else {
    buttonLeaveRequest.classList.remove("d-none");
    buttonSend.classList.remove("d-block");
    form.classList.remove("d-block");
    buttonLeaveRequest.classList.add("d-block");
    buttonSend.classList.add("d-none");
    form.classList.add("d-none");
  }
}

let toggle = true;

function toggleMenu() {
  if (toggle) {
    menuContainer.classList.add("d-block");
    menuIcon.setAttribute("src", "./images/iconClose.png");
    toggle = false;
  } else {
    menuContainer.classList.remove("d-block");
    menuIcon.setAttribute("src", "./images/menuIcon.png");
    toggle = true;
  }
}

function redirect() {
  window.location.href = this.dataset.href;
}

linkElements.forEach((item) => item.addEventListener("click", redirect));

if (window.matchMedia("(max-width: 720px)").matches) {
  LongLIne.forEach(
    (div) =>
      (div.innerHTML = '<img src="./images/LongLine.png" alt="Image line">')
  );
}

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("menu_identifier")) {
    menuContainer.classList.remove("d-block");
    menuIcon.setAttribute("src", "./images/menuIcon.png");
    toggle = !toggle;
  }
});

console.log('testing');
