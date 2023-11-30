// carrito-compras.component.ts

import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {
  productos: any[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.productos = this.carritoService.obtenerProductosCarrito();
  }

  eliminarDelCarrito(producto: any): void {
    const index = this.productos.indexOf(producto);
    if (index !== -1) {
      this.productos.splice(index, 1);
    }
  }

  aumentarCantidad(producto: any): void {
    if (producto && producto.cantidad) {
      producto.cantidad++;
    }
  }
  
  disminuirCantidad(producto: any): void {
    if (producto && producto.cantidad && producto.cantidad > 1) {
      producto.cantidad--;
    }
  }

  calcularTotal(): number {
    return this.productos.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
  }
}
