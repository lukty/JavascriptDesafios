//Numeros Primos Ej desafio 1

let number1 = prompt("Escribe un número");
let i;
let primer = true;
for (i=2; i < number1 / 2; i++) {
if (number1 % i === 0) {
primer = false;
}
}
if (primer) {
alert("El número es primo");
} else {
alert("El número no es primo");
}
