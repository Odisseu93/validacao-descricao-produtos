const container = document.querySelector('#container');
const descricao = document.querySelector('#descricao');
const txtAreaDescicao = document.querySelector('#txtAreaDescicao');
const viewErros = document.querySelector("#viewErros");
const btnVer = document.querySelector('#btnVer');
const btnLimpar = document.querySelector('#btnLimpar');
const feedbackDescricao = document.querySelector('#feedBDescricao');
const url = "./js/termos-proibidos.json";



txtAreaDescicao.classList.add('estah-visivel')


container.addEventListener('input',(e) => enviarDados(e.target.value))


function enviarDados(input) {
console.log(input)
    // update(input)
    fetch(url) // requisição
        .then(response => {
            return response.json()
        })
        .then(dados => {
            const termosProibidos = dados.termo;
            console.log(termosProibidos);

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
                        console.log(descricaoInnerHTML);
                        descricaoInnerHTML = descricaoInnerHTML.replace(termo, `<span  class="palavras-proibidas">${termo}</span>`);
                        console.log(descricaoInnerHTML)
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
    txtAreaDescicao.value = '';
});

btnVer.addEventListener('click', () => {
    txtAreaDescicao.classList.toggle('estah-visivel');
    viewErros.classList.toggle('estah-visivel');

});

const limpar = () => {
    feedbackDescricao.classList.remove('allrigth');
    feedbackDescricao.classList.remove('erro');
    feedbackDescricao.innerText = '';
}

function update(descricaoInnerHTML) {
    viewErros.innerHTML = descricaoInnerHTML;
}



