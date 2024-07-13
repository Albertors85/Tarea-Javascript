/*
     1. Eliminar la funcion setTimeout.
 */
function obtenerUsuario(id) {
  let usuario;

  if (id === 1) {
    usuario = { id: 1, nombre: "John Doe" };
  }

  return usuario;
}

const usuario = obtenerUsuario(1);
console.log(usuario);

/*
    2. Promesas.
*/

let user3;
function obtenerUsuario3(id) {
  return new Promise((resolve) => {
    let usuario;
    setTimeout(() => {
      if (id === 1) {
        usuario = { id: 1, nombre: "John Doe" };
        resolve(usuario);
      }
    }, 2000);
  });
}

obtenerUsuario3(1).then((usuario) => {
  return usuario;
});

let usuario1 = obtenerUsuario(1);

console.log(usuario1);
