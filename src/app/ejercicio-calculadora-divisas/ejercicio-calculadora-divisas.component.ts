import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio-calculadora-divisas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio-calculadora-divisas.component.html',
  styleUrl: './ejercicio-calculadora-divisas.component.css'
})
export class EjercicioCalculadoraDivisasComponent {
  cantidad: number = 0;
  monedaOrigen: string = 'EUR';
  monedaDestino: string = 'USD';
  resultado: number = 0;
  tasas: any = {
    'EUR': { 'USD': 1.07, 'GBP': 0.85, 'EUR': 1 },
    'USD': { 'EUR': 0.93, 'GBP': 0.79, 'USD': 1 },
    'GBP': { 'EUR': 1.18, 'USD': 1.26, 'GBP': 1 }
  };

  convertirDivisas(): void {
    this.resultado = this.cantidad * this.tasas[this.monedaOrigen][this.monedaDestino];
  }
}
