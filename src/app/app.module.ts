import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatTableModule, MatPaginatorModule, MatInputModule, MatFormFieldControl } from '@angular/material';



//COMPONENTES
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { AdminComponent } from './component/admin/admin.component';
import { ClienteComponent } from './component/admin/cliente/cliente.component';
import { ConductorComponent } from './component/admin/conductor/conductor.component';
import { EnviarService } from './services/enviar.service';
import { InformacionComponent } from './component/admin/cliente/informacion/informacion.component';
import { ServiciosComponent } from './component/admin/servicios/servicios.component';
import { UsuariosComponent } from './component/admin/usuarios/usuarios.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    ClienteComponent,
    ConductorComponent,
    InformacionComponent,
    ServiciosComponent,
    UsuariosComponent
  ],
  exports: [
    AdminComponent,
    MatTableModule,
    MatPaginatorModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    HttpClientModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'admin',
        component: AdminComponent
      },
      {
        path:'',
        component: HomeComponent
      },

    ])
  ],
  providers: [EnviarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
