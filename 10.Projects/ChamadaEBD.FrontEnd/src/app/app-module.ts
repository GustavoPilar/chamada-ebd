import { ApiService } from './services/communication/api.service';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

// PrimeNG
import { providePrimeNG } from 'primeng/config';
import Aura from "@primeuix/themes/aura";
import { ConfirmationService, FilterMatchMode } from 'primeng/api';
import { definePreset } from '@primeuix/themes';
import { ButtonModule } from 'primeng/button';
import { Menubar } from "primeng/menubar";
import { ConfirmDialogModule } from 'primeng/confirmdialog';

// Modules
import { ComponentsModule } from './components/components-module';
import { PagesModule } from './pages/pages-module';
import { CrudModule } from './modules/crud/crud.module';

const myPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}',
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}'
    }
  }
})

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Modules
    ComponentsModule,
    PagesModule,
    CrudModule,

    // PrimeNG
    Menubar,
    ConfirmDialogModule
],
  providers: [
    provideBrowserGlobalErrorListeners(),
    providePrimeNG({
      theme: {
        preset: myPreset,
        options: {
          darkModeSelector: ".my-app-dark"
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
    }),
    ConfirmationService,
    ApiService
  ],
  bootstrap: [App]
})
export class AppModule { }
