import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Constant } from '../config/constant';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }


  crearCliente(cliente: any){

    return this.http.post(Constant.API_ENDPOINT + "/cliente/crear",cliente);
  }

  obtenerClientes(){

    return this.http.get(Constant.API_ENDPOINT + "/cliente/clientes");
  }

  obtenerClienteByNumeroDoc(tipoDocu, numeroDocu){
    return this.http.get(Constant.API_ENDPOINT+ "/cliente/cliente-by-docu/"+tipoDocu+"/"+numeroDocu);
  }
}
