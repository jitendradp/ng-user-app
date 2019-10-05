import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UserComponent } from './user.component';
import { ToasterModule } from 'angular2-toaster';
import { RouterTestingModule } from '@angular/router/testing';
import { ToasterServices } from './../shared/services/toaster.service';
import { ToasterService } from 'angular2-toaster';
describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      imports: [AngularFontAwesomeModule, ToasterModule, RouterTestingModule],
      providers: [ToasterServices, ToasterService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
