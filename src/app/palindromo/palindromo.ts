import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  styleUrl: './palindromo.css',
  templateUrl: './palindromo.html',
})


export class Palindromo {

  frase: string = '';
  numVocales: number = 0;
  fraseTemporal: string = '';
  numVocalesIn: number[] = [0, 0, 0, 0, 0]
  numConsonante: number = 0;
  vocalesAr: string[] = ["a", "e", "i", "o", "u"]
  vocalesAr2: string[] = ["a", "e", "i", "o", "u", " "]
  esPalindromo: boolean = false;
  esCons: boolean = true;
  palindromo(): void {

    let longitud = this.frase.length;

    for (let i = 0; i < longitud / 2; i++) {
      if (this.frase[i] !== this.frase[longitud - 1 - i]) {
        this.esPalindromo = false;
      }
    }

    this.esPalindromo = true;
  }


  vocales(): void {
    this.fraseTemporal = this.frase;
    for (let index = 0; index < this.frase.length; index++) {
      const vocal = this.fraseTemporal[index];;
      for (let index2 = 0; index2 < this.vocalesAr.length; index2++) {

        if (vocal == this.vocalesAr[index2]) {

          this.numVocalesIn[index2] += 1;
        }

      }

    }
    this.numVocales = this.numVocalesIn[0] + this.numVocalesIn[1]
      + this.numVocalesIn[2] + this.numVocalesIn[3]
      + this.numVocalesIn[4]
  }


todo():void{
  
    this.fraseTemporal = this.frase;
    this.numConsonante = 0;

    for (let index = 0; index < this.frase.length; index++) {

      const vocal = this.fraseTemporal[index];
      this.esCons = true;

      for (let index2 = 0; index2 < this.vocalesAr2.length; index2++) {

        if (vocal == this.vocalesAr2[index2]) {
          this.esCons = false;
        }

      }

      if (this.esCons) {
        this.numConsonante += 1;
      }
    }
      this.fraseTemporal = this.frase;
    for (let index = 0; index < this.frase.length; index++) {
      const vocal = this.fraseTemporal[index];;
      for (let index2 = 0; index2 < this.vocalesAr.length; index2++) {

        if (vocal == this.vocalesAr[index2]) {

          this.numVocalesIn[index2] += 1;
        }

      }

    }
    this.numVocales = this.numVocalesIn[0] + this.numVocalesIn[1]
      + this.numVocalesIn[2] + this.numVocalesIn[3]
      + this.numVocalesIn[4]
 this.fraseTemporal = this.frase;
    this.numConsonante = 0;

    for (let index = 0; index < this.frase.length; index++) {

      const vocal = this.fraseTemporal[index];
      this.esCons = true;

      for (let index2 = 0; index2 < this.vocalesAr2.length; index2++) {

        if (vocal == this.vocalesAr2[index2]) {
          this.esCons = false;
        }

      }

      if (this.esCons) {
        this.numConsonante += 1;
      }
    }

}
  consonates(): void {

    this.fraseTemporal = this.frase;
    this.numConsonante = 0;

    for (let index = 0; index < this.frase.length; index++) {

      const vocal = this.fraseTemporal[index];
      this.esCons = true;

      for (let index2 = 0; index2 < this.vocalesAr2.length; index2++) {

        if (vocal == this.vocalesAr2[index2]) {
          this.esCons = false;
        }

      }

      if (this.esCons) {
        this.numConsonante += 1;
      }
    }
  }



}
