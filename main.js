function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encotrado');
        //alert('Elemento ou seletor não encotrado');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador ++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; //o classList é para buscar a segunda parte da classe (tecla tecla_nada). Se fosse 0 buscaria tecla e 1 busca tecla_nada
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () { //aqui é feito uma função anonima para poder declarar mais coisas, pois se eu colocasse o tocaSom() o navegador já iria executar a função antes mesmo de qualquer interassão com a página
        tocaSom (idAudio);
    }

    tecla.onkeydown = function(evento) {

        if (evento.code === 'Space' || evento.code ==='Enter') // só um = atribui algo exemplo x = evento, então evento é x... para comparar tem que usar o == ou seja, quando o evento for o espaço, fazer algo
            tecla.classList.add ('ativa'); // || significa "or"
    }

    tecla.onkeyup = function() {
        tecla.classList.remove ('ativa');
    }

    //console.log(idAudio);
}

//document serve para acessar o html;
//querySelector é para buscar alguma coisa no html e o ('') fala o que vou procurar;