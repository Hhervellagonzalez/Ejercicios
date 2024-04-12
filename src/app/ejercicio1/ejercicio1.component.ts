import { Component } from '@angular/core';
import { Temporada } from '../_modelo/temporadas';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})
export class Ejercicio1Component {
  ejercicio1(): void {
    // EJERCICIO 1
    // TODO: Modifique el código para agregar tipos a las declaraciones de variables.
    // El TypeScript resultante debería verse igual que el ejemplo original cuando haya terminado.
    let firstName: string;
    let lastName: string;
    let fullName: string;
    let age: number;
    let ukCitizen: boolean;
  
    firstName = 'Rebecca';
    lastName = 'Smith';
    age = 42;
    ukCitizen = false;
    fullName = firstName + " " + lastName;
  
    if (ukCitizen) {
      console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
    } else {
      console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
    }
  }
  ejercicio2() {
    /* EJERCICIO 2
    TODO: Puede utilizar tipos para garantizar los resultados de la operación.
    Ejecute el código tal cual y luego modifíquelo.
    que tenga variables fuertemente tipadas. Luego, solucione los errores que
    encuentre para que el resultado
    devuelto a a es 12. */
    let x : number;
    let y : number;
    let a : number;
    x = 5;
    y = 7;
    a = x + y;
    console.log(a);
    }  
    ejercicio3() {
      // * EJERCICIO 3
      // TODO: En el siguiente código, implemente un tipo de enumeración
      //llamado Temporada que representa
      // las constantes "Otoño", "Invierno", "Primavera" y "Verano". Luego,
      //actualice la función para que
      
      // puedes pasar la temporada haciendo referencia a un elemento en la
      //enumeración, por ejemplo
      // Season.Fall, en lugar de la cadena literal "Fall". */
      
     

      function whichMonths(season:Temporada):string {
       let monthsInSeason: string = "";
       switch (season) {
        case "Fall":
          monthsInSeason = "September to November";
          break;
        case "Winter":
           monthsInSeason = "December to February";
          break;
        case "Spring":
           monthsInSeason = "March to Mqay";
           break;
        case "Summer":
            monthsInSeason = "June to August";
         }
       return monthsInSeason;
       }
       console.log(whichMonths(Temporada.Fall));
      }
      ejercicio4() {
        /* EXERCISE 4
        TODO: Declare the array as the type to match the type of the items in the
        array. */
         let randomNumbers : number[] = [];
         let nextNumber : number;
        for (let i = 0; i < 10; i++) {
         nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
         randomNumbers.push(nextNumber);
         }
         console.log(randomNumbers);
        }
}
