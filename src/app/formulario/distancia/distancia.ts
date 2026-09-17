import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  standalone: false,
  styleUrl: './distancia.css',
  templateUrl: './distancia.html'
})
export class Distancia {

  x1: string = '';
  x2: string = '';
  y1: string = '';
  y2: string = '';

  resultado: number = 0;

  calcular(): void {

    this.resultado = Math.sqrt(
      Math.pow(parseInt(this.x2) - parseInt(this.x1), 2) +
      Math.pow(parseInt(this.y2) - parseInt(this.y1), 2)
    );

  }
}