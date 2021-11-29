
interface Mascota {
  nombre:string,
  edad?:number
}

let perro: Mascota = {
  nombre: 'Firulais',
  edad: 8
}

let gato: Mascota = {
  nombre: 'Michi',
  edad: 2
}

let pez: Mascota = {
  nombre: 'Magikarp'
}

const edadMascota = ( mascota: Mascota ): void =>{
  let edad: number|string = mascota?.edad || 'no especificado';
  console.log(`nombre ${mascota.nombre} ${edad}`);
}

edadMascota(perro);
edadMascota(pez);
edadMascota(gato);