const container = document.querySelector('#container');
const descricao = document.querySelector('#descricao');
const viewErros = document.querySelector("#viewErros");
const btnVer = document.querySelector('#btnVer');
const btnLimpar = document.querySelector('#btnLimpar');
const feedbackDescricao = document.querySelector('#feedBDescricao');
const url = "./js/termos-proibidos.json";



descricao.classList.add('estah-visivel')


container.addEventListener('input', (e) => {


    fetch(url) // requisição
        .then(response => {
            return response.json()
        })
        .then(dados => {
            const termosProibidos = dados.termo;
            console.log(termosProibidos);

            let descricaoInnerHTML = descricao.innerHTML;
            const textoInput = e.target.innerText;

            if (descricao.innerText != "") {
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

})


btnLimpar.addEventListener('click', () => {
    limpar();
    descricao.innerText = '';
});

btnVer.addEventListener('click', () => {
    descricao.classList.toggle('estah-visivel');
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



