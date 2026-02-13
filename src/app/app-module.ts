import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgxSpinnerModule } from "ngx-spinner";
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { providePrimeNG } from 'primeng/config';
import Aura from "@primeuix/themes/aura";
import { CrudModule } from './modules/crud/crud.module';
@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule.forRoot({type: "square-jelly-box"}),
    ComponentsModule,
    PagesModule,
    CrudModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimations(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false
        }
      },
      translation: {
        accept: "Sim",
        reject: "Não",
        emptyMessage: "Nenhum registro encontrado"
      },
      ripple: true
    })
  ],
  bootstrap: [App]
})
export class AppModule { }
