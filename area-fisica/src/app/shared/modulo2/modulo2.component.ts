import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import { LicenciaService } from '../../services/licencia.service';

@Component({
  selector: 'app-menu2',
  templateUrl: './modulo2.component.html',
  styleUrls: ['./modulo2.component.css']
})
export class Modulo2Component implements OnInit {

    textoEditor1: string;
    textoEditor2: string;

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

    area: SelectItem[] = [];
    selectedArea: string;

    zona: SelectItem[] = [];
    selectedZona: string;

    documento: SelectItem[] = [];
    selectedDocumento: string;

    selectedTramite: string[] = [];
    selectedModalidad: string[] = [];
    selectedInteres: string[] = [];
    selectedObjeto: string[] = [];
    selectedModalidadSub: string[] = [];


    licencia:Licencia = {} as Licencia;

  constructor(private _licenciaService:LicenciaService) { }

  ngOnInit() {

  
    console.log(sessionStorage.area);



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

    this.area = [
        {label: 'Area', value: null},
        {label: 'Area1', value: 'Area1'}
    ];

    this.zona = [
        {label: 'Zona', value: null},
        {label: 'Zona1', value: 'Zona1'}
    ];

    this.documento = [
        {label: 'Documento', value: null},
        {label: 'Documento1', value: 'Documento1'}
    ];

    
  }

  guardar(){
    console.log(this.licencia)
    this._licenciaService.crearLicencia(this.licencia).subscribe(data=>{
        console.log("salio bien")
        // console.log(data);
    }, error =>{
        console.log("salio mal :(")
    }, () =>{
        console.log("hacer algo porque salio bien :v")
    });

  }
  
}

export interface Licencia{
    codigoSac;
    nombre;
}