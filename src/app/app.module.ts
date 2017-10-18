import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { HeaderComponent } from './header/header.component';
import { NodeApiService } from './node-api.service';
import { HobbyService } from './hobby.service';
import { HobbyComponent } from './hobby/hobby.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HeaderGuestComponent } from './header-guest/header-guest.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HobbiesComponent,
    HeaderComponent,
    HobbyComponent,
    PageNotFoundComponent,
    LandingComponent,
    FooterComponent,
    LoginComponent,
    HeaderGuestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
     NodeApiService,
     HobbyService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
