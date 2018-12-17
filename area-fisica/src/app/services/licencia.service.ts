import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Constant } from '../config/constant';


@Injectable({
  providedIn: 'root'
})
export class LicenciaService {

  constructor(private http:HttpClient) { }


  crearLicencia(licencia: any){

    return this.http.post(Constant.API_ENDPOINT + "/licencia/crear",licencia);
  }

  obtenerLicencias(){

    return this.http.get(Constant.API_ENDPOINT + "/licencia/licencias");
  }
}
