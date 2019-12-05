import { Component, OnInit, Input, HostListener, NgModule, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material';
import { AdminComponent } from '../admin.component';
import { EnviarService } from '../../../services/enviar.service'
import { Router } from '@angular/router'
import {MatTableDataSource} from '@angular/material/table';

import cors from 'cors'


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  
  
  usuarios = null;
 

  usuario = {
    id : null,
    nombre : null,
    apellidos: null,
    genero: null,
    celular: null,
  }
  item;



  signupForm: FormGroup

  constructor(private _builder: FormBuilder, private servicio: EnviarService, private router: Router  ) {
    this.item = {identi: null};
    this.signupForm = this._builder.group({
      
      numDoc: ['', Validators.required],
      /*identi: ['', Validators.required],
      tipo: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      //estado: ['', Validators.required],
      //user: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],*/
             
    })
}
ngOnInit(){ 
  this.mostrar();
}


  enviar(/*values*/){ 
    //console.log(values);
    /*let formData = new FormData();
    formData.append('controle', '1');
    formData.append('identi', this.item.identi);
    formData.append('tipo', this.item.tipo);
    /*formData.append('nombre', this.item.nombre);
    formData.append('apellido', this.item.apellido);
    formData.append('telefono', this.item.telefono);
    formData.append('direccion', this.item.direccion);
    formData.append('email', this.item.email);*/


/*

    this.servicio.enviar(formData)
    .subscribe(
      (data) => {
        if(data === true){
          console.log("Registro Guardado con Exito");
          console.log(data)
          //this.router.navigate(['listado']);
          //this.router.navigate(['listado'], { queryParams: { page: this.page + 1 } })
        }else{
          console.log("Error al registrar");
          console.warn(data);
        }
      }, 
      (error) => console.log(error)
    );*/
  }

  mostrar() {
    let formData = new FormData();
    formData.append('controle', '2');

    this.servicio.mostrar(formData).subscribe(
      result => {
        this.usuarios = result
        console.log(this.usuarios)
      //   this.datos.data.map((element, i) => {
      //     console.log(element)
      //     this.usuarios = element
      //   })
       }
    );
  }
  hayRegistros() {
    if(this.usuarios == null) {
      return false;
    } else {
      return true;
    }
  }
}

