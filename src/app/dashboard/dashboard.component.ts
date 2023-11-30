// dashboard.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  productos = [
    { id: 1, nombre: 'Producto 1', precio: 19.99, imagen: 'producto1.jpeg', cantidad: 1 },
    { id: 2, nombre: 'Producto 2', precio: 29.99, imagen: 'producto2.jpeg', cantidad: 1 },
    // Agrega más productos según sea necesario
  ];

  agregarProducto(): void {
    // Lógica para agregar un nuevo producto
  }

  eliminarProducto(producto: any): void {
    const index = this.productos.indexOf(producto);
    if (index !== -1) {
      this.productos.splice(index, 1);
    }
  }
}
