// Desafio Pre-Entrega



function calculo_credito_celu(montocredito, cuotas) {
  let interes = 3 / 100;
  let resultado = (montocredito * (interes * Math.pow(1 + interes, cuotas))) / (Math.pow(1 + interes, cuotas) - 1);
  return `${resultado.toFixed(0)} en ${cuotas} cuotas`;
}

// Celulares
let celular = [
  {
    modelo: "Samsung Galaxy s20",
    valor: 150000,
  },
  {
    modelo: "Iphone 13",
    valor: 200000,
  },
  {
    modelo: "Motorola X",
    valor: 130000,
  },
];
let nombreCelular = "";

function simulador_de_credito_pe1() {
  //  Variable de Tipo de Creditos
  let credito_tipo1 = "Celulares";


  let nombreCelular = "";

  const opcion_credito = parseInt(prompt("Atención Elegir una de la opciones del tipo de Credito: \n1 : " + credito_tipo1));

  switch (opcion_credito) {
    case 1:
      alert("Bienvenido al Simulador de Credito " + credito_tipo1);

      celular.forEach(function (valor, index) {
        temp = `${index + 1}- ${valor.modelo} El Precio Es: ${valor.valor} \n`;
        nombreCelular += temp;
      });
      let elecion = parseInt(prompt(`Cual celular deseas: \n${nombreCelular} `));
      if (elecion == 1 || elecion == 2 || elecion == 3) {
        let cuotas = parseInt(prompt(`Cuanta cuotas quieres?`));
        let vehiculo_valor = celular[elecion-1].valor;
        alert(calculo_credito_celu(vehiculo_valor, cuotas));
      } else {
        alert("La Opcion no es Valida");
      }

      break;
    default: {
      alert("Debe Elegir una de la opciones Valida");
      return simulador_de_credito;
    }
  }
}