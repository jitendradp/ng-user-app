import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthRouting } from './authentication-routing';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthenticationComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRouting,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[]
})
export class AuthenticationModule { }
