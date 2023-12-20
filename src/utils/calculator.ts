/*   2- Crear una clase Calculadora que contendrá los siguientes métodos:
• Sumar
• Restar
• Multiplicar
• Dividir
• Potencia
• Factorial */


export class Calculadora{
  sum = (a: number, b: number): number => {
    return a + b;
  }
  resta = (a: number, b: number): number => {
    return a - b;
  }
  multiplicacion = (a: number, b: number): number => {
    return a * b;
  }
  division = (a: number, b: number): number => {
    if(b === 0){
        throw new Error("No se puede dividir por cero, ingrese un número diferente")
    }
    return a / b;
  }
  potencia = (base: number, exponente: number): number => {
    return Math.pow(base, exponente)
  }
  factorial = (num: number): number => {
    //Si num es = 0 ó 1
        if (num === 0 || num === 1){
            
            return 1; 
        }
        //La variable resultado se inicializa en 1, si se colaca 0 el resultado será 0
        //Ej: 0*1=0, 0*2=0, 0*3=0, =*4=0
        // 1*2=2, 2*3=6, 6*4=24, 24*5=120, 120*6=720...
        let resultado = 1;
        for (let i = 1; i <= num; i++){
            resultado *= i;
        }
        return resultado;
  }

}













