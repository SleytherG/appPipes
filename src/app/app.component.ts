import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  nombre: string = 'fErNaNdO hErReRa';
  valor: number = 1000;

  obj = {
    nombre: 'Fernando'
  }

  mostrarNombre() {
    console.log( this.nombre );
    console.log( this.valor );
    console.log( this.obj );
  }

}
