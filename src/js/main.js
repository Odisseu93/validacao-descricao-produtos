const descricao = document.querySelector("[form]");
const modalBody = document.querySelector("[modal-body]");
const alertSuccess = document.querySelector("[alert-success]");
const alertDanger = document.querySelector("[alert-danger]");
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
