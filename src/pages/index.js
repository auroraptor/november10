const page = document.querySelector('.page');
const header = page.querySelector('.header');
const buttonWarning = page.querySelector('#button_type_warning');

buttonWarning.addEventListener('click', () => {
  header.classList.toggle('header_hide');
});
