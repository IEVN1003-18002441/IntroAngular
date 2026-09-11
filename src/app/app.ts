import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
title:string = 'IEVN1003'

duplicarNumero(a:number){
return a *2
}

sumar(a:number,b:number){
  return a+b
}

pelicula={
  titulo: 'Spider-Man',
  fechalanzamiento: new Date(),
  precio: 234
}
}
