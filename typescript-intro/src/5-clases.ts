

class Heroe {
  nombre :string;
  apellido: string;
  superpoder: string;


  constructor( nombre:string, apellido:string, superpoder:string){
    this.nombre = nombre
    this.apellido = apellido
    this.superpoder = superpoder
  }

  mostrarNombreYPoder () {
    return `El nombre es ${this.nombre} y el poder es ${this.superpoder}`;
  }
}
let deadpool = new Heroe('Wade', 'Wilson', 'Regeneracion');

console.log(deadpool.mostrarNombreYPoder())