/* 
3- Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos: 
• Crear un constructor que reciba como parámetros el título y género de la canción.
• Utiliza los métodos get y set para recibir e imprimir la propiedad autor. 
• Crea un método para mostrar los datos de la canción.  */


export class Cancion {
    public titulo: string;
    public genero: string;
    private _autor: string;

   // 1  Crear un constructor que reciba como parámetros el título y género de la canción.
    constructor(titulo: string, genero: string){
        this.titulo = titulo
        this.genero = genero
        //Cadena vacía
        this._autor = ''
    }

    // 2 Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
    getAutor(): string{
        return this._autor
    }
    setAutor(nombreAutor: string){
       this._autor = nombreAutor
    }
    // 3 Crea un método para mostrar los datos de la canción.
    mostrarDatos() {
       console.log(`Título de la canción: ${this.titulo}, Género: ${this.genero}, Autor: ${this._autor}`)
    }
}


export{}