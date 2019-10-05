import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AuthGuard } from './../authentication/guard/auth';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      { path: 'user', component: UserListComponent },
      { path: 'create', component: UserCreateComponent },
      { path: 'edit/:id', component: UserCreateComponent },
      { path: 'detail/:id', component: UserDetailComponent },
    ],
    component: UserComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class UserRoutingModule { }
