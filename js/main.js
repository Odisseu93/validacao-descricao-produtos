const form = document.querySelector('.form');
const feedbackDescricao = document.querySelector('.fedback-descricao');

form.descricao.addEventListener('input', (e) => {
    const textoInput = e.target.value;

    if (form.descricao.value != "") {
        let erros = [];

        //testa a descrição
        termos_proibida_array.some(termo => {
            const reg = new RegExp(termo, 'i');
            if (reg.test(textoInput)) {
                erros.push(termo)
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


form.btnLimpar.addEventListener('click', () => {
    limpar();
    form.descricao.value = '';
});

const limpar = () => {
    feedbackDescricao.classList.remove('allrigth');
    feedbackDescricao.classList.remove('erro');
    feedbackDescricao.innerText = '';
} 