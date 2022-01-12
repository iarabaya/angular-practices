// import { Personaje } from "./ejercicios/02-array-obj-interface";
/*
    ===== Código de TypeScript =====
*/

function sumar (a:number = 0,b:number = 0):number{
    return a + b
}

const sumarFlecha = (a:number, b:number):number => a+b;

function multiplicar (numero:number, otroNumero?:number, base:number = 2):number {
    return numero * base
}


// const resultado = sumar(10, 12);
// const resultadoFlecha = sumarFlecha(1, 12);
// const resultado3 = multiplicar(5,10);
// const resultado4 = multiplicar(5,0,10);

// console.log(resultado);
// console.log(resultadoFlecha);
// console.log(resultado3);
// console.log(resultado4);
interface PersonajeLOR{
    nombre: string,
    hp: number,
    habilidades: string[]
    mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR, ptCuracion: number):void{

    personaje.hp += ptCuracion

    console.log(personaje);
}

const personaje1: PersonajeLOR = {
    nombre:'Frodo',
    hp:80,
    habilidades:['tirar piedra', 'usar anillo'],
    mostrarHp(){
        console.log('Puntos de vida: ', this.hp);
    }
}

curar(personaje1,20);