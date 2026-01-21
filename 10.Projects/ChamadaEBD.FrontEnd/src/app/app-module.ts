import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

// PrimeNG
import { providePrimeNG } from 'primeng/config';
import Aura from "@primeuix/themes/aura";
import { FilterMatchMode } from 'primeng/api';

// Modules
@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    providePrimeNG({
      theme: {
        preset: {
          preset: Aura,
          options: {
            darkModeSelector: false
          }
        }
      },
      ripple: true,
      filterMatchModeOptions: {
        text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.ENDS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.EQUALS],
        numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO],
        date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_AFTER, FilterMatchMode.DATE_BEFORE]
      },
      translation: {
        accept: "Sim",
        reject: "Não",
        cancel: "Cancelar",
        dateFormat: "dd/mm/yyyy"
      },
    })
  ],
  bootstrap: [App]
})
export class AppModule { }
