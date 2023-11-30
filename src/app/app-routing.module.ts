// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { MenuComponent } from './menu/menu.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'crear-cuenta', component: CrearCuentaComponent },
  { path: 'carrito-compras', component: CarritoComprasComponent },
  { path: 'dashboard', component: DashboardComponent }, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
