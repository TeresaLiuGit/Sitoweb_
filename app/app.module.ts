import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; //modulo per firebase
//RICORDARE CHE IL DATABASE DI FIREBASE DURA 30GG


//MATERIALI
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';


//COMPONENTI
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './componenti/home/home.component';
import { LoginComponent } from './componenti/login/login.component';
import { RegistrazioneComponent } from './componenti/registrazione/registrazione.component';
import { AbbDonnaComponent } from './componenti/abb-donna/abb-donna.component';
import { AbbUomoComponent } from './componenti/abb-uomo/abb-uomo.component';
import { NotFoundComponent } from './componenti/not-found/not-found.component';
import { AdminComponent } from './componenti/admin/admin.component';
import { HomepageComponent } from './componenti/homepage/homepage.component';
import { UtentiComponent } from './admin/utenti/utenti.component';
import { MerceComponent } from './admin/merce/merce.component';
import { CarrelloComponent } from './componenti/carrello/carrello.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormMerceComponent } from './admin/form-merce/form-merce.component';
import { ListaMerceComponent } from './admin/lista-merce/lista-merce.component';
import { PagamentoComponent } from './componenti/pagamento/pagamento.component';
import { AccessoriTelefonoComponent } from './componenti/accessori-telefono/accessori-telefono.component';
import { FerramentaComponent } from './componenti/ferramenta/ferramenta.component';
import { ArredamentoComponent } from './componenti/arredamento/arredamento.component';
import { PuliziaCasaComponent } from './componenti/pulizia-casa/pulizia-casa.component';
import { AdminFaceComponent } from './componenti/admin-face/admin-face.component';
import { ListaOrdineComponent } from './admin/lista-ordine/lista-ordine.component';
import { FormOrdineComponent } from './admin/form-ordine/form-ordine.component';
import { ReusableComponent } from './componenti/reusable/reusable.component';


@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    LoginComponent,
    RegistrazioneComponent,
    AbbDonnaComponent,
    AbbUomoComponent,
    NotFoundComponent,
    AdminComponent,
    HomepageComponent,
    UtentiComponent,
    MerceComponent,
    CarrelloComponent,
    FormMerceComponent,
    ListaMerceComponent,
    PagamentoComponent,
    AccessoriTelefonoComponent,
    FerramentaComponent,
    ArredamentoComponent,
    PuliziaCasaComponent,
    AdminFaceComponent,
    ListaOrdineComponent,
    FormOrdineComponent,
    ReusableComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatGridListModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatCheckboxModule,
    MatRadioModule,
    
  ],
  providers: [RegistrazioneComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
