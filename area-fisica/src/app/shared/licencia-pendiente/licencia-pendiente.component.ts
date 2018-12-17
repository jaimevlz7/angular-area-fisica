import { Component, OnInit } from '@angular/core';
import { LicenciaService } from '../../services/licencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu1',
  templateUrl: './licencia-pendiente.component.html',
  styleUrls: ['./licencia-pendiente.component.css']
  
})
export class LicenciaPendienteComponent implements OnInit {

  licencia:Licencia = {} as Licencia;
  licencias:any;
  cols: any[];
  constructor(private _licenciaService: LicenciaService, private router: Router) { }

  ngOnInit() {
    this.obtenerLicencias();

    this.cols = [
      {field: 'codigoSac', header: 'Codigo SAC' },
      {field: 'nombre', header: 'Solicitante' },
      { header: 'Estado' },
      { header: 'Registro' },
      { header: 'Tipo de Solicitud' }
      
  ];
  }

  obtenerLicencias(){

    this._licenciaService.obtenerLicencias().subscribe(data=>{
      this.licencias = data;
      console.log(this.licencias);
    });
  }
  irObservacion(rowData){

    //this.router.navigate(['/verlicencia']);
    console.log(rowData);
  }

}

export interface Licencia{
  codigoSac;
  nombre;
}

