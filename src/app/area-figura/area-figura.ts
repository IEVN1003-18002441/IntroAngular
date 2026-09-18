import { Component } from '@angular/core';

@Component({
  selector: 'app-area-figura',
  standalone: false,
  styleUrl: './area-figura.css',
  templateUrl: './area-figura.html',
})
export class AreaFigura {

  num1: string = '';
  num2: string = '';
  resultado: number = 0;
  op: string = '';

  opciones(): void {
    switch (this.op) {
      case "cuadrado":
        this.resultado = parseInt(this.num1) * parseInt(this.num2);

        break;

      case "rectangulo":

        this.resultado = parseInt(this.num1) * parseInt(this.num2);

        break
      case "circulo":
        this.resultado = Math.pow(parseInt(this.num1), 2) * Math.PI;

        break
      case "pentagono":
        this.resultado = (parseInt(this.num1) * parseInt(this.num2)) / 2;

        break
      case "triangulo":

        this.resultado = (parseInt(this.num1) * parseInt(this.num2)) / 2;

        break
      default:
        break;
    }


  }

}
