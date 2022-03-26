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
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { RequestsResidenceComponent } from './requests-residence/requests-residence.component';
import { AddResidencesComponent } from './add-residences/add-residences.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  { path: 'Register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'ouwnerAceuil', component: OwnerAcceuilComponent },
  { path: 'Residence', component: ResidenceComponent },
  { path: 'Home_admin', component: AdminHomeComponent },
  { path: 'Request_Residence', component: RequestsResidenceComponent },
  { path: 'Add_Residence', component: AddResidencesComponent },
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
    ResidenceComponent,
    AdminHomeComponent,
    RequestsResidenceComponent,
    AddResidencesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
