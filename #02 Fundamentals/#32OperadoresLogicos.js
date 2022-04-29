//v e v -> v
//v e f -> f     E       &&
//f e ? -> f

//v ou ? -> v
//f ou v -> v    OU      ||
//f ou f -> f

//v xor v -> f
//v xor f -> v  OU EXCLUSIVO  !=
//f xor v -> v
//f xor f -> f

//!v -> f       DIFERENTE     !
//!f -> v

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //operador unário 

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
