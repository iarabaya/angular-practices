import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

//  personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 2000
  }

  // get personajes(): Personaje[]{
  //  return this.dbzService.personajes
  // }


  // agregarNuevoPersonaje( arg : Personaje ){
  //   console.log(arg);
  //   this.personajes.push(arg);
  // }

  constructor(private dbzService : DbzService){ 
    // this.personajes = this.dbzService.personajes;
   }
}

//TAREA ADICIONAL (hecho)
//Nuevo componente agregar
//tiene el h3 hasta el cierre del form 
//mover nuevo: personaje y agregar
//@input personajes
//@input nuevo (desde el componente padre)
