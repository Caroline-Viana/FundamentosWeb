

// Carrossel

const texto1_opcoes = [
    "A dona da cama / personagem principal",
    "O 'monstro' que fica embaixo da cama / amigo imaginário",
    "Todos os personagens"
];
const texto2_opcoes = [
    "Sarah",
    "Sneeze",
    "Família da Sarah e do Sneeze"
];
const cor_opcoes = ["#f34739", "#FE9968", "#ff6e27"];
const image_opcoes = [
    "https://pbs.twimg.com/media/EX_LMlRXYAAwQFe.jpg",
    "https://pbs.twimg.com/media/EZ2HqlGXYAA-xAg.png:small",
    "https://i.pinimg.com/564x/9e/3a/b8/9e3ab86ad7448dee33533e491c88185a.jpg",
];
var i = 0;
const textoOpcoesText1 = document.getElementById("texto_opcoes-text1");
const textoOpcoesText2 = document.getElementById("texto_opcoes-text2");
const opcoesImagem = document.getElementById("image_carousel");
const carrossel = document.getElementById("carousel-wrapper");
const menu = document.getElementById("menu_carousel");
const opcaoPrevia = document.getElementById("opcao_previa");
const proximaOpcao = document.getElementById("proxima_opcao");

textoOpcoesText1.innerHTML = texto1_opcoes[i];
textoOpcoesText2.innerHTML = texto2_opcoes[i];
opcoesImagem.style.backgroundImage = "url(" + image_opcoes[i] + ")";
menu.style.background = cor_opcoes[i];

proximaOpcao.onclick = function () {
    i = i + 1;
    i = i % texto1_opcoes.length;
    textoOpcoesText1.dataset.nextText = texto1_opcoes[i];

    textoOpcoesText2.dataset.nextText = texto2_opcoes[i];

    menu.style.background = cor_opcoes[i];
    carrossel.classList.add("animacao-prox");
    
    setTimeout(() => {
    opcoesImagem.style.backgroundImage = "url(" + image_opcoes[i] + ")";
    }, 455);
    
    setTimeout(() => {
    textoOpcoesText1.innerText = texto1_opcoes[i];
    textoOpcoesText2.innerText = texto2_opcoes[i];
    carrossel.classList.remove("animacao-prox");
    }, 650);
};

opcaoPrevia.onclick = function () {
    if (i === 0) {
    i = texto1_opcoes.length;
    }
    i = i - 1;
    textoOpcoesText1.dataset.previousText = texto1_opcoes[i];

    textoOpcoesText2.dataset.previousText = texto2_opcoes[i];

    menu.style.background = cor_opcoes[i];
    carrossel.classList.add("animacao-anterior");

    setTimeout(() => {
    opcoesImagem.style.backgroundImage = "url(" + image_opcoes[i] + ")";
    }, 455);
    
    setTimeout(() => {
    textoOpcoesText1.innerText = texto1_opcoes[i];
    textoOpcoesText2.innerText = texto2_opcoes[i];
    carrossel.classList.remove("animacao-anterior");
    }, 650);
};