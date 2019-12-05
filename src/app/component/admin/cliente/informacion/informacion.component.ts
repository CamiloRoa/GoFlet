import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EnviarService } from '../../../../services/enviar.service';
import { MatInputModule } from '@angular/material';


@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.scss']
})
export class InformacionComponent implements OnInit {
  item;
  info;
  add;

  






  signupForm: FormGroup

  constructor(private _route: ActivatedRoute, private _builder: FormBuilder, private servicio: EnviarService, private router: Router) {
    //console.log(this._route.snapshot.paramMap.get('id'))
    this.add = { status: null };


    this.signupForm = this._builder.group({

      status: ['', Validators.required],
      /*identi: ['', Validators.required],*/

    })

  }

  ngOnInit() {


    let id = +this._route.snapshot.paramMap.get('id');
    this.item = `${id}`;
    this.Show();
  }

  Show(/*values*/) {
    //console.log(values);
    let formData = new FormData();
    formData.append('controle', '3');
    formData.append('item', this.item);
    this.servicio.Show(formData).subscribe(
      result => {
        this.info = result;
        console.log(this.info);
        //console.log(result);

        //   this.datos.data.map((element, i) => {
        //     console.log(element)
        //     this.usuarios = element
        //   })
      }
    );
  }

  Status() {
    let formData = new FormData();
    formData.append('controle', '4');
    formData.append('status', this.add.status);
    formData.append('item', this.item);
    this.servicio.Status(formData).subscribe(
      result => {
        //console.log(this.add.status);
      }
    );
  }

  /*Foto() {
    let formData = new FormData();
    formData.append('controle', '5');
    formData.append('id_f', this.add.id_f);
    this.servicio.Foto(formData).subscribe(
      result => {
        console.log(this.add.id_f)
      }
    )


  }*/

  eliminar(id) {
    let formData = new FormData();
    formData.append('controle', '5');
    formData.append('id', id);

    this.servicio.eliminar(formData).subscribe((data) => {
      console.log(data)
      
     }, (error) => {
      console.log(error)
    })

  }

  user() {
    if(this.add.status == 1) {
      return false;
    } else {
      return true;
    }
  }


}
