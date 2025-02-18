
let X = 20;

const y = 30;

// var z = 40;


X = 100;
// y = 40;


console.log(X)
console.log(y)


// Tipo de datos

let cadena = "Hola soy una cadena de texto" //string o cadena de texto

let numero = 20; //variable de tipo numero

let isTrue = true;
let isFalse = false;

let Nulo = null; //variable sin valor

let arreglo = [1,2,3,4,5];

//agregar elemento al final del arreglo
arreglo.push(6)

//agregar elemento al inicio del arreglo
arreglo.unshift(0)

//eliminar ultimo elemento del arreglo
arreglo.pop()

//eliminar el primer elemento del arreglo
arreglo.shift()



console.log(arreglo)




let edades = [12, 18, 22, 25, 30];
let mayores = edades.filter(edad => edad >= 18);
console.log(mayores); // [18, 22, 25, 30]

let menores = edades.filter(edad => edad <= 17)
console.log(menores)

let repetidos = ["a", "b", "c", "b", "d", "a"];
console.log(repetidos.indexOf("a")); // 3


// OBJETOS

const miObjetoPersona = {nombre: "Lucas", edad: 21, cumpleaños: "31/07/2003" }

const usuariosDeMiApp = [

    {nombre: "Lucas", edad: 21, cumpleaños: "31/07/2003", activo: true, mascotasPreferidas: ["perro", "gato"] },

    {nombre: "Victor", edad: 23, cumpleaños: "20/03/2003", activo: false, contraseña: "xddjsodas"},
    
    {nombre: "Pepe", edad: 21, cumpleaños: "31/07/2003", activo: true, 
        mascotasPreferidas: [
        { nombre: "perro", razas: "bulldog", edad: "" },
        { nombre: "gato", razas: ["siames", "loquesea"]}
    ]},
]

usuariosDeMiApp[2].mascotasPreferidas[0].nombre = "mono"

usuariosDeMiApp[1].cumpleaños = "31/05/2003"


const AniamalCambiado = usuariosDeMiApp[0].mascotasPreferidas[1] = "tigre"

console.log(AniamalCambiado)


// console.log(usuariosDeMiApp[2].mascotasPreferidas[0].nombre)











// const persona1 = { nombre: "Lucas", apellido: "Melgar" };

// persona1.nombre = "Renato"
// persona1.apellido = "Rios"

// console.log(persona1)


 const Producto = {nombre: "Laptop", precio: 2500}

 Producto.precio = 4000

 console.log(Producto)


// const numero1 = 5
// const numero2 = 10

// const sdadasdas = numero1 + numero2;

// console.log(sdadasdas)


const usuarios = [
    { 
        id: 1, 
        nombre: "Lucas", 
        edad: 21, 
        direccion: { ciudad: "Lima", pais: "Perú" }, 
        pedidos: [
            { 
                 idPedido: 101, 
                fecha: "2025-02-10", 
                productos: [
                    { nombre: "Laptop", precio: 1200, estado: "pendiente" },
                    { nombre: "Mouse", precio: 50, estado: "entregado" }
                ] 
            },

            { 
                 idPedido: 102, 
                fecha: "2025-02-15", 
                productos: [
                    { nombre: "Teclado", precio: 80, estado: "pendiente" },
                    { nombre: "Mesa", precio: 180, estado: "pendiente" }

                ] 
            }
        ]
    },

    { 
        id: 2, 
        nombre: "María", 
        edad: 25, 
        direccion: { ciudad: "Madrid", pais: "España" }, 
        pedidos: [
            { 
                idPedido: 103, 
                fecha: "2025-02-12", 
                productos: [
                    { nombre: "Monitor", precio: 300, estado: "pendiente" },
                    { nombre: "Parlantes", precio: 100, estado: "pendiente" }
                ] 
            }
        ]
    }
];


let estadoActual = usuarios[0].pedidos[1].productos[0].estado = "entregado"

console.log(estadoActual)