import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

//declaro una funcion global ya existente para poder usarla
declare function customInitFunctions():any;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor( private settingsService: SettingsService ) { }

  ngOnInit(): void {
    //invoco la funcion global que inicializa los plugins de la pagina
    customInitFunctions();
  }

}
