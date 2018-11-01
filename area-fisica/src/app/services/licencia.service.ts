import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LicenciaService {

  constructor(private http:HttpClient) { }


  crearLicencia(licencia: any){

    return this.http.post("http://localhost:8080/licencia/crear",licencia);
  }

  obtenerLicencias(){

    return this.http.get("http://localhost:8080/licencia/licencias");
  }
}
