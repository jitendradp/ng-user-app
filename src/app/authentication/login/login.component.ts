import { Component, OnInit } from '@angular/core';
import { User } from './../../shared/model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = new User();
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['eve.holt@reqres.in', [Validators.required, Validators.email]],
      password: ['cityslicka', Validators.required]
    });
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe(response => {
      this.router.navigate(['user']);
    });
  }
}
