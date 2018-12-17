import { RouterModule, Routes } from '@angular/router';
import { LicenciaPendienteComponent } from './shared/licencia-pendiente/licencia-pendiente.component';
import { AddLicenciaComponent } from './shared/add-licencia/add-licencia.component';
import { HistorialComponent } from './shared/historial/historial.component';
import { SettingsComponent } from './shared/settings/settings.component';
import { InfoComponent } from './shared/info/info.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { Antes2018Component } from './shared/antes-2018/antes-2018.component';
import { AddClienteComponent } from './shared/add-cliente/add-cliente.component';
import { ListaPredioComponent } from './shared/lista-predio/lista-predio.component';
import { PagesComponent } from './vista-user/pages.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { VerClienteComponent } from './shared/ver-cliente/ver-cliente.component';
import { VerLicenciaComponent } from './shared/ver-licencia/ver-licencia.component';
import { Component } from '@angular/core';
import { AdminComponent } from './shared/admin/admin.component';
import { AddUserComponent } from './shared/add-user/add-user.component';

const APP_ROUTES: Routes = [
  {
    path: 'pages', component: PagesComponent, children: [
       {
         path: 'licencia-pendiente', component: LicenciaPendienteComponent, children: [
           { path: 'vercliente', component: VerClienteComponent },
           { path: 'verlicencia', component: VerLicenciaComponent }
         ]
       },
      { path: 'add-licencia', component: AddLicenciaComponent },
      { path: 'historial', component: HistorialComponent },
      { path: 'antes-2018', component: Antes2018Component },
      { path: 'add-cliente', component: AddClienteComponent },
      { path: 'lista-predio', component: ListaPredioComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'user', component: AddUserComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'info', component: InfoComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'licencia-pendiente' }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });