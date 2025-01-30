//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';


let listaNumerosSorteados = [];
let multiplicador = 100;
let secretNumber = numeroAleatorio();
let countplay = 1;

function mostrarNaTela(tag, text){
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
    responsiveVoice.speakf(text, 'Brazilian Portuguese Female', {rate: 1.2});
}

init();


function confito(){
    return 1

}


//Metodo botao chutar

 function verificarChute(){
    console.log('jogo iniciado');
    let guess = document.querySelector("input").value;
    console.log(document.querySelector("input").value);
    if(guess == secretNumber  ){
        
        let message = `Você acertou! \n o número secreto é ${secretNumber} \n Número de ${countplay > 1 ? 'Tentativas' : 'Tentativa'}:${countplay}`;
        mostrarNaTela('h1', message);

        document.getElementById('reiniciar').removeAttribute('disabled');


    } else {
        if(guess > secretNumber){
            mostrarNaTela('h1', 'O número é menor ');
        }else{
            mostrarNaTela('h1', 'O número é maior ');
        }
        countplay ++;
        limparImput();
    }


 }

 function numeroAleatorio(){
    let numeroEscolhido =  ((Math.random() * multiplicador) | 1)+1;

    if ( listaNumerosSorteados.length == multiplicador){
        listaNumerosSorteados = [];
    }

    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
    } else{
        listaNumerosSorteados.push(numeroEscolhido);
        console.log("Numero adicionado a lista dos já esoclhidos: "+numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
 }

 function limparImput(){
     document.querySelector("input").value = '';
 }

 function newGame(){
    secretNumber = numeroAleatorio();
     limparImput();
     countplay = 1;
     init();
     document.getElementById('reiniciar').setAttribute('disabled', true);

 }

 function init(){
    mostrarNaTela('p', 'Escolha um número entre 1 e 10');
    mostrarNaTela('h1', 'Número secreto');
}



console.log('teste botao desabilitado'+ document.getElementById('reiniciar').innerHTML
);


