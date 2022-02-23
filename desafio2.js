// Desafio obligatorio lucas bringas Prestamos en cuotas.




//Funcion para ingresar cantidad a prestar
function cantidad1(){
  let cantidad1 = parseInt(prompt("Ingresar cantidad a prestar"));
  alert("La cantidad es = " + cantidad1)
  return cantidad1
}

//Funcion para ingresar cuotas a pagar
function cuotas1(){
  let cuotas1 = parseInt(prompt("En cuantas cuotas quiere pagar, elija de 1 a 12"));
  alert("Desea el prestamo en " + cuotas1 + " Cuotas?")
  return cuotas1
}

//Capturar resultado de funciones
let cantidad = cantidad1()
let cuotas = cuotas1()

//Mostrar resultado de funciones
alert("La cantidad es: " + cantidad)
alert("Las cuotas son: " + cuotas)

//Funcion para dividir cantidad en cuotas
function dividir(dato1, dato2){
 let resultado = dato1 / dato2;
 return resultado
}

//Capturar cantiddad / cuotas
let division = dividir(cantidad, cuotas)

//Mostrar resultado
alert("Usted debe pagar " + cuotas + " cuotas de " + division)
