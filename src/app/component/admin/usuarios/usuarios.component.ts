import { Component, OnInit } from '@angular/core';
import { EnviarService } from '../../../services/enviar.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  data: any = [];

 


  constructor(private servicio: EnviarService, private router: Router) { }

  ngOnInit() {
    this.getUsersGlofet();
  }

  getUsersGlofet() {
    this.servicio.getUsersGlofet()
    .subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }



}
