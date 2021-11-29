let edad: number = 25;
let nombre: string = 'fulanito';
let esMayor: boolean = true;

let hobbies: string[];
hobbies = ['nadar', 'tocar la guitarra','cocinar'];


let positivos:number[] = [1,2,3,40];

interface Persona {
  nombre: string,
  apellido: string,
  fechaNacimiento?: string
}

let persona2: Persona = {
  nombre: 'clark',
  apellido: 'kent',
  fechaNacimiento: '1-1-1999'
}

function superficieTriangulo (a:number, b:number ){
  return a * b;
}

let superficieTriangulo2 = ( a:number, b:number ):number => a * b;

interface Figura {
  base: number,
  altura: number,
  superficie?: number
}

let setSuperficie = ( figura: Figura, a: number) : Figura =>{
  figura.superficie = a;
  return figura;
}

let ejFigura: Figura = {
  base: 1,
  altura: 2,
} 

console.log(setSuperficie(ejFigura, 3));
