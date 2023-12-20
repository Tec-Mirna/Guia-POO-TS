/* 
   5- . Crear una clase abstracta Persona y va contener lo siguiente:
Atributos: nombre, apellido, dirección, teléfono y edad.
Métodos: 
• Crear un método constructor para recibir los datos.
• Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
• Crea un método para mostrar todos los datos personales (será el método abstracto).
• Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
• En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
• La clase Empleado va heredar de la clase Persona.
• Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo
*/

 abstract class Persona{
    public nombre: string;
    public apellido: string;
    public direccion: string;
    public telefono: string;
    public edad: number

    //Crear un método constructor para recibir los datos.
    constructor(nombre:string, apellido:string, direccion:string, telefono:string, edad:number){
        this.nombre = nombre
        this.apellido = apellido
        this.direccion = direccion
        this.telefono = telefono
        this.edad = edad
    }
   //Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
    age(){
        if (this.edad >= 18){
            console.log("Eres mayor de edad")
        } else{
            console.log("Eres menor de edad")
        }
    }
    //Crea un método para mostrar todos los datos personales (será el método abstracto)
  abstract mostrarDatos(): void;
}

//Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
export class Empleado extends Persona {
    public sueldo: number

   constructor(nombre:string, apellido:string, direccion:string, telefono:string, edad:number, sueldo:number){
    //Llama al constructor de la super clase(Clase padre)
        super(nombre, apellido, direccion, telefono, edad)
        this.sueldo= sueldo
    }
    //En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
    cargarSueldo(sueldo: number){
        this.sueldo = sueldo
    }
    imprimirSueldo(){
        console.log(`El sueldo del empleado es: $${this.sueldo}`)
    }

    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Apellido: ${this.apellido}`)
        console.log(`Dirección: ${this.direccion}`)
        console.log(`Teléfono: ${this.telefono}`)
        console.log(`Edad: ${this.edad}`)
      
       

    }
}