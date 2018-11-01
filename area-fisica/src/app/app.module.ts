import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { APP_ROUTING } from './app.routes';
import { Modulo1Component } from './shared/modulo1/modulo1.component';
import { Modulo2Component } from './shared/modulo2/modulo2.component';
import { MenuizqComponent } from './shared/nav-slide-user-normal/menuizq.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HolitaService } from './services/holita.service';
import { TableModule } from 'primeng/table';
import { Modulo3Component } from './shared/modulo3/modulo3.component';
import { Modulo4Component } from './shared/modulo4/modulo4.component';
import { SettingsComponent } from './shared/settings/settings.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { InfoComponent } from './shared/info/info.component';
import { Modulo5Component } from './shared/modulo5/modulo5.component';
import { LicenciaService } from './services/licencia.service';
import {CardModule} from 'primeng/card';
import { FooterComponent } from './shared/footer/footer.component';
import {FieldsetModule} from 'primeng/fieldset';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EditorModule} from 'primeng/editor';
import { Modulo6Component } from './shared/modulo6/modulo6.component';
import { Modulo7Component } from './shared/modulo7/modulo7.component';
import {CheckboxModule} from 'primeng/checkbox';
import { PagesComponent } from './vista-user-normal/pages.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { VerClienteComponent } from './shared/ver-cliente/ver-cliente.component';
import { VerLicenciaComponent } from './shared/ver-licencia/ver-licencia.component';
import { VistaUserAdminComponent } from './vista-user-admin/vista-admin.component';
import { VistaUserBasicoComponent } from './vista-user-basico/vista-user.component';
import { VistaUserHaciendaComponent } from './vista-user-hacienda/vista-user-hacienda.component';
import { AuthService } from './config/auth.service';
import { TokenStorage } from './config/token.storage';
import { Interceptor } from './config/inteceptor';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Modulo1Component,
    Modulo2Component,
    MenuizqComponent,
    Modulo3Component,
    Modulo4Component,
    SettingsComponent,
    ProfileComponent,
    InfoComponent,
    Modulo5Component,
    FooterComponent,
    Modulo6Component,
    Modulo7Component,
    PagesComponent,
    LoginComponent,
    VerClienteComponent,
    VerLicenciaComponent,
    VistaUserAdminComponent,
    VistaUserBasicoComponent,
    VistaUserHaciendaComponent
  ],
  imports: [
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
    CheckboxModule
  ],
  providers: [HolitaService,LicenciaService,AuthGuard,AuthService, TokenStorage,
    {provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
