const form = document.querySelector('.form');
const feedbackDescricao = document.querySelector('.fedback-descricao')

form.descricao.addEventListener('input', (e)=>{

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
        feedbackDescricao.classList.remove('allrigth');
        feedbackDescricao.classList.remove('erro');   
        feedbackDescricao.innerText = '';
    }
})


form.btnLimpar.addEventListener('click', ()=>{
    feedbackDescricao.classList.remove('allrigth');
        feedbackDescricao.classList.remove('erro');   
        feedbackDescricao.innerText = '';
        form.descricao.value = '';
});
