import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService : DbzService){}


  // @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter<Personaje>();
    
  agregar(  ){
    if(this.nuevo.nombre.trim().length === 0){ return; }
    console.log(this.nuevo);

    // this.onNewCharacter.emit(this.nuevo);
    this.dbzService.agregarNuevoPersonaje(this.nuevo);
    this.nuevo ={
      nombre: '',
      poder: 0
    }

  }

  
  // cambiarNombre( event: any){
  //   console.log(event.target.value);
  // }


  // agregar( event: Event ){
  //   event.preventDefault()
  //   console.log('hey')
  // }

}
