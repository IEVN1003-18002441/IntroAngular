import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',

  /*selector: 'app-root',
  template:`
  <div>
  <h1> {{title}}</h1>
  <app-heroes-list> </app-heroes-list>
  </div>
  `
  ,
  
  standalone: false,
  styleUrl: './app.css'
  */

})




export class App {
  title: string = 'Juan Alejandro López Murillo'

  duplicarNumero(a: number) {
    return a * 2
  }

  sumar(a: number, b: number) {
    return a + b
  }

  pelicula = {
    titulo: 'Spider-Man',
    fechalanzamiento: new Date(),
    precio: 234
  }
}
