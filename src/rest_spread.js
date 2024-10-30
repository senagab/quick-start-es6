// arguments
function somar() {

    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;

    // console.log(arguments)
    // return a + b;
}

console.log(somar(10, 2, 3));

// rest
function somarComRest(...numeros) { // reticencias torna em operador rest
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 2, 3));

// spread
// numeros
const numeros = [1, 2, 3, 4];
console.log(...numeros);

// times
const timesDeFutebolSaoPaulo = ['santos', 'palmeiras', 'bragantino', 'são paulo'];
const timesDeFutebolRio = ['vasco', 'flamengo', 'botafogo', 'fluminense'];

// concatenação entre arrays
// const timesDeFutebol = timesDeFutebolSaoPaulo.concat(timesDeFutebolRio);
const timesDeFutebol = [...timesDeFutebolSaoPaulo, ...timesDeFutebolRio];

console.log(timesDeFutebol);