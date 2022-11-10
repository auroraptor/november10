const page = document.querySelector(".page");
const form = page.querySelector(".form");
const container = page.querySelector(".json__container");
const select = document.querySelector("#select-template").content;
const OPTION = 5;
const SELECT = 5;

const createSelect = (options, name, id) => {
  const selectElement = select.querySelector(".select").cloneNode(true);
  selectElement.setAttribute("name", name);
  selectElement.setAttribute("id", id);

  for (i = 1; i <= options; i++) {
    const optionTag = document.createElement("option");
    optionTag.textContent = i;
    selectElement.append(optionTag);
  }
  return selectElement;
};

const render = (element, container) => {
  container.prepend(element);
};

const repeat = (n, render) => {
  for (let i = 0; i < n; i++) {
    render(createSelect(OPTION, `name_${n - i}`, `#${n - i}`), form);
  }
};

const serializeForm = (formNode) => {
  const { elements } = formNode;
  const data = Array.from(elements)
    .filter((item) => !!item.name)
    .map((element) => {
      const { name, value } = element;
      return { name, value };
    });
  return data;
};

repeat(SELECT, render);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  container.textContent = JSON.stringify({ ...serializeForm(e.target) });
  fetch("https://api.kanye.rest")
    .then((res) => res.json())
    .then((data) => {
      alert(data.quote);
    });
});
