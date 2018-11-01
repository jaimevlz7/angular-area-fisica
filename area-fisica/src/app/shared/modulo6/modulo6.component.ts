import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';

@Component({
  selector: 'app-modulo6',
  templateUrl: './modulo6.component.html',
  styleUrls: ['./modulo6.component.css']
})
export class Modulo6Component implements OnInit {

  tipoID: SelectItem[] = [];
  selectedTipoID: string;

  pais: SelectItem[] = [];
    selectedPais: string;

    departamento: SelectItem[] = [];
    selectedSDepartamento: string;

    municipio: SelectItem[] = [];
    selectedMunicipio: string;

    barrio: SelectItem[] = [];
    selectedBarrio: string;

  constructor() { }

  ngOnInit() {
    this.tipoID = [
      {label: 'Tipo de Documento', value: null},
      {label: 'Cedula de Ciudadania', value: 'Cedula de Ciudadania'},
      {label: 'NIT', value: 'NIT'},
      {label: 'RUT', value: 'RUT'}
  ];

  this.pais = [
    {label: 'Pais', value: null},
    {label: 'Colombia', value: 'Colombia'}
];

this.departamento = [
    {label: 'Departamento', value: null},
    {label: 'Valle del Cauca', value: 'Valle del Cauca'}
];

this.municipio = [
    {label: 'Municipio', value: null},
    {label: 'Yumbo', value: 'Yumbo'}
];

this.barrio = [
    {label: 'Barrio', value: null},
    {label: 'Belalcazar', value: 'Belalcazar'}
];



  }

}
