import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { EjercicioCalculadoraComponent } from './ejercicio-calculadora/ejercicio-calculadora.component';
import { EjercicioCalculadoraDivisasComponent } from './ejercicio-calculadora-divisas/ejercicio-calculadora-divisas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Ejercicio1Component,EjercicioCalculadoraComponent,EjercicioCalculadoraDivisasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejercicios';
}
