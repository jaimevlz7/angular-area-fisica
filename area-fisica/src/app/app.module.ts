
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { APP_ROUTING } from './app.routes';
import { LicenciaPendienteComponent } from './shared/licencia-pendiente/licencia-pendiente.component';
import { AddLicenciaComponent } from './shared/add-licencia/add-licencia.component';
import { NavSlide } from './shared/nav-slide/nav-slide.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HolitaService } from './services/holita.service';
import { TableModule } from 'primeng/table';
import { HistorialComponent } from './shared/historial/historial.component';
import { SettingsComponent } from './shared/settings/settings.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { InfoComponent } from './shared/info/info.component';
import { Antes2018Component } from './shared/antes-2018/antes-2018.component';
import { LicenciaService } from './services/licencia.service';
import { ClienteService } from './services/cliente.service';
import {CardModule} from 'primeng/card';
import { FooterComponent } from './shared/footer/footer.component';
import {FieldsetModule} from 'primeng/fieldset';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EditorModule} from 'primeng/editor';
import { AddClienteComponent } from './shared/add-cliente/add-cliente.component';
import { ListaPredioComponent } from './shared/lista-predio/lista-predio.component';
import {CheckboxModule} from 'primeng/checkbox';
import { PagesComponent } from './vista-user/pages.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { VerClienteComponent } from './shared/ver-cliente/ver-cliente.component';
import { VerLicenciaComponent } from './shared/ver-licencia/ver-licencia.component';
import { AuthService } from './config/auth.service';
import { TokenStorage } from './config/token.storage';
import { Interceptor } from './config/inteceptor';
import { AdminComponent } from './shared/admin/admin.component';
import {ListboxModule} from 'primeng/listbox';
import { AddUserComponent } from './shared/add-user/add-user.component';
import {RadioButtonModule} from 'primeng/radiobutton';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LicenciaPendienteComponent,
    AddLicenciaComponent,
    NavSlide,
    HistorialComponent,
    SettingsComponent,
    ProfileComponent,
    InfoComponent,
    Antes2018Component,
    FooterComponent,
    AddClienteComponent,
    ListaPredioComponent,
    PagesComponent,
    LoginComponent,
    VerClienteComponent,
    VerLicenciaComponent,
    AdminComponent,
    AddUserComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    APP_ROUTING,
    CardModule,
    FieldsetModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    BrowserAnimationsModule,
    EditorModule,
    CheckboxModule,
    ListboxModule,
    RadioButtonModule
  ],
  providers: [HolitaService,LicenciaService,ClienteService,AuthGuard,AuthService, TokenStorage,
    {provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
