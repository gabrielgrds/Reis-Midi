function tocaSomNada () {
    document.querySelector('#som_tecla_nada').play();
}

function tocaSomSecret () {
    document.querySelector('#som_tecla_secret').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomNada;

//document serve para acessar o html;
//querySelector é para buscar alguma coisa no html e o ('') fala o que vou procurar;