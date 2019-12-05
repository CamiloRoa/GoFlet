import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()


export class EnviarService {

  URL ="http://www.goflet.com.co/api_Goflet/services/"
  readonly API_GOFLET = 'http://www.goflet.com.co/api_Goflet/services/api-prueba.php';
  constructor(private http : HttpClient) { }

  /*enviar(item: Object) {
    return this.http.post(`${this.URL}cliente.php`, item);
  }*/
  mostrar(item: Object) {
    return this.http.post(`${this.URL}cliente.php`, item);

  } 
  Show(info: Object) {
    return this.http.post(`${this.URL}cliente.php`, info);

  } 

  Status(add: Object) {
    return this.http.post(`${this.URL}cliente.php`, add);

  } 

  /*Foto(add: Object) {
    return this.http.post(`${this.URL}cliente.php`, add);

  } */

  eliminar(add: Object){
    return this.http.post(`${this.URL}cliente.php`, add);
  }

  servicios(dato_servicio: Object) {
    return this.http.post(`${this.URL}cliente.php`, dato_servicio);

  } 

  getUsersGlofet() {
    return this.http.get(this.API_GOFLET);
  }
}
