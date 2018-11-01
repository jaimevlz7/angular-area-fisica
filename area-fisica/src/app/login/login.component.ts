import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { TokenStorage } from '../config/token.storage';
import { AuthService } from '../config/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password ="";
  constructor(private router: Router, private token: TokenStorage, private authService: AuthService) { }

  ngOnInit() {
  }

  login(){

    console.log(this.username);
    console.log(this.password);
    this.authService.attemptAuth(this.username, this.password).subscribe(
      (data:any) => {
        console.log('llego a login y si está bien xd');
        this.token.saveToken(data.token);
        console.log(this.token.getToken());
        this.router.navigate(['/pages']);
      }, error=>{
        console.log(error);
      }
    );
  }
   
    
  }

