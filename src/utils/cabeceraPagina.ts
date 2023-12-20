/*  
1- Crear una clase Cabecera Pagina, que contenga 3 métodos, 
el primer método que obtenga el título, color y fuente de la página, 
el segundo método que indique como desea que aparezca el título si centrado, derecha o izquierda y 
el tercer método que imprima todas las propiedades.
 */
  

  export class CabeceraPagina {
    public titulo: string;
    public color: string;
    public fuente: string;
  
    constructor(titulo: string, color: string, fuente: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }
  //Primer método
    imprimirPropiedades() {
        let { titulo, color, fuente } = this.obtenerPropiedades();
        console.log(`Título: ${titulo}, Color: ${color}, Fuente: ${fuente}`);
    }

    //Segundo métododo
    alineacionTitulo(alineacion: string) {
        console.log(`El título está ${alineacion}`);
    }
  
    obtenerPropiedades() {
        return { titulo: this.titulo, color: this.color, fuente: this.fuente };
    }

    
  }