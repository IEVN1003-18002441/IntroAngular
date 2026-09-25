import { Component } from '@angular/core';

@Component({
  selector: 'app-triangulos',
  standalone: false,
  styleUrl: './triangulos.css',
  templateUrl: './triangulos.html',
})
export class Triangulos {
 x1: number = 0;
y1: number = 0;
mensaje: string ="";
x2: number = 0;
y2: number = 0;

x3: number = 0;
y3: number = 0;

analizado: boolean = false;
esTriangulo: boolean = false;
area: number = 0;


calcular(): void {
  this.analizado = true;

  this.area = Math.abs(
    this.x1 * (this.y2 - this.y3) +
    this.x2 * (this.y3 - this.y1) +
    this.x3 * (this.y1 - this.y2)
  ) / 2;

  if (this.area > 0) {
    this.esTriangulo = true;
  } else {
    this.esTriangulo = false;
    this.mensaje = "No es un triangulo"
  }
}}