import {Injectable} from '@angular/core';
// import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constant } from '../config/constant';

@Injectable()
export class AuthService {

  baseUrl = Constant.API_ENDPOINT +'/email2sms/';

  constructor(private http: HttpClient) {
  }

  attemptAuth(ussername: string, password: string) {
    const credentials = {username: ussername, password: password};
    return this.http.post(Constant.API_ENDPOINT +'/token/generate-token', credentials);
  }

}
