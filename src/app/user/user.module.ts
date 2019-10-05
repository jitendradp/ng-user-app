import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ToasterModule } from 'angular2-toaster';
import { ToasterServices } from './../shared/services/toaster.service';
import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
  declarations: [UserComponent, UserListComponent, UserCreateComponent, UserDetailComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    ToasterModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [
    ToasterServices
  ]
})
export class UserModule { }
