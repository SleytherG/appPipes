import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent {

  nombreLower: string = 'Sleyther';
  nombreUpper: string = 'SLEYTHER';
  nombreCompleto: string = 'sLeYtHeR gIuLiO';

  fecha: Date = new Date(); //Dia de Hoy

}
