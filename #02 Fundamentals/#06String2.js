const nome = 'Rebeca';
const concatenacao = 'Olá' + nome + '!';
const template = ` 
Olá
${nome}!`; //crase
console.log(concatenacao, template);

//expressoes...
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase(); //Mudando pra letra maiúscula
console.log(`Ei... ${up(`cuidado`)}!`);