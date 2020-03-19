console.log('********** OPERADORES LÓGICOS **********');

// AND, OR, NOT

var sexo = 'F', idade = 23;

if (sexo === 'F' && idade >= 18) {
    console.log('OK');
}

if (sexo === 'M' || idade >= 18) {
    console.log('OK 2');
}

if (sexo !== 'M') {
    console.log('OK 3');
}

var feminino;

if (sexo === 'F') {
    feminino = true;
} else {
    feminino = false;
}

console.log('É feminino: ', feminino);

var masculino = (sexo === 'M');

console.log('É masculino: ', masculino);