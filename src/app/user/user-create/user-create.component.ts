import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from 'src/app/shared/model';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { ToasterServices } from './../../shared/services/toaster.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  userForm: FormGroup;
  user: User;
  id: number;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private toasterService: ToasterServices
  ) {
    this.user = new User();
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      avatar: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
      country:['', [Validators.required]]
    });

    this.activatedRoute.params.subscribe(params => {
      const idField = 'id';
      this.id = params[idField];
      if (this.id) {
        this.userService.get(this.id).subscribe((user: User) => {
          this.userForm.patchValue(user);
        });
      }
    });
  }

  submit() {
    this.user = this.userForm.value;
    if (this.id) {
      this.userService.edit(this.user).subscribe(response => {
        this.toasterService.showSuccess(`User Updated Successfull`);
      });
    } else {
      this.userService.create(this.user).subscribe(response => {
        this.toasterService.showSuccess(`User Added Successfull`);
      });
    }
  }
}
