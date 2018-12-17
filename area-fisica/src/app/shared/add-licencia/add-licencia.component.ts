import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import { LicenciaService } from '../../services/licencia.service';
import { ClienteService } from '../../services/cliente.service';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-menu2',
  templateUrl: './add-licencia.component.html',
  styleUrls: ['./add-licencia.component.css']
})
export class AddLicenciaComponent implements OnInit {

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

    clienteform: FormGroup;


    licencia:Licencia = {} as Licencia;

    cliente:Cliente = {} as Cliente;

  constructor(private _licenciaService:LicenciaService, private _clienteService:ClienteService, private fb: FormBuilder) { }

  ngOnInit() {

    this.clienteform = this.fb.group({
        // 'codigoSAC': new FormControl('', Validators.required),
        // 'nombreLicencia': new FormControl('', Validators.required),
        // 'tipoDocumento': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
        // 'numeroCedula': new FormControl(''),
        'nombreCliente': new FormControl('', Validators.required)
        // 'telefono': new FormControl('', Validators.required),
        // 'matricula': new FormControl('', Validators.required)
    });

  
    console.log(sessionStorage.area);



    this.tipoID = [
        {label: 'Tipo de Documento', value: null},
        {label: 'CEDULA', value: 'CEDULA'},
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

  completarClientePorNumeroDoc(){

    //this.clienteform.get("nombreCliente").setValue("dada");
       if(this.cliente.tipoDocumento!=null && this.cliente.numeroDocumento!=null){

        
          this._clienteService.obtenerClienteByNumeroDoc(this.cliente.tipoDocumento,this.cliente.numeroDocumento).subscribe((data:any)=>{
              console.log(data);

              this.clienteform.get("nombreCliente").setValue(data.nombre + data.apellido);

              this.cliente = data;
              console.log(this.cliente);

          });
       }
  }

  
}

export interface Licencia{
    codigoSac;
    nombre;
    observacionParaque;
    observacionAdicional;
    tipoTramite;
    modalidadLicencia;
    modalidadConstruccion;
    objetoTramite;
    interesSocial;
    //matriculaInmobiliaria;
}

export interface Cliente{
    clienteId;
    nombre;
    apellido;
    correo;
    tipoDocumento;
    numeroDocumento;
    observacion;
    telefono;
    celular;
    direccion;
    municipio;
    barrio;
  }
  