import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Constant } from '../config/constant';

@Injectable({
  providedIn: 'root'
})
export class HolitaService {

  constructor(private http: HttpClient) { }

  getHolita():any{

    return this.http.get<any>(Constant.API_ENDPOINT + '/prueba/hola');
  }

}
