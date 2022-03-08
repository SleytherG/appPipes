import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from "primeng/api";
import {interval, tap} from "rxjs";

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.scss']
})
export class NoComunesComponent implements OnInit {

  /**
   * i18nSelect
   */
  nombre: string = 'Fernando';
  genero: string = 'masculino';
  invitacionObj = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  /**
   * i18nPlural
   */
  clientes: string[] = ['Maria', 'Juan', 'Pedro', 'Alvaro', 'Mario', 'Edgar'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    '=3': 'tenemos 3 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  constructor(
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  cambiarNombre() {
    if(this.nombre === 'Fernando' && this.genero === 'masculino') {
      this.nombre = 'Susana';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Fernando';
      this.genero = 'masculino';
    }
  }
  quitarCliente() {
    this.clientes.splice(0, 1);
  }
  addCliente() {
    this.clientes.push(' ');
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Sleyther',
    edad: 35,
    direccion: 'Ottawa, Canadá'
  }
  // JSON Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];

  // Async Pipe
  miObservable = interval(1000); // 0,1,2,3,4,5,6,7,8,....

  contador = 0
  valorPromesa = new Promise((resolve,reject) =>{
    setTimeout(() => {
      resolve(  this.contador += 1);
    }, 1000);
  })

}
