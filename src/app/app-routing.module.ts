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
import { HobbyDetailComponent } from './hobby-detail/hobby-detail.component';
import { HobbyEditFormComponent } from './hobby-edit-form/hobby-edit-form.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent,
  },
  {
    path: 'new-hobby',
    canActivate: [AuthGuard],
    component: NewHobbyComponent
  },
  {
    path: 'hobbies',
    canActivate: [AuthGuard],
    component: HobbiesComponent
  },
  {
    path: 'hobby/:id',
    canActivate: [AuthGuard],
    component: HobbyDetailComponent
  },
  {
    path: 'edit-hobby/:id',
    canActivate: [AuthGuard],
    component: HobbyEditFormComponent
  },

  // user not logged in
  { path: 'login',  component: LoginComponent },
  { path: 'register',  component: RegisterComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export class AppRoutingModule { }