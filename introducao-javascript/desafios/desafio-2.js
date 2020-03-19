/**
 * 2º exercício
 * Crie uma função que dado um intervalo (entre x e y) 
 * exiba todos número pares:
 * 
 
function pares(x, y) {
 // código aqui
}
pares(32, 321);

};

*/

console.log('****** MÓDULO 01 - DESAFIO 2 *****');

function pares(x, y) {
    while ( y > x) {

        if ( x % 2 === 0) {
            console.log(x);
        }

        x++;
    }
}
pares(32, 321);
