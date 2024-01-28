import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrazioneComponent } from './componenti/registrazione/registrazione.component';
import { LoginComponent } from './componenti/login/login.component';
import { AbbDonnaComponent } from './componenti/abb-donna/abb-donna.component';
import { AbbUomoComponent } from './componenti/abb-uomo/abb-uomo.component';
import { HomeComponent } from './componenti/home/home.component';
import { NotFoundComponent } from './componenti/not-found/not-found.component';
import { AdminComponent } from './componenti/admin/admin.component';
import { HomepageComponent } from './componenti/homepage/homepage.component';
import { UtentiComponent } from './admin/utenti/utenti.component';
import { MerceComponent } from './admin/merce/merce.component';
import { FattureComponent } from './admin/fatture/fatture.component';
import { CarrelloComponent } from './componenti/carrello/carrello.component';
import { authGuard } from './auth/auth.guard';
import { FormMerceComponent } from './admin/form-merce/form-merce.component';
import { FormFatturaComponent } from './admin/form-fattura/form-fattura.component';
import { ListaMerceComponent } from './admin/lista-merce/lista-merce.component';
import { ListaFatturaComponent } from './admin/lista-fattura/lista-fattura.component';
import { PagamentoComponent } from './componenti/pagamento/pagamento.component';
import { AccessoriTelefonoComponent } from './componenti/accessori-telefono/accessori-telefono.component';
import { FerramentaComponent } from './componenti/ferramenta/ferramenta.component';
import { PuliziaCasaComponent } from './componenti/pulizia-casa/pulizia-casa.component';

const routes: Routes = [
  {path:"", component: HomeComponent, children:[
    {path:"abbDonna", component: AbbDonnaComponent},
    {path:"abbUomo", component: AbbUomoComponent},
    {path:"accessori", component: AccessoriTelefonoComponent},
    {path:"ferramenta", component: FerramentaComponent},
    {path:"pulizia", component: PuliziaCasaComponent},
    {path:"homepage", component: HomepageComponent},
    {path:"carrello", component: CarrelloComponent},
    
  ]},

  {path:"homepage", component: HomepageComponent},
  {path:"registrazione", component: RegistrazioneComponent},
  {path:"login", component: LoginComponent},
  {path:"abbDonna", component: AbbDonnaComponent},
  {path:"abbUomo", component: AbbUomoComponent},
  {path:"carrello", component: CarrelloComponent, canActivate:[authGuard]},  //Gli utenti possono accedere al carrello solo se autenticati
  {path:"pagamento", component: PagamentoComponent},
   //INSERIRE UNA GUARD PER PERMETTERE DI ACCEDERE AL PAGAMENTO CON ALMENO UN PRODOTTO NEL CARRELLO
  

  {path:"admin", component: AdminComponent,canActivateChild:[authGuard], children:[
    {path:"utenti", component: UtentiComponent},
    {path:"merce", component: MerceComponent},
    {path:"fatture", component: FattureComponent},
    {path:"formFattura", component: FormFatturaComponent },
    {path:"formMerce", component: FormMerceComponent},
    {path:"listaMerce", component: ListaMerceComponent},
    {path:"listaFattura", component: ListaFatturaComponent},

  ]},

  {path:"404", component: NotFoundComponent},
  {path:"**", redirectTo: "/404"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
