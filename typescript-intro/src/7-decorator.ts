// Crear un decorador de clase que entregue a la clase “Heroe” 
// los atributos necesarios para crear un Heroe inicial a la hora de 
// instanciar la clase y cuando ésta se instancie se muestre el Heroe 

function createHero(nombre: string, poder:string){
  return function <T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      name = nombre;
      power = poder;
    }
  }
}

@createHero("Wonderwoman", "superfuerza")
class Hero {
  name: string;
  power: string;
   constructor(nombre:string, poder:string){
     this.name = nombre;
     this.power = poder;
   }

   showHero(){
     console.log(`el heroe se llama ${this.name} y su poder es ${this.power}`);
   }
}

new Hero("","").showHero();