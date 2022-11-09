const page = document.querySelector('.page');
const header = page.querySelector('.header');
const buttonWarning = page.querySelector('#button_type_warning');
const popup = page.querySelector('.popup');
const closeIcon = popup.querySelector('.popup__close-icon');

$(function(){
  jQuery.fn.swap = function(b) {
    b = jQuery(b)[0];
    var a = this[0],
        a2 = a.cloneNode(true),
        b2 = b.cloneNode(true),
        stack = this;

    a.parentNode.replaceChild(b2, a);
    b.parentNode.replaceChild(a2, b);

    stack[0] = a2;
    return this.pushStack( stack );
};

$('button').on('click', function(){
  $('.left').swap('.right');
});
  });

buttonWarning.addEventListener('click', () => {
    header.classList.toggle('header_hide');
});

closeIcon.addEventListener('click', () => {
  popup.classList.remove('popup_opened');
});
