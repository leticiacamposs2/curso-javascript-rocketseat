console.log('********** INTERVALO E TIMEOUT **********');

var teste = 2;
function exibeAlgo() {
    console.log(teste += 1);
}

// executa a função
setInterval(exibeAlgo(), 1000);

// passa a função como parametro
setInterval(exibeAlgo, 1000);

// só executa em 5 segundos
setTimeout(exibeAlgo, 5000);