import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  
/*template:`
    <div>Hola dentro del template</div>
    <h1>Hola</h1>
    <hr>
  `,
*/
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basesAngular';
  duplicarNumero(x:number):number{
    return x*2;
  }
  alumno ={
    matricula:1234,
    nombre:'Juan',
    fechaInscrito: new Date(),
    pago:1700
  };
}
