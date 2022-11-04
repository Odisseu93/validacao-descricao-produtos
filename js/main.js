const container = document.querySelector('#container');
const descricao = document.querySelector('#txtAreaDescicao');
const viewErros = document.querySelector("#viewErros");
const btnVer = document.querySelector('#btnVer');
const btnLimpar = document.querySelector('#btnLimpar');
const feedbackDescricao = document.querySelector('#feedBDescricao');
const url = "./termos-proibidos.json";



descricao.classList.add('estah-visivel')

// input event para a principal função do código
container.addEventListener('input', (e) => sendInput(e.target.value))


function sendInput(input) {
    fetch(url) // requisição
        .then(response => {
            return response.json()
        })
        .then(dados => {
            const termosProibidos = dados.termo;

            const textoInput = input; 
            // feedbackDescricao.innerText = textoInput;
            
            viewErros.innerText = descricao.value; // enviar o texto do textarea para o para a div ouculta #viewErros
            // trigger para a função de checagem
            if (textoInput != "") {
                let erros = [];
                
                //testa se a descrição contém alguma palavra do arquivo json
                termosProibidos.some(termo => {
                    const reg = new RegExp(termo, 'i');
                    if (reg.test(textoInput)) {
                        erros.push(termo);
                        viewErros.innerHTML = viewErros.innerHTML.replace(termo, `<span  class="palavras-proibidas">${termo}</span>`); 
                        updateViewErros(viewErros.innerHTML); /* transferindo o conteúdo da descrição para view de erros*/

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

                    feedbackDescricao.innerText = `palavras proibidas: \n${erros.join(' \n')}`;

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
}

function updateViewErros(descricaoInnerHTML) { 
    viewErros.innerHTML = descricaoInnerHTML;
}



