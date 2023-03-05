const descricao = document.querySelector("[form]");
const modalBody = document.querySelector("[modal-body]");
const alertSuccess = document.querySelector("[alert-success]");
const alertDanger = document.querySelector("[alert-danger]");
const btnCopiar = document.querySelector("[btn-copiar]");
const url = "./termos-proibidos.json";

alertSuccess.style.display = "none";
alertDanger.style.display = "none";

const getTermos = async () => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (e) {
    console.error(e);
  }
};

const verificaInput = async () => {
  const arraysTermos = await getTermos();
  console.debug(arraysTermos);

  descricao.oninput = function (e) {
    e.preventDefault();
    modalBody.innerText = this.value;

    const termosProibidos = arraysTermos.termo.filter((termo) => {
      const reg = new RegExp(termo, "i");
      if (reg.test(modalBody.innerHTML))
        modalBody.innerHTML = modalBody.innerHTML.replace(
          termo,
          `<b style="color: tomato">${reg}</b>`
        );
      if (reg.test(this.value)) return termo;
    });
    if (termosProibidos.length > 0) {
      alertSuccess.style.display = "none";
      alertDanger.style.display = "block";
      alertDanger.textContent = [...termosProibidos];
    } else {
      alertDanger.style.display = "none";
      alertSuccess.style.display = "block";
    }
    if (this.value.length === 0) {
      alertDanger.style.display = "none";
      alertSuccess.style.display = "none";
    }
  };
};

verificaInput();

// temas ligth/dark

window.onload = () => {
  if (localStorage.tema == "light") ligthMode();
  else if (localStorage.tema == "dark") darkMode();
  else null;
};

window.onloadeddata = () => {
  if (localStorage.tema == "light") ligthMode();
  else if (localStorage.tema == "dark") darkMode();
  else null;
};

function ligthMode() {
  selecionar("body").classList.remove("bg-dark");
  selecionar(".navbar").classList.remove("navbar-dark");
  selecionar(".navbar").classList.remove("bg-dark");
  selecionar(".container-fluid").classList.remove("dark-mode");
  selecionar("footer").classList.remove("dark-mode");
  selecionar("footer").classList.add("bg-light");
  selecionar("[form]").classList.remove("textareaCustom-dark");
  selecionar("[form-textarea]").classList.add("bg-body");
  selecionar("[form-textarea]").classList.remove("bg-dark");
  selecionar("[container-textarea]").classList.remove(
    "container-textarea-dark"
  );
  selecionar("[form-textarea]").classList.remove("bg-dark");
  selecionar("[form-textarea]").classList.remove("textarea-dark");
}

function darkMode() {
  selecionar("body").classList.add("bg-dark");
  selecionar(".navbar").classList.add("navbar-dark");
  selecionar(".navbar").classList.add("bg-dark");
  selecionar(".container-fluid").classList.add("dark-mode");
  selecionar("footer").classList.add("dark-mode");
  selecionar("footer").classList.remove("bg-light");
  selecionar("[form]").classList.add("textareaCustom-dark");
  selecionar("[form-textarea]").classList.remove("bg-body");
  selecionar("[form-textarea]").classList.add("bg-dark");
  selecionar("[container-textarea]").classList.add("container-textarea-dark");
  selecionar("[form-textarea]").classList.add("bg-dark");
  selecionar("[form-textarea]").classList.add("textarea-dark");
}

const selecionar = (seletor) => document.querySelector(seletor);

selecionar("[ligth]").onclick = () => {
  localStorage.tema = "light";
  console.log("let there be light!");
  ligthMode();
};

selecionar("[dark]").onclick = () => {
  localStorage.tema = "dark";
  console.log("turn off the light, please!");
  darkMode();
};


btnCopiar.onclick = () => {
  navigator.clipboard.writeText(descricao.value);
  navigator.clipboard
    .readText()
    .then(() => {
      document.querySelector(".btn-copiar-alert").classList.toggle("d-none");
      setTimeout(() => {
        document.querySelector(".btn-copiar-alert").classList.toggle("d-none");
      }, 3000)
    });
}