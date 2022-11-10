const page = document.querySelector(".page");
const header = page.querySelector(".header");
const buttonWarning = page.querySelector("#button_type_warning");
const popup = page.querySelector(".popup");
const closeIcon = popup.querySelector(".popup__close-icon");

$(function () {
  jQuery.fn.swap = function (b) {
    b = jQuery(b)[0];
    var a = this[0],
      a2 = a.cloneNode(true),
      b2 = b.cloneNode(true),
      stack = this;

    a.parentNode.replaceChild(b2, a);
    b.parentNode.replaceChild(a2, b);

    stack[0] = a2;
    return this.pushStack(stack);
  };

  $("#button_type_success").on("click", function () {
    $(".left").swap(".right");
  });
});

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
const closePopup = () => {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeModal);
  document.removeEventListener("mousedown", overlayClick);
};

buttonWarning.addEventListener("click", () => {
  header.classList.toggle("header_hide");
});
closeIcon.addEventListener("click", () => {
  closePopup();
});
document.addEventListener("keydown", closeModal);
document.addEventListener("mousedown", overlayClick);
