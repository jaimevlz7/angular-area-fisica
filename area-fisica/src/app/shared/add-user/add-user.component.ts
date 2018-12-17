import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  tipoRol: SelectItem[] = [];
    selectedRol: string;

  constructor() { }

  ngOnInit() {

    this.tipoRol = [
      {label: 'Rol del Usuario', value: null},
      {label: 'BASIC', value: 'BASIC'},
      {label: 'ADMIN', value: 'ADMIN'},
      {label: 'USER_JURI', value: 'USER_JURI'},    
      {label: 'USER_ARQU', value: 'USER_ARQU'},
      {label: 'USER_ESTR', value: 'USER_ESTR'}
  ];

  }

}
