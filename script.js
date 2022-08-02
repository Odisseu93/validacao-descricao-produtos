const form = document.querySelector('.form');
const feedbackDescricao = document.querySelector('.fedback-descricao')

const palavrasProibidas = [
' grátis',
'gratuito',
'gratuita',
'envio imediato',
'últimas unidades',
'pouco estoque',
'brinde',
'pronta entrega',
'entre em contato',
'sac',
'liquidação',
'pré venda',
'usado',
'usada',
'usados',
'usadas',
'seminovo',
'frete grátis',
'aproveite',
'emagrecedores',
'compatível',
'compatíveis',
'promoção',
'desconto',
'pergunte antes de comprar',
'envio em até',
'personalizado',
'genérico',
'inseticida',
'durável',
'velcro',
'reembalado',
'alia',
'veneno',
'criado mudo',
'lente incolor',
'paralelo',
'similar',
'óculos de grau',
'auge',
'loop',
'source',
'tilt',
'vivo',
'lente incolor',
'remodelado',
'drogas',
'droga',
'crossfit'

]

form.descricao.addEventListener('input', (e)=>{

    if (form.descricao.value != "") {
        let erros = [];
        palavrasProibidas.map(palavra => {
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
