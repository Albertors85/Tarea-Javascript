/*
Objeto con:
    -nombre
    -apellidos
    -algunos temas del bootcamp
    -busqueda de trabajo
    -Método que recibe por parametro un curso y devuelve la fecha de inicio



*/

function AlumnoKeep(nombre, apellido, edad, busqueda, bootcamp) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.busqueda = busqueda;

  this.bootcamp = {
    javascript: [2023, 12, 12],
    node: [2023, 12, 12],
    git: [2023, 12, 12],
    react: [2024, 12, 24],
  };

  this.getFechas = function (encuentraCurso) {
    let fechaInicio;

    for (curso in this.bootcamp) {
      if (this.bootcamp.hasOwnProperty(curso)) {
        if (curso === encuentraCurso) {
          fechaInicio = this.bootcamp[curso].join("-");
          break;
        }
      } else {
        fechaInicio = `No puedo darte esa información. Revisa el listado de cursos${Object.keys(
          this.bootcamp
        )}`;
      }
    }
    return `La fecha de inicio del curso ${curso} es ${fechaInicio}`;
  };

  this.metodo = function () {
    return `Mi nombre es ${
      this.nombre + " " + this.apellido
    } y estoy apuntado a los cursos ${Object.keys(this.bootcamp)}`;
  };
}

let alberto = new AlumnoKeep(
  "Alberto",
  "Romero Serrano",
  38,
  true,
  "keepcoding"
);

console.log(alberto);
console.log(alberto.bootcamp);
console.log(alberto.getFechas("react"));
console.log(alberto.metodo());


