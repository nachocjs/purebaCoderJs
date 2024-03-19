let presupuesto = [];

class Producto{
    constructor (nombre,precio,estado){
        this.nombre = nombre;
        this.precio = precio;
        this.estado = estado;
    }
}

alert("Bienvenido PC´S Presupuestos!!!");

let nombrePersona = prompt("Ingresa tu nombre!")

alert("Introduce en los siguientes campos el nombre de la pieza, el precio y el estado y con gusto te ayudaremos a armar tu presupuesto!")
let nombre;
let precio;
let estado; 
do {
    nombre = prompt("Ingresa el nombre del producto, en el caso de que hayas terminado introduce salir");
    if(nombre.toLocaleLowerCase() !== "salir"){
    precio = parseInt(prompt("Ingresa el monto del producto"));
    estado = prompt("ingresa el estado de producto");

    const productoNuevo = new Producto(nombre,precio,estado);
    presupuesto.push(productoNuevo)
    }

} while(nombre !== "salir")

function calcularPresupuesto(){
    let total = presupuesto.reduce((acc, monto) => acc + monto.precio, 0);
    return total;
}
function calcularCuotas(){
    totalCuotas = calcularPresupuesto() / 12;
    return totalCuotas
}

alert("Precionando la tecla F12 podrás ver todal la información de tu presupuesto!\nMuchas Gracias!")

console.log("Estimado",nombrePersona,"estas son los componentes que seleccionaste:",presupuesto);
console.log("Tendrás un gasto que asciende a la suma de: U$S",calcularPresupuesto());
console.log("En el caso que gustes podrás hacer 12 cuotas sin intereses, sumando una canidad de: U$S",calcularCuotas());
console.log("Si quieres realizar un nuevo presupuesto presiona la tecla F5/nMuchas Gracias!")