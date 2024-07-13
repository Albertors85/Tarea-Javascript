const datos = [
  {
    id: 1,
    nombre: "Juan",
    habilidades: ["JavaScript", "HTML", "CSS"],
    proyectos: [
      { id: 1, nombre: "Proyecto 1" },

      { id: 2, nombre: "Proyecto 2" },
    ],
  },

  {
    id: 2,
    nombre: "María",
    habilidades: ["Python", "Java", "SQL", "Django"],
    proyectos: [
      { id: 3, nombre: "Proyecto 3" },

      { id: 4, nombre: "Proyecto 4" },
      { id: 6, nombre: "Proyecto 5" },
    ],
  },

  {
    id: 3,
    nombre: "Pedro",
    habilidades: "Java",
    proyectos: [
      { id: 5, nombre: "Proyecto 5" },

      { id: 6, nombre: "Proyecto 6" },
    ],
  },
];

/*---------------------------------------------------*/
/*Ejercicio 3 Transformaciones
Nuestro cliente tiene un array de datos y nos a pedido que saquemos
 la siguiente información. El listado de los desarrolladores
  que tengan como habilidad “JavaScript” y 
  el listado de los proyectos en el que sus desarrolladores trabajan.*/

let findPerson = (data, key, valor) => {
  let listado = [];

  const encontrdo =data.forEach((item) => {
    if (item[key].includes(valor)) {
      listado.push(item);
    }
  });
  return listado;
};

let findProyectos = (datosP) => {
  let listadoProyectos = [];
  let almacen = [];

  const encontrado = datosP.find((proyect) => {
    almacen.push(proyect.proyectos);
  });

  for (let x = 0; x < almacen.length; x++) {
    let caja = almacen[x];
    for (let i = 0; i < caja.length; i++) {
      let guardo = caja[i].nombre;
      if (!listadoProyectos.includes(guardo)) {
        listadoProyectos.push(guardo);
      }
    }
  }

  return listadoProyectos;
};

let desarrolladoresJavaScript = findPerson(datos, "habilidades", "JavaScript");
let proyect = findProyectos(datos);

console.log(desarrolladoresJavaScript);
console.log(proyect);