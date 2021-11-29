/*
    ===== Código de TypeScript =====
*/
let habilidades:string[] = ['Fuerza', 'Velocidad', 'Curación']

export interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    ciudadNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Batman',
    hp: 100,
    habilidades: ['Inteligencia', 'Agilidad']
}

personaje.ciudadNatal = 'asdasd'

console.table(personaje)