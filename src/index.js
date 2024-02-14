// Definindo o nome e a quantidade de experiência (XP) do herói
let nomeHeroi = "Thiago";
let XPHeroi = 17001; // Altere esse valor para testar diferentes níveis

// Utilizando uma estrutura de decisão para determinar o nível do herói com base na quantidade de XP
let nivelHeroi;
if (XPHeroi <= 1000) {
    nivelHeroi = "Ferro";
} else if (XPHeroi > 1000 && XPHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (XPHeroi > 2000 && XPHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (XPHeroi > 5000 && XPHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (XPHeroi > 7000 && XPHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if (XPHeroi > 8000 && XPHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (XPHeroi > 9000 && XPHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

// Exibindo a mensagem com o nome e o nível do herói
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi);


