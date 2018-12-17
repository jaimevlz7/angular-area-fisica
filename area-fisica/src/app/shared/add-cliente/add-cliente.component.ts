import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-modulo6',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {

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

    cliente:Cliente = {} as Cliente;

    clientes:any;
    cols: any[];

  constructor(private _clienteService:ClienteService) { }

  ngOnInit() {
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

this.obtenerClientes();

 this.cols = [
   {field: 'nombre', header: 'Nombre' },
   {field: 'apellido', header: 'Apellido' },
   {field: 'correo', header: 'Correo' },
   {field: 'numeroDocumento', header: 'Documento' }
 ];
  }

  obtenerClientes(){

    this._clienteService.obtenerClientes().subscribe(data=>{
     this.clientes = data;
      console.log(data);
    });
  }


  guardar(){
    console.log(this.cliente)
     this._clienteService.crearCliente(this.cliente).subscribe(data=>{
      
         console.log(data);
         console.log("salio bien")
         this.obtenerClientes();
         // console.log(data);
    }, error =>{
         console.log("salio mal :(")
     }, () =>{
         console.log("hacer algo porque salio bien :v")
     });
  
  }



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
