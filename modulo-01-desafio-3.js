/**
 * 3º exercício
 * Escreva uma função que verifique se o vetor de habilidades 
 * passado possui a habilidade "Javascript" e retorna um booleano 
 * true/false caso exista ou não
 * 
 
Dica: para verificar se um vetor contém um valor, utilize o método indexOf.
*/

console.log('****** MÓDULO 01 - DESAFIO 3 *****');

function temHabilidade(skills) {
    return console.log(skills.indexOf('Javascript') >= 0 ? true : false);
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false
