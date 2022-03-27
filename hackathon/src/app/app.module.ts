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
import { ListSyndicsComponent } from './list-syndics/list-syndics.component';
import { AddSyndicComponent } from './add-syndic/add-syndic.component';
import { SyndicProfilComponent } from './syndic-profil/syndic-profil.component';
import { AddresidenceComponent } from './addresidence/addresidence.component';
import { RequestOwnerComponent } from './request-owner/request-owner.component';
import { ListFactureComponent } from './list-facture/list-facture.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResidentComponent } from './resident/resident.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { AddOwnerComponent } from './add-owner/add-owner.component';
import { AddSyndicOwnerComponent } from './add-syndic-owner/add-syndic-owner.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  { path: 'Register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'ouwnerAceuil', component: OwnerAcceuilComponent },
  { path: 'Residence', component: ResidenceComponent },
  { path: 'Home_admin', component: AdminHomeComponent },
  { path: 'Request_Residence', component: RequestsResidenceComponent },
  { path: 'Add_Residence', component: AddResidencesComponent },
  { path: 'List_syndics', component: ListSyndicsComponent },
  { path: 'Add_syndic', component: AddSyndicComponent },
  { path: 'SyndicProfil/:_id', component: SyndicProfilComponent },
  { path: 'Addresidance', component: AddresidenceComponent },
  { path: 'Request_ouwner', component: RequestOwnerComponent },
  { path: 'listefacture', component: ListFactureComponent },
  { path: 'acceuilresident', component: ResidentComponent },
  { path: 'Reclamation', component: ReclamationComponent },
  { path: 'addOwner', component: AddOwnerComponent },
  { path: 'addSyndicOwner', component: AddSyndicOwnerComponent },





  



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
    AddResidencesComponent,
    ListSyndicsComponent,
    AddSyndicComponent,
    SyndicProfilComponent,
    AddresidenceComponent,
    RequestOwnerComponent,
    ListFactureComponent,
    ResidentComponent,
    ReclamationComponent,
    AddOwnerComponent,
    AddSyndicOwnerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
