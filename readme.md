

<div align="center">

# Validador de Descrições de Anúncios


</div>

Este projeto é um simples formulário, que faz comparações na descrição de um anúncio de Makertplace em uma [Lista de Termo proibidos](./js/termos-proibidos.json), retornando se existe alguma palavra desta lista na descrição.

<div align="left">


## Tech Stack
- javascript
- HTML
- bootstrap

</div>

## Desafio
O meu maior desafio com esta aplicação foi: criar uma view para exibir o texto da descrição, destacando os termos proibidos diretamente nela, pois o elementp HTML que eu utilizei para 
capturar o input do usuário era um `<textarea>` , impossibilitando a utilização `document.innerHtml` deste elemento. Eu consegui resolver o problema escrevendo o código abaixo.

## Deploy
**[clique aqui! ](https://validacao-descricao-produtos.vercel.app/)**

## Screenshots
<details>
  <summary>Expandir/Recolher</summary>

**Default**

[![tela-desktop-default.md.png](https://www.imagemhost.com.br/images/2022/11/23/tela-desktop-default.md.png)](https://www.imagemhost.com.br/image/rNsXTx)

**Sem erros**

[![tela-desktopok.md.png](https://www.imagemhost.com.br/images/2022/11/23/tela-desktopok.md.png)](https://www.imagemhost.com.br/image/rNs41q)

**Com erros**

[![tela-desktop-erro.md.png](https://www.imagemhost.com.br/images/2022/11/23/tela-desktop-erro.md.png)](https://www.imagemhost.com.br/image/rNsBZi)

**Modal**

[![modal-desktop-erro.md.png](https://www.imagemhost.com.br/images/2022/11/23/modal-desktop-erro.md.png)](https://www.imagemhost.com.br/image/rNswV9)

</details>


## snippets

**recebendo json contendo as palavras proibidas**
```javascript
// const url = "./termos-proibidos.json";

  const getTermos = async () => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (e) {
    console.error(e);
  }
};
```
**função principal de todo o código (detalhes mais abaixo)**
```javascript
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
    arraysTermos;
  };
};
```
**pegando o valor do input do usuário**
```javascript
   // atualiza toda vez que acontece um evento de input 
  descricao.oninput = function (e) {
    e.preventDefault();
    // inserindo o texto do input no modal
    modalBody.innerText = this.value;
    
    // verifica se há alguma palavra proibida na input do usuário
    const termosProibidos = arraysTermos.termo.filter((termo) => {
      const reg = new RegExp(termo, "i");
      if (reg.test(modalBody.innerHTML))
        // destaca as palavras proibidas no modal
        modalBody.innerHTML = modalBody.innerHTML.replace(
          termo,
          `<b style="color: tomato">${reg}</b>`
        );
      if (reg.test(this.value)) return termo;
    });
```
**exibindo o feedback visual para o usuário**
```javascript
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
```

## Lista de palavras proibidas
<details>
   <summary>Expandir/Recolher</summary>


  ```json
  {
  "termo": [
    "Accendis",
    "Adidas",
    "AirFree",
    "Alexandre J",
    "Anavar",
    "Aparelho Auditivo",
    "Apple",
    "Asics",
    "Balance wheel",
    "Bidaroga",
    "Black Mamba Hardcore",
    "Black Mamba Hyperrush",
    "Black Widow",
    "Bond Nº 9",
    "Box Tv",
    "Brinde",
    "Chanel",
    "Chromecast",
    "Cigarro Eletrônico",
    "Cine Box",
    "Cirnasnsck",
    "Compatível",
    "Dardos Zarabatana",
    "Desconto",
    "Dianabol",
    "Dr. Scholl",
    "Drogas",
    "Dz09",
    "Empregada Doméstica",
    "Excellence Mig-66",
    "Excellence Rugger",
    "Fantasia de Escravo",
    "Fantasia de Índio",
    "Finlandek",
    "Flaconete",
    "Fórmula Alemã",
    "Frete",
    "G – Hair",
    "G . Hair",
    "Genérico",
    "Ghair",
    "Go Pro",
    "Grátis",
    "Gratuíto",
    "Gtsm10",
    "Hgh",
    "Hgh Arnold Nutrition",
    "Hi-tech Pharmaceuticals",
    "Hinode",
    "Hoverboard",
    "Htv 3 Box",
    "Htv Box",
    "Hydra Dragon Pharma",
    "Instantly Ageless",
    "iPad",
    "iPhone",
    "iPod",
    "Jack3d",
    "Jeunesse",
    "Jeunesse Spa",
    "Lente Colorida",
    "Lente Corretiva",
    "Lente de Contato",
    "Lente Incolor",
    "Lipo 6 Black",
    "Lipo 6 Black Hers",
    "Lipo 6 Black Ultra Concentrate",
    "Lipodrene",
    "Liquidação",
    "Lufenuron",
    "Luminesce",
    "M. Micallef",
    "Macbook",
    "Mancera",
    "Marroquina",
    "Mary Kay",
    "Media Box",
    "Medicur",
    "Medycur",
    "Mega",
    "Mega game",
    "Melatonina",
    "Micro Tubo",
    "Microtubo",
    "Midia Box",
    "Minoxidil",
    "Montale",
    "Multi Mídia Duosat",
    "Naara",
    "Natura",
    "Naza Box",
    "Nazabox",
    "Nexbox",
    "Nike",
    "Óculos de Grau",
    "Óculos de Leitura",
    "Olimpíadas",
    "Oral Jet",
    "Original",
    "Orlistat",
    "Osklen",
    "Oxyelite",
    "Oxylin",
    "Padrão Nespresso",
    "Para Nespresso",
    "Paralelo",
    "Parfums de Marly",
    "Peruca Black Power",
    "Pesticida",
    "Pillow Med",
    "Pirex",
    "Pré Venda",
    "Primeira Linha",
    "Pró Salon",
    "Produto Fitossanitário",
    "Promoção",
    "Prosalon",
    "Pyrex",
    "Quinny",
    "Raticida",
    "Recondicionado",
    "Reembalado",
    "Refurbished",
    "Remanufaturado",
    "Remodelado",
    "Roja",
    "Royal Vkb",
    "Saldão",
    "Scholl",
    "Similar",
    "Sistema Nespresso",
    "Skatenet",
    "Smart Box",
    "Som Ambiente",
    "Split-ender",
    "Splitender",
    "Surdez",
    "Sustanon 250",
    "Taiff",
    "Talavera",
    "Tiofanato",
    "Tissot",
    "Tiziana Terenzi",
    "Tocom Box",
    "Tom Ford",
    "Tree Liss",
    "Tupperware",
    "Usado",
    "Velcro",
    "Veneno",
    "Victor Inox",
    "Vidacell",
    "Vivo",
    "Windows 7",
    "Xerubino",
    "Zarabatana",
    "Zoomp",
    "grátis",
    "gratuito",
    "gratuita",
    "envio imediato",
    "últimas unidades",
    "pouco estoque",
    "brinde",
    "pronta entrega",
    "entre em contato",
    "sac",
    "liquidação",
    "pré venda",
    "usado",
    "usada",
    "usados",
    "usadas",
    "seminovo",
    "frete grátis",
    "aproveite",
    "emagrecedores",
    "compatível",
    "compatíveis",
    "promoção",
    "desconto",
    "pergunte antes de comprar",
    "envio em até",
    "personalizado",
    "genérico",
    "inseticida",
    "durável",
    "velcro",
    "reembalado",
    "alia",
    "veneno",
    "criado mudo",
    "lente incolor",
    "paralelo",
    "similar",
    "óculos de grau",
    "auge",
    "loop",
    "source",
    "tilt",
    "vivo",
    "remodelado",
    "drogas",
    "droga",
    "crossfit",
    "sucupira",
    "mercado livre",
    "formol",
    "espada",
    "Crédito",
    "Credito"
  ]

}
 ```

[arquivo](./js/termos-proibidos.json)
 
</details>

## Clone
no seu terminal digite:
` git clone https://github.com/Odisseu93/validacao-descricao-produtos `

<div align="center">



