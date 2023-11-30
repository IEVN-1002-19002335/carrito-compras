// carrito.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  productosCarrito: any[] = [];

  agregarAlCarrito(producto: any): void {
    this.productosCarrito.push(producto);
  }

  obtenerProductosCarrito(): any[] {
    return this.productosCarrito;
  }
}
