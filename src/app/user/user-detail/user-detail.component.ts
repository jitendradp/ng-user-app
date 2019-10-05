import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/model';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User;
  id: number;
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {
    this.user = new User();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const idField = 'id';
      this.id = params[idField];
      this.userService.get(this.id).subscribe((user: User) => {
        this.user = user;
      });
    });
  }
}
