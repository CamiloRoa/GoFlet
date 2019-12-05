import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { EnviarService } from '../../../services/enviar.service'
import { Router } from '@angular/router'



@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  datos_servicios = null;

  servis = {
    nombre : null,

  };
  

  constructor( private servicio: EnviarService, private router: Router) { }

  ngOnInit() {
    this.servicios();
  }

  servicios() {
    let formData = new FormData();
    formData.append('controle', '6');

    this.servicio.servicios(formData).subscribe(
      result => {
        this.datos_servicios = result
        console.log(this.datos_servicios);
      //   this.datos.data.map((element, i) => {
      //     console.log(element)
      //     this.usuarios = element
      //   })
       }
    );
  }



}
