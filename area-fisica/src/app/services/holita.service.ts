import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HolitaService {

  constructor(private http: HttpClient) { }

  getHolita():any{

    return this.http.get<any>('http://localhost:8080/prueba/hola');
  }

}
