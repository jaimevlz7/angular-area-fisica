import {Injectable} from '@angular/core';
// import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  baseUrl: 'http://localhost:8080/email2sms/';

  constructor(private http: HttpClient) {
  }

  attemptAuth(ussername: string, password: string) {
    const credentials = {username: ussername, password: password};
    return this.http.post('http://localhost:8080/token/generate-token', credentials);
  }

}
