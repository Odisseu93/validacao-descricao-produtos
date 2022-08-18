const container = document.querySelector('#container');
const descricao = document.querySelector('#txtAreaDescicao');
const viewErros = document.querySelector("#viewErros");
const btnVer = document.querySelector('#btnVer');
const btnLimpar = document.querySelector('#btnLimpar');
const feedbackDescricao = document.querySelector('#feedBDescricao');
const url = "./termos-proibidos.json";



descricao.classList.add('estah-visivel')


container.addEventListener('input', (e) => sendInput(e.target.value))


function sendInput(input) {
    // update(input)
    fetch(url) // requisição
        .then(response => {
            return response.json()
        })
        .then(dados => {
            const termosProibidos = dados.termo;

            const textoInput = input;
            feedbackDescricao.innerText = textoInput;
            let descricaoInnerHTML = feedbackDescricao.innerHTML;

            if (feedbackDescricao.innerText != "") {
                let erros = [];

                //testa a descrição
                termosProibidos.some(termo => {
                    const reg = new RegExp(termo, 'i');
                    if (reg.test(textoInput)) {
                        erros.push(termo);
                        descricaoInnerHTML = descricaoInnerHTML.replace(termo, `<span  class="palavras-proibidas">${termo}</span>`);
                        update(descricaoInnerHTML);

                    };
                });

                //caso não tenha erro
                if (erros.length === 0) {
                    feedbackDescricao.innerText = 'Tudo Certo!';
                    feedbackDescricao.classList.add('allrigth');
                }
                else {  // caso tenha erro
                    feedbackDescricao.classList.remove('allrigth');
                    feedbackDescricao.classList.add('erro');

                    feedbackDescricao.innerText = `palavras proibidas: "${erros}"`;

                }
            } else { //reset
                limpar();
            }

        })
        .catch((e) => {
            throw Error(e)
        })

}


btnLimpar.addEventListener('click', () => {
    limpar();
    feedbackDescricao.innerText = '';
    descricao.value = '';
    viewErros.innerText = ""
});

btnVer.addEventListener('click', () => {
    descricao.classList.toggle('estah-visivel');
    viewErros.classList.toggle('estah-visivel');

});

const limpar = () => {
    feedbackDescricao.classList.remove('allrigth');
    feedbackDescricao.classList.remove('erro');
    feedbackDescricao.innerText = '';
    feedbackDescricao.innerText = '';
}

function update(descricaoInnerHTML) {
    visualViewport.innerText = descricao.value
    viewErros.innerHTML = descricaoInnerHTML;
}



