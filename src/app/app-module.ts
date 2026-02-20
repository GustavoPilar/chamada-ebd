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
        emptyMessage: "Nenhum registro encontrado",
        dateAfter: "Depois",
        dateBefore: "Antes",
        dateIs: "Data igual",
        dateIsNot: "Data diferente de",
        noFilter: "Sem filtro",
        equals: "Igual",
        notEquals: "Diferente",
        lte: "Menor ou igual",
        lt: "Menor que",
        gt: "Maior que",
        gte: "Maior ou igual",
        startsWith: "Começa com",
        contains: "Contém",
        notContains: "Não contém",
        endsWith: "Termina com",
        monthNames: [
          "Janeiro",
          "Fevereiro",
          "Março",
          "Abril",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
          "Setembro",
          "Outubro",
          "Novembro",
          "Dezembro"
        ],
        before: "Anter",
        after: "Depois",
        cancel: "Cancelar",
        clear: "Limpar",
        dateFormat: "dd/mm/yy",
        dayNames: [
          "Domingo",
          "Segunda",
          "Terça",
          "Quarta",
          "Quinta",
          "Sexta",
          "Sábado"
        ],
        dayNamesShort: [
          "Dom",
          "Seg",
          "Ter",
          "Qua",
          "Qui",
          "Sex",
          "Sáb"
        ],
        dayNamesMin: [
          "D",
          "S",
          "T",
          "Q",
          "Q",
          "S",
          "S"
        ],
        emptyFilterMessage: "Nenhum resultado encontrado",
        emptySearchMessage: "Nenhum resultado encontrado",
        is: "É",
        isNot: "Não é",
        today: "Hoje" 
      },
      ripple: true
    })
  ],
  bootstrap: [App]
})
export class AppModule { }
