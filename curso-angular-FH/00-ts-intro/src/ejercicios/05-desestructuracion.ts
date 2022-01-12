/*
    ===== Código de TypeScript =====
*/
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles:  Detalles
}

interface Detalles {
    autor:string;
    anio: number
}

const reproductor: Reproductor = {
    volumen: 50,
    segundo: 36,
    cancion: 'Break my stride',
    detalles: {
        autor: 'Matthew Wilder',
        anio: 1983
    }
}

const { volumen : vol, segundo, cancion, detalles:{ autor } } = reproductor;
// const { autor } = detalles;

// console.log('El volumen actual es', vol);
// console.log('El segundo actual es', segundo);
// console.log('La canción actual es', cancion);
// console.log('El autor es', autor);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [ , , per3] = dbz

// console.log('Personaje 1', per1);
// console.log('Personaje 2', per2);
console.log('Personaje 3', per3);