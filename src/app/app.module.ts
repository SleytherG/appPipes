import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';

// Modulo Personalizado
import {AppRouterModule} from "./app-router.module";
import {SharedModule} from "./shared/shared.module";
import {VentasModule} from "./ventas/ventas.module";

//Cambiar el locale de la app
import localeEs from '@angular/common/locales/es-PE';
import localeFr from '@angular/common/locales/fr';
import localeCr from '@angular/common/locales/es-CR';
import { registerLocaleData } from '@angular/common'


registerLocaleData( localeEs );
registerLocaleData( localeFr );
registerLocaleData( localeCr );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-PE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
