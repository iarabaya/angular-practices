import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    }
  ];

  get personajes(){
    //se manda como desestructuracion, una copia y no el original para no mandar la referencia y permitir cambios externos
    return [...this._personajes];
  }

  constructor(){
    // console.log('Servicio inicializado');
  }

  agregarNuevoPersonaje( personaje : Personaje ){
    this._personajes.push(personaje);
  }
  
}