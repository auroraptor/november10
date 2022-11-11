const page = document.querySelector(".page");
const header = page.querySelector(".header");
const buttonWarning = page.querySelector("#button_type_warning");
const buttonSuccess = page.querySelector("#button_type_success");
const left = page.querySelector('.left');
const popup = page.querySelector(".popup");
const closeIcon = popup.querySelector(".icon");

const closePopup = () => {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeModal);
  document.removeEventListener("mousedown", overlayClick);
};

const closeModal = (evt) => {
  if (evt.key === "Escape") {
    closePopup();
  }
};

const overlayClick = (evt) => {
  if (evt.target.classList.contains("popup")) {
    closePopup();
  }
};

buttonWarning.addEventListener("click", () => {
  header.classList.toggle("hidden");
});
buttonSuccess.addEventListener("click", () => {
    left.style.order = left.style.order == 0 ? 1 : 0;
})
closeIcon.addEventListener("click", closePopup);
document.addEventListener("keydown", closeModal);
document.addEventListener("mousedown", overlayClick);
