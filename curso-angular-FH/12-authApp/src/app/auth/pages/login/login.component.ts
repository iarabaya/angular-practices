import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup = this.fb.group({
    email: ['test1@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)] ]
  })
  
  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  login(){
    console.log(this.loginForm.value);
    console.log(this.loginForm.valid);

    const { email, password } = this.loginForm.value;
    this.authService.login( email, password )
      .subscribe( resp => {
        // console.log(resp);
        if( resp === true ){
          this.router.navigateByUrl('/dashboard');
        }else{
          // console.warn(resp);
          Swal.fire('Error', resp, 'error');
        }
    })
  }
}
