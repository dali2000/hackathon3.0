import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OwnerAcceuilComponent } from './owner-acceuil/owner-acceuil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResidenceComponent } from './residence/residence.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  { path: 'Register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'ouwnerAceuil', component: OwnerAcceuilComponent },
  { path: 'Residence', component: ResidenceComponent }


];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    OwnerAcceuilComponent,
    NavbarComponent,
    ResidenceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
