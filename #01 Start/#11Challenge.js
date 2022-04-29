let a = 7;
let b = 94;
 
console.log(a + " " + b);

a = 94;
b = 7;
 
console.log(a + " " + b);

let temp = a; //temp: informação temporária
a = b;
b = temp;

console.log(a + " " + b);

[a, b] = [b, a]; //forma direta de trocar uma variável
 
console.log(a, b);