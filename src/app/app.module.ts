import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './authentication/guard/auth';
import { ToasterServices } from './shared/services/toaster.service';
import { ToasterModule } from 'angular2-toaster';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    ToasterModule,
    BrowserAnimationsModule
  ],
  providers: [AuthGuard, ToasterServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
