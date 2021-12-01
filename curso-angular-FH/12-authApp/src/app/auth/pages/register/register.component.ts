import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup = this.fb.group({
    name: ['',[Validators.required]],
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(6)]],
  });

  constructor( private fb : FormBuilder, private router: Router) { }

  register(){
    console.log(this.registerForm.value);
    console.log(this.registerForm.valid);
    this.router.navigateByUrl('/dashboard');    
  }
}
