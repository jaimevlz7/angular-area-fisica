import { Component, OnInit } from '@angular/core';
import { TokenStorage } from '../../config/token.storage';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-menuizq',
  templateUrl: './nav-slide.component.html',
  styleUrls: ['./nav-slide.component.css']
})
export class NavSlide implements OnInit {
  tabla: any[];
  constructor(private token: TokenStorage) {


   }

  ngOnInit() {

  
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.token.getToken());
    console.log(decodedToken.scopes)

    switch (decodedToken.scopes) {
      case 'ROLE_ADMIN':
      this.tabla = [
        { modulo: 'licencia-pendiente', icon: 'list', nombre: 'Licencias Pendientes'},
        { modulo: 'add-licencia', icon: 'add', nombre: 'Agregar Licencia'},
        { modulo: 'historial', icon: 'library_books', nombre: 'Historial Licencias' },
        { modulo: 'antes-2018', icon: 'history', nombre: 'Antes de 2018' },
        { modulo: 'add-cliente', icon: 'face', nombre: 'Agregar Cliente' },
        { modulo: 'lista-predio', icon: 'home', nombre: 'Lista de Predios' },
        { modulo: 'admin', icon: 'verified_user', nombre: 'Administrar Licencias' },
        { modulo: 'user', icon: 'add', nombre: 'Agregar Usuarios' }
      
      ];
        break;
    
        case 'ROLE_USER_JURI':

        this.tabla = [
          { modulo: 'modulo1', icon: 'list', nombre: 'Licencias Pendientes'},
          { modulo: 'modulo2', icon: 'add', nombre: 'Agregar Licencia'},
          { modulo: 'modulo3', icon: 'attach_money', nombre: 'Facturar Licencia'},
          { modulo: 'modulo4', icon: 'library_books', nombre: 'Historial Licencias' },
          { modulo: 'modulo6', icon: 'face', nombre: 'Agregar Cliente' }

        
        ];
        break;

        case 'ROLE_USER_ARQU':

        this.tabla = [
          { modulo: 'modulo1', icon: 'list', nombre: 'Licencias Pendientes'},
          { modulo: 'modulo2', icon: 'add', nombre: 'Agregar Licencia'},
          { modulo: 'modulo3', icon: 'attach_money', nombre: 'Facturar Licencia'},
          { modulo: 'modulo4', icon: 'library_books', nombre: 'Historial Licencias' },
          { modulo: 'modulo6', icon: 'face', nombre: 'Agregar Cliente' }

        
        ];
        break;

        case 'ROLE_USER_ESTR':

        this.tabla = [
          { modulo: 'modulo1', icon: 'list', nombre: 'Licencias Pendientes'},
          { modulo: 'modulo2', icon: 'add', nombre: 'Agregar Licencia'},
          { modulo: 'modulo3', icon: 'attach_money', nombre: 'Facturar Licencia'},
          { modulo: 'modulo4', icon: 'library_books', nombre: 'Historial Licencias' },
          { modulo: 'modulo6', icon: 'face', nombre: 'Agregar Cliente' }

        
        ];
        break;


        case 'ROLE_BASIC':
        this.tabla = [
          { modulo: 'modulo1', icon: 'list', nombre: 'Licencias Pendientes'},
          { modulo: 'modulo2', icon: 'add', nombre: 'Agregar Licencia'},
   
        ];
        break;

        case 'ROLE_PRUEBA':
        this.tabla = [
          { modulo: 'modulo1', icon: 'list', nombre: 'Licencias Pendientes'},
          { modulo: 'modulo2', icon: 'add', nombre: 'Agregar Licencia'},
   
        ];
        break;

        default:
        break;


    }

  }

}
