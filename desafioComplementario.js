
// Arrays

class pantalon {
    constructor(id, nombre, color, precio) {
      this.id = id;
      this.nombre = nombre;
      this.color = color;
      this.precio = precio;
    }
  }
  
  const pantalon = [];
  pantalon.push(new pantalon(1, "Bulgaria", "roja", 2500));
  pantalon.push(new pantalon(2, "Roma", "roja", 1500));
  pantalon.push(new pantalon(3, "madrid", "roja", 2000));
  pantalon.push(new pantalon(4, "Bulgaria", "azul", 2000));
  pantalon.push(new pantalon(5, "Roma", "azul", 2500));
  pantalon.push(new pantalon(6, "madrid", "azul", 1500));
  pantalon.push(new pantalon(7, "Bulgaria", "blanca", 2000));
  pantalon.push(new pantalon(8, "Roma", "blanca", 2500));
  pantalon.push(new pantalon(9, "madrid", "blanca", 1500));
  
  console.log(pantalon); /* ver el nuevo array */
  
  const listaTipo = [];
  const listaPrecio = [];
  const listaColor = [];
  
  let pregunta = prompt(
    "Que quieres consultar hoy:\n 1-Tipos de pantalon 2-Precios 3-Colores"
  );
  if (pregunta == 1) {
    console.log("hola respuesta TIPO");
    for (const i of pantalon) {
      listaTipo.push(i.nombre);
      console.log(listaTipo);
      console.log(typeof listaTipo);
    }
    let result = listaTipo.filter((item, index) => {
      return listaTipo.indexOf(item) === index;
    });
    alert(result.join(" - "));
  } else if (pregunta == 2) {
    console.log("hola respuesta PRECIO");
    for (const i of pantalon) {
      listaPrecio.push(i.precio);
      console.log(listaPrecio);
      console.log(typeof listaPrecio);
    }
    let result = listaPrecio.filter((item, index) => {
      return listaPrecio.indexOf(item) === index;
    });
    alert(result.join(" - "));
  } else {
    console.log("ultima respuesta");
    for (const i of pantalon) {
      listaColor.push(i.color);
      console.log(listaColor);
      console.log(typeof listaColor);
    }
    let result = listaColor.filter((item, index) => {
      return listaColor.indexOf(item) === index;
    });
    alert(result.join(" - "));
  }