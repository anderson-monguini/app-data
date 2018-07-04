import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConsultaComponent } from './gmud/consulta/consulta.component';
import { CadastroComponent } from './gmud/cadastro/cadastro.component';

import { ConfigService } from './services/config.service';
import { GmudService } from './services/gmud.service';
import { routing } from '../app.routes';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ConsultaComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [ConfigService, GmudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
