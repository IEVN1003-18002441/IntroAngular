import { Component } from '@angular/core';

@Component({
  selector: 'app-opera-bas',
  standalone: false,
  styleUrl: './opera-bas.css',
  templateUrl: './opera-bas.html',
})
export class OperaBas {

  num1: string='';
  num2: string='';
  resultado: number=0;
  op: string='';
  sumar():void{
    this.resultado = parseInt(this.num1)+parseInt(this.num2);
}
 multiplicar():void{
}

 dividir():void{
    this.resultado = parseInt(this.num1)/parseInt(this.num2);
}

 restar():void{
    this.resultado = parseInt(this.num1)-parseInt(this.num2);
}

opciones():void{
  switch (this.op) {
    case "sumarR":
      
      break;

         case "dividirR":
      
      break
         case "multiplicarR":
          this.resultado = parseInt(this.num1)*parseInt(this.num2);

      break
         case "restarR":
      
      break
    default:
      break;
  }

  
}

}
