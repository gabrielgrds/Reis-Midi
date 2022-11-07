function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; //o classList é para buscar a segunda parte da classe (tecla tecla_nada). Se fosse 0 buscaria tecla e 1 busca tecla_nada
    
    const idAudio = `#som_${instrumento}` //template string

    tecla.onclick = function () { //aqui é feito uma função anonima para poder declarar mais coisas, pois se eu colocasse o tocaSom() o navegador já iria executar a função antes mesmo de qualquer interassão com a página
        tocaSom (idAudio);
    }

    contador += 1;

    //console.log(idAudio);
}

//document serve para acessar o html;
//querySelector é para buscar alguma coisa no html e o ('') fala o que vou procurar;