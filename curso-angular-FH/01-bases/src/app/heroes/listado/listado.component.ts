import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman' , 'Ironman', 'Hulk', 'Thor', 'BlackWidow'];

  borrarHeroe(){
    console.log('borrando...');
    this.heroes.pop()
  }

}
