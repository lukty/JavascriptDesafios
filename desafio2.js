let numerosAlumnos = parseInt(prompt('Ingrese la cantidad de alumnos'));

let prom = (nota1,nota2,nota3) => {
    let promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}


for(let i = 1; i <= numerosAlumnos; i++){

    let nota1 = parseInt(prompt(`Ingrese la primera nota del alumno ${i}`))

    while(nota1 > 10 || nota1 <= 0){
        nota1 = parseInt(prompt('Por favor ingrese una nota del 1 al 10'))
    }

    let nota2 = parseInt(prompt(`Ingrese la segunda nota del alumno ${i}`))

    while(nota2 > 10 || nota2 <= 0){
        nota2 = parseInt(prompt('Por favor ingrese una nota del 1 al 10'))
    }

    let nota3 = parseInt(prompt(`Ingrese la tercera nota del alumno ${i}`))

    while(nota3 > 10 || nota3 <= 0){
        nota3 = parseInt(prompt('Por favor ingrese una nota del 1 al 10'))
    }

    let promedio = prom(nota1, nota2, nota3);
    alert(`El promedio del alumno ${i} es ${promedio}`);
    
}