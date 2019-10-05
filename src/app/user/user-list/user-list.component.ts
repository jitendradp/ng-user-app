import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/shared/model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToasterServices } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[];
  modalRef: BsModalRef;
  deleteUserId: number;
  constructor(
    private userService: UserService,
    private modalService: BsModalService,
    private toasterService: ToasterServices
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.list().subscribe(response => {
      this.users = response;
    });
  }
  openModal(template: TemplateRef<any>, userId: number) {
    this.modalRef = this.modalService.show(template);
    this.deleteUserId = userId;
  }

  deleteUser() {
    this.userService.delete(this.deleteUserId).subscribe(
      response => {
        this.toasterService.showSuccess(`User deleted Successfull`);
        this.deleteUserId = null;
        this.getUsers();
      }
    );
  }
}
