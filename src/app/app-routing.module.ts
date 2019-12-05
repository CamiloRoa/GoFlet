import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component'
import { AdminComponent } from './component/admin/admin.component';
import { ClienteComponent } from './component/admin/cliente/cliente.component';
import { ServiciosComponent } from './component/admin/servicios/servicios.component'
import { UsuariosComponent } from './component/admin/usuarios/usuarios.component'
import { ConductorComponent } from './component/admin/conductor/conductor.component';
import { InformacionComponent } from './component/admin/cliente/informacion/informacion.component'

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent },
  {path: 'admin', component: AdminComponent },
  {path: 'admin/cliente', component: ClienteComponent},
  {path: 'admin/servicios', component: ServiciosComponent},
  {path: 'admin/conductor', component: ConductorComponent},
  {path: 'admin/usuarios', component: UsuariosComponent},
  {path: 'admin/cliente/informacion/:id', component: InformacionComponent},

  //{path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
