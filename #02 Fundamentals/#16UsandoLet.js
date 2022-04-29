let numero = 1
{
    let numero = 2
    console.log('Dentro =', numero)
}
console.log('Fora =', numero)
//A váriavel let procura primeiro um escopo para usar o código, se não tiver um escopo ele usa a global...