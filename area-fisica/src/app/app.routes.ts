import { RouterModule, Routes } from '@angular/router';
import { Modulo1Component } from './shared/modulo1/modulo1.component';
import { Modulo2Component } from './shared/modulo2/modulo2.component';
import { Modulo3Component } from './shared/modulo3/modulo3.component';
import { Modulo4Component } from './shared/modulo4/modulo4.component';
import { SettingsComponent } from './shared/settings/settings.component';
import { InfoComponent } from './shared/info/info.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { Modulo5Component } from './shared/modulo5/modulo5.component';
import { Modulo6Component } from './shared/modulo6/modulo6.component';
import { Modulo7Component } from './shared/modulo7/modulo7.component';
import { PagesComponent } from './vista-user-normal/pages.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { VerClienteComponent } from './shared/ver-cliente/ver-cliente.component';
import { VerLicenciaComponent } from './shared/ver-licencia/ver-licencia.component';
import { Component } from '@angular/core';
import { VistaUserAdminComponent } from './vista-user-admin/vista-admin.component';
import { VistaUserHaciendaComponent } from './vista-user-hacienda/vista-user-hacienda.component';
import { VistaUserBasicoComponent } from './vista-user-basico/vista-user.component';

const APP_ROUTES: Routes = [
  {
    path: 'pages', component: PagesComponent, children: [
       {
         path: 'modulo1', component: Modulo1Component, children: [
           { path: 'vercliente', component: VerClienteComponent },
           { path: 'verlicencia', component: VerLicenciaComponent }
         ]
       },
      { path: 'modulo2', component: Modulo2Component },
      { path: 'modulo3', component: Modulo3Component },
      { path: 'modulo4', component: Modulo4Component },
      { path: 'modulo5', component: Modulo5Component },
      { path: 'modulo6', component: Modulo6Component },
      { path: 'modulo7', component: Modulo7Component },
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'info', component: InfoComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'modulo1' }
    ]
  },
  { path: 'vista-user-admin', component: VistaUserAdminComponent},
  { path: 'vista-user-hacienda', component: VistaUserHaciendaComponent},
  { path: 'vista-user-basico', component: VistaUserBasicoComponent},
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });