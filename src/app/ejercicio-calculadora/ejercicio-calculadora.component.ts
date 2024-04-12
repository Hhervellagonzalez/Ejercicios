import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio-calculadora.component.html',
  styleUrl: './ejercicio-calculadora.component.css'
})
export class EjercicioCalculadoraComponent {
  numero1 : number = 0;
  numero2 : number = 0;
  Resultado : number = 0;

  suma() : void {
    this.Resultado = this.numero1 + this.numero2;
    console.log(this.Resultado);
  }
  resta() : void {
    this.Resultado = this.numero1 - this.numero2;
    console.log(this.Resultado);
  }
  multiplicacion() : void {
    this.Resultado = this.numero1 * this.numero2;
    console.log(this.Resultado);
  }
  division() : void{
    this.Resultado = this.numero1 / this.numero2;
    console.log(this.Resultado);
  }

}
