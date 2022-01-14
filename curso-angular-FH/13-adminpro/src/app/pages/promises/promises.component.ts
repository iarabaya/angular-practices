import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsers().then( users => {
      console.log(users);
    })


    // const promesa = new Promise(( resolve, reject ) => {

    //   if(false){
    //     resolve('Hola mundo');
    //   }else{
    //     reject('Algo salio mal');
    //   }
      
    // });

    // promesa.then( ( msg ) => {
    //   console.log('terminé', msg);
    // }).catch( err => console.log('Error in promise', err))

    // console.log('Fin del init');

  }

  getUsers(){
    return new Promise( resolve => {
      fetch('https://reqres.in/api/users/')
        .then(res => res.json())
        .then(body => resolve(body.data))
    })
  }


}
