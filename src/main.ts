import './style.css'
import { CabeceraPagina } from "./utils/cabeceraPagina";
import { Calculadora } from "./utils/calculator";
import { Cancion } from "./utils/cancion";
import { Cuenta } from "./utils/cuenta";
import { Empleado } from "./utils/persona";

// 1

const cabeceraPagina = new CabeceraPagina("Guía de ejercicios en TypeScript con POO", "verde", "Arial");
console.log("PRIMER EJERCICIO 1️⃣")
cabeceraPagina.imprimirPropiedades(); 
cabeceraPagina.alineacionTitulo("centrado");
console.log("Propiedades obtenidas:", cabeceraPagina.obtenerPropiedades());


console.log('SEGUNDO EJERCICIO 2️⃣')

// 2
const calculadora = new Calculadora();

console.log("Suma:", calculadora.sum(29,20))
//Llama al método sumar de la instancia recién creada(calculadora) y le pasa dos números como argumento, la función "suma" dentro de la clase "Calculadora" realiza la operación
console.log("Resta:", calculadora.resta(36,19))
console.log("Multiplicación:", calculadora.multiplicacion(5,8))
console.log("División:", calculadora.division(90,5))
console.log(`Potencia:`, calculadora.potencia(5,2))
console.log(`Factorial:`, calculadora.factorial(8)) //8*7*6*5*4*3*2*1

console.log('TERCER EJERCICIO 3️⃣')
// 3
 let cancion = new Cancion('Hijo de la luna', 'Balada-pop y vals')
 cancion.setAutor('Mecano')
 cancion.mostrarDatos();

console.log('CUARTO EJERCICIO 4️⃣')



// 4
let cuenta = new Cuenta("Mirna Zuleyma Lemus Recinos", 0.0 , "Corriente", "333333")
cuenta.mostrarDatos()
cuenta.depositar(100)
cuenta.retirar(19)

console.log("QUINTO EJERCICIO 5️⃣")


// 5
//Define un objeto de la clase Empleado
let empleado = new Empleado("Mirna Zuleyma", "Lemus Recinos", "Sonsonate", "7055-3665", 20, 200)

// imprima los datos del empleado y su sueldo
empleado.mostrarDatos();
/* empleado.age() */
empleado.imprimirSueldo()


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1> GUIA DE PROGRAMACION ORIENTADA A OBJETOS CON TYPESCRIPT</h1>
<h4>(Abre la consola para ver los resultados)</h4>
`

