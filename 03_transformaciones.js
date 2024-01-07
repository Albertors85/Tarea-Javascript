const datos = [

    {
        id: 1,
        nombre: 'Juan',
        habilidades: ['JavaScript', 'HTML', 'CSS'],
        proyectos: [

            { id: 1, 
            nombre: 'Proyecto 1' },

            { id: 2, 
            nombre: 'Proyecto 2' }
        ]

    },


    {
        id: 2,
        nombre: 'María',
        habilidades: ['Python','Java', 'SQL', 'Django'],
        proyectos: [

            { id: 3, 
                nombre: 'Proyecto 3' },

            { id: 4, 
                nombre: 'Proyecto 4' },
            { id: 6, 
                nombre: 'Proyecto 5' }
        ]

    },


    {
        id: 3,
        nombre: 'Pedro',
        habilidades: 'Java',
        proyectos: [

            { id: 5, nombre: 
                'Proyecto 5' },

            { id: 6, nombre: 
                'Proyecto 6' }
        ]
    }

];

/*---------------------------------------------------*/

let personaSkill =(datosP,clave,valor)=>{

let listado=[];
let c= clave;

const encontrado = datosP.find((item)=>{

    if(item[c]===valor){
        listado.push(item)
    }
  
    else{
         for (let x=0; x<item[c].length;x++){
            let almacen=item[c][x]

            if (almacen===valor){
                listado.push(item)
            }
            else if (almacen.id===valor || almacen.nombre===valor){
                listado.push(item)  
            }
        }

    }
})
    return listado

};


let findProyectos = (datosP)=>{
    let listadoProyectos=[];
    let almacen=[];

    const encontrado = datosP.find((proyect)=>{

        almacen.push(proyect.proyectos);  
    })

    for (let x = 0; x<almacen.length; x++){
        let caja=almacen[x]
        for (let i=0; i<caja.length;i++){
            let guardo = caja[i].nombre
            if (!listadoProyectos.includes(guardo)) {listadoProyectos.push(guardo)}
            
        }


    }

    
    return listadoProyectos
   
}

let desarrolladoresJavaScript = (personaSkill(datos,'habilidades','SQL'));

console.log(desarrolladoresJavaScript);


let proyect = findProyectos();

console.log(findProyectos(datos));

console.log(proyect);