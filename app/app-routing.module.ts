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
import { PagamentoComponent } from './componenti/pagamento/pagamento.component';
import { FormMerceComponent } from './admin/form-merce/form-merce.component';
import { FormFatturaComponent } from './admin/form-fattura/form-fattura.component';
import { ListaMerceComponent } from './admin/lista-merce/lista-merce.component';
import { ListaFatturaComponent } from './admin/lista-fattura/lista-fattura.component';

const routes: Routes = [
  {path:"", component: HomeComponent, children:[
    {path:"abbDonna", component: AbbDonnaComponent},
    {path:"abbUomo", component: AbbUomoComponent},
    {path:"homepage", component: HomepageComponent},
  ]},

  {path:"homepage", component: HomepageComponent},
  {path:"registrazione", component: RegistrazioneComponent},
  {path:"login", component: LoginComponent},
  {path:"abbDonna", component: AbbDonnaComponent},
  {path:"abbUomo", component: AbbUomoComponent},


  {path:"carrello", component: CarrelloComponent, canActivate:[authGuard], children:[
    {path:"pagamento", component: PagamentoComponent},
  ]},
  //Gli utenti possono accedere al carrello e al pagamento solo se autenticati

  {path:"admin", component: AdminComponent, children:[
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
