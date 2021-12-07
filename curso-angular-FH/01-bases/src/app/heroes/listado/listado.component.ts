import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman' , 'Ironman', 'Hulk', 'Thor', 'BlackWidow'];
  heroeBorrado: string = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
    // this.heroes.pop()
  }

}
