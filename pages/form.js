console.log('hello');
const page = document.querySelector('.page');
const form = page.querySelector('.form');
const select = document.querySelector('#select-template').content;

const OPTION = 5;
const SELECT = 5;

const createSelect = (options, id) => {
  const selectElement = select.querySelector('.select').cloneNode(true);
  selectElement.setAttribute('id', id);
  for (i = 1; i <= options; i++) {
    const optionTag = document.createElement('option');
    optionTag.textContent = i;
    selectElement.append(optionTag);
  }
  return selectElement;
}

const render = (element, container) => {
  container.prepend(element);
}

const repeat = (n, render) => {
  for (let i = 0; i < n; i++) {
    render(createSelect(OPTION, `select_${n-i}`), form);
  }
}

repeat(SELECT, render);


