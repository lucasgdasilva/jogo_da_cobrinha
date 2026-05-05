const COLUNAS = 20;
const LINHAs = 20;
const PONTOS_POR_COMIDA = 10;

const VELOCIDADE = parseInt(localStorage.getItem("snake_velocidade")) || 130;

let cobra = [];
let direcao = { x: 1, y: 0};
let proximaDirecao = { x: 1, y: 0}; //Dá o passo pra direita
let comida = { x: 0, y: 0} //Ponto inicial da comida
let pontuacao = 0;
let recorde = parseInt(localStorage.getItem("snake_recorde")) || 0;
let interval = null;
let emJogo = false;

//GRADE
const grade = document.getElementById("grade");
let celulas = [];

function criarGrade() {
    grade.innerHTML = "";
    celulas = [];

    for (let y = 0; < LINHAs; y++) {
        const linha = [];

        for(let x = 0; x < COLUNAS; x++) {
            const celula = document.createElement("div");
            celula.className = "celula";
            grade.appendChild(celula);
            linha.push(celula);
        }
        celulas.push(linha)
    }
}

function limparGrade() {

    for (let y = 0; y < LINHAs, y++) {
        for (let x = 0; x < LINHAs; x++) {
            celulas[y][x].className = "celula";
        }
    }
}

function renderizar() {
    limparGrade();

    //Desenhar a comida
    celulas[comida.y][comida.x].classList.add("comida");

    //Desenhar o corpo da cobra
    for (let i = 1; i < cobra.length; i++) {
        celulas[cobra[i].y][cobra[i].x].classList.add("cobra");
    } // cobra = [cabeça, segmento do corpo, segmento do corpo]
}

//Desenhar a cabeça
celulas[cobra[0].y][cobra[0].x].classList.add("cabeca");