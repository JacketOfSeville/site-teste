console.log("hOi!")

// Botão Google
document.getElementById("botGoogle").onclick = function () {
    location.href = "https://google.com.br";
} 

// Botão Youtube
document.getElementById("botYoutube").onclick = function () {
    location.href = "https://youtube.com.br";
} 

// Botão Reddit
document.getElementById("botReddit").onclick = function () {
    location.href = "https://reddit.com";
} 

// Botão GitHub
document.getElementById("botGithub").onclick = function () {
    location.href = "https://github.com/JacketOfSeville";
} 

/*----------------------------------------------------------*/

function DataHoje () {
    const data = document.getElementById("datadireita"); // Chama a área de data no HTML
    const d = new Date(); // Cria a data do presente momento

    let dds = d.getDay();  // Pega o dia da semana
    switch (dds) {
        case 0:
            dds = `Domingo`;
            break;
        case 1:
            dds = `Segunda-feira`;
            break;
        case 2:
            dds = `Terça-feira`;
            break;
        case 3:
            dds = `Quarta-feira`;
            break;
        case 4:
            dds = `Quinta-feira`;
            break;
        case 5:
            dds = `Sexta-feira`;
            break;
        case 6:
            dds = `Sábado`;
            break;
        default:
            dds = `Dia da semana`
    }

    let dia = d.getDate();  // Pega o dia
    if (dia < 10) {
        dia = "0"+dia.toString();
    }

    const meses = [`Janeiro`,`Fevereiro`,`Março`,
                `Abril`,`Maio`,`Junho`,
                `Julho`,`Agosto`,`Setembro`,
                `Outubro`,`Novembro`,`Dezembro`] // Lista de meses
    const mesId = d.getMonth();  // Adquire o mês
    let mes = meses[mesId];   // Usa o Id do mês para resgatar o nome

    const ano = d.getFullYear(); // Pega o ano

    data.innerHTML = `<h2 style="margin-bottom: 5px">${dds}</h2> 
                    ${dia} de ${mes} de ${ano}<br>`;
}
DataHoje();
console.log(DataHoje());

/*----------------------------------------------------------*/

window.onscroll = function() {prender()}; // Quando rolar a página, executar Prender

var navbar = document.getElementById("navbar"); // Adquire a navbar
var sticky = navbar.offsetTop; // Pega a posição offset da Navbar

function prender() { // Adiciona a classe 'sticky' na Navbar
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky") // Adciona a classe quando a rolagem passar do tamanho da navbar
  } else {
    navbar.classList.remove("sticky"); // Remove a classe quando a rolagem voltar ao tamanho da navbar
  }
} 