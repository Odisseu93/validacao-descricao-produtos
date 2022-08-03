const form = document.querySelector('.form');
const feedbackDescricao = document.querySelector('.fedback-descricao')

form.descricao.addEventListener('input', (e) => {

    if (form.descricao.value != "") {
        let erros = [];
        termos_proibida_array.map(palavra => {
            if (e.target.value.match(palavra)) erros.push(palavra);
        });

        if (erros.length === 0) {
            feedbackDescricao.innerText = 'Tudo Certo!';
            feedbackDescricao.classList.add('allrigth');
            feedbackDescricao.classList.add('show-display');
        }
        else {
            feedbackDescricao.classList.add('show-display');
            feedbackDescricao.classList.remove('allrigth');
            feedbackDescricao.classList.add('erro');

            feedbackDescricao.innerText = `palavras proibidas: "${erros}"`;

        }
    } else { //reset
        limpar();
    }
})


form.btnLimpar.addEventListener('click', () => {
    limpar();
    form.descricao.value = '';
});

const limpar = () => {
    feedbackDescricao.classList.remove('allrigth');
    feedbackDescricao.classList.remove('show-display');
    feedbackDescricao.classList.remove('erro');
    feedbackDescricao.classList.remove('show-display');
    feedbackDescricao.innerText = '';
} 