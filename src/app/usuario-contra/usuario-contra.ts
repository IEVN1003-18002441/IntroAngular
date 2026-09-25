import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario-contra',
  standalone: false,
  styleUrl: './usuario-contra.css',
  templateUrl: './usuario-contra.html',
})
export class UsuarioContra {

pass : string ='';
user: string ='';
userdef: string = "alejandro";
passdef: string = "050200L"
validacion: boolean = false;
mensaje: string = "";
  login() :void{

if(this.user == this.userdef && this.pass == this.passdef ){

  this.validacion = true
  this.mensaje = "Inicio de sesion correcto"
}
if (this.user == this.userdef && this.pass != this.passdef )
{
this.validacion = false
this.mensaje = "contraseña incorrecta"
  }

  if (this.user != this.userdef && this.pass == this.passdef )
{
this.validacion = false
this.mensaje = "Usuario incorrecto"
  }

  if (this.user != this.userdef && this.pass != this.passdef )
{
this.validacion = false
this.mensaje = "Datos incorrectos"
  }
}
}
