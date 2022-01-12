/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {
    public nombre: string;
    public direccion?: string;

    constructor( nombre: string, direccion: string ){
        this.nombre = nombre;
        this.direccion = direccion;
    }
}

class Heroe extends PersonaNormal{

    //se puede escribir asi tambien
     constructor( 
         public alterEgo: string, 
         public edad: number,
         public nombreReal: string
    ) {
        super(nombreReal, 'New York, USA');
    }

     imprimirNombre() {
         return `${this.alterEgo} tiene ${this.edad} años`
     }
}

const ironman = new Heroe('Ironman', 33, 'Tony Stark');

console.log(ironman.imprimirNombre());
