// home.component.ts

import { Component } from '@angular/core';
import { CarritoService } from '../carrito.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productos = [
    { id: 1, nombre: 'Producto 1', precio: 19.99, imagen: 'producto1.jpeg', cantidad: 1 },
    { id: 2, nombre: 'Producto 2', precio: 29.99, imagen: 'producto2.jpeg', cantidad: 1 },
    // Agrega más productos según sea necesario
  ];

  constructor(private carritoService: CarritoService) {}

  agregarAlCarrito(producto: any): void {
    this.carritoService.agregarAlCarrito(producto);
  }
}
