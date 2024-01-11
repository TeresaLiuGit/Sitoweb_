import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrazioneComponent } from './componenti/registrazione/registrazione.component';
import { LoginComponent } from './componenti/login/login.component';
import { AbbDonnaComponent } from './componenti/abb-donna/abb-donna.component';
import { AbbUomoComponent } from './componenti/abb-uomo/abb-uomo.component';
import { HomeComponent } from './componenti/home/home.component';
import { NotFoundComponent } from './componenti/not-found/not-found.component';
import { AdminComponent } from './componenti/admin/admin.component';

const routes: Routes = [
  {path:"", component: HomeComponent, children:[
    {path:"abbDonna", component: AbbDonnaComponent},
    {path:"abbUomo", component: AbbUomoComponent},

  ]
  
  },
  {path:"registrazione", component: RegistrazioneComponent},
  {path:"login", component: LoginComponent},
  {path:"abbDonna", component: AbbDonnaComponent},
  {path:"abbUomo", component: AbbUomoComponent},
  {path:"admin", component: AdminComponent},
  {path:"404", component: NotFoundComponent},
  {path:"**", redirectTo: "/404"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
