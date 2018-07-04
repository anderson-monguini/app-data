import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
 
import { ConsultaComponent } from './app/gmud/consulta/consulta.component';
 
import {CadastroComponent} from './app/gmud/cadastro/cadastro.component';
 
import { HomeComponent } from './app/home/home.component';
 
const appRoutes: Routes = [
    { path: 'home',                    component: HomeComponent },
    { path: '',                        component: HomeComponent },
    { path: 'consulta-gmud',         component: ConsultaComponent },
    { path: 'cadastro-gmud',         component: CadastroComponent },
    { path: 'cadastro-gmud/:codigo', component: CadastroComponent }
 
];
 
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);