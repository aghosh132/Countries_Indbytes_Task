import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: any;
  password: any;

  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) { }

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  login() {
    var usename = this.loginForm.value.username
    var psw = this.loginForm.value.password
    if (this.loginForm.valid) {
      if (usename == 'user' && psw == 'password') {
        alert("welcome user")
        this.router.navigateByUrl("home")
      }

    }
  }
}
