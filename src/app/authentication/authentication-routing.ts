// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { AuthenticationComponent } from './authentication.component';

// const routes: Routes = [
//   {
//     path: 'auth',
//     children: [
//       { path: '', redirectTo: 'login', pathMatch: 'full' },
//       { path: 'login', component: LoginComponent },
//     ],
//     component: AuthenticationComponent
//   },
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class AuthenticationRoutingModule { }
// export const AuthRouting: ModuleWithProviders = RouterModule.forChild(authRoutes);

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';

export const authRoutes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
        ],
        component: AuthenticationComponent
    },

];


export const AuthRouting: ModuleWithProviders = RouterModule.forChild(authRoutes);
