let listaDeEstudantes = ["Helena", "Chico", "Mário", 'Maria', `João`];
let quantidadeDeEstudantes = listaDeEstudantes.length;
console.log(quantidadeDeEstudantes)

for (let indice = 0; indice < quantidadeDeEstudantes; indice++) {
    const alunoCorrente = listaDeEstudantes[indice];
    console.log(alunoCorrente)
}

let inicio = 0;

// do {
//     console.log(listaDeEstudantes[inicio]);
//     inicio++
// } while (inicio < quantidadeDeEstudantes);

while (inicio < quantidadeDeEstudantes) {
    console.log(listaDeEstudantes[inicio]);
    inicio++
}

for (let numero = 1; numero <= 10; numero++) {
    console.log(numero)
}

// listaDeEstudantes.push("José");
// console.log(listaDeEstudantes);

if (quantidadeDeEstudantes < 5) {
    listaDeEstudantes.push('José')
    console.log(listaDeEstudantes);
} else {
    console.log('Não é possível inserir mais alunos nessa turma');
}


