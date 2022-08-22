

<div align="center">

# Validador de Descrições de Anúncios

<a href="https://www.imagemhost.com.br/image/rbLxAr"><img src="https://www.imagemhost.com.br/images/2022/08/21/image384a09e34e20e3f8.md.png" alt="imagem-formulario" border="0" /></a>

</div>

Este projeto é um simples formulário, que faz comparações na descrição de um anúncio de Makertplace em uma [Lista de Termo proibidos](./js/termos-proibidos.json), retornando se existe alguma palavra desta lista na descrição.

<div align="left">

<ul>
<h2>Tecnologias utilizadas:</h2>
<li><p><img src="http://img.shields.io/static/v1?label=Programacao&message=Javascript&color=yellow&style=for-the-badge"/></p></li>
<li>
   <img src="http://img.shields.io/static/v1?label=Estrutura&message=HTML5&color=orange&style=for-the-badge"/>
</li>
<li>
  <img src="http://img.shields.io/static/v1?label=Estilo&message=CSS3&color=blue&style=for-the-badge"/>
</li>
</ul>

</div>

## Desafio
O meu maior desafio com esta aplicação foi: criar uma view para exibir o texto da descrição, destacando os termos proibidos diretamente nela, pois o elementp HTML que eu utilizei para 
capturar o input do usuário era um `<textarea>` , impossibilitando a utilização `document.innerHtml` deste elemento. Eu consegui resolver o problema escrevendo o código abaixo.


###  Neste Trecho é:
- capturado o conteúdo do input do usuário
- destacado os termos proibidos
- enviado o código HTML para a view de erros:

```javascript
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
```

### Aqui acontece a atualização da view de erros

```javascript
function updateViewErros(descricaoInnerHTML) { 
    viewErros.innerHTML = descricaoInnerHTML;
}
```
### código completo: [clique aqui!](./js/main.js)

### Como fazer um clone do repositório?
### no seu terminal digite:
` git clone https://github.com/Odisseu93/validacao-descricao-produtos `

<div align="center">

## [Deploy da aplicação](https://validacao-descricao-produtos.vercel.app/)

</div>
