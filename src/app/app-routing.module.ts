import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewHobbyComponent } from './new-hobby/new-hobby.component';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  { path: '', component: LandingComponent},

  { path: 'about',  component: AboutComponent },
  { path: 'contact',  component: ContactComponent },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent,
  },
  {
    path: 'hobbies',
    canActivate: [AuthGuard],
    component: HobbiesComponent
  },
  { path: 'login',  component: LoginComponent },
  {
    path: 'new-hobby',
    canActivate: [AuthGuard],
    component: NewHobbyComponent
  },
  { path: 'password',
    canActivate: [AuthGuard],
    component: ChangePasswordComponent 
  },
  { path: 'register',  component: RegisterComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export class AppRoutingModule { }