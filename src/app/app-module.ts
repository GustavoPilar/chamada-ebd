import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgxSpinnerModule } from "ngx-spinner";
import { ComponentsModule } from "./components/components.module";
import { providePrimeNG } from 'primeng/config';
import Aura from "@primeuix/themes/aura";
import { CrudModule } from './modules/crud/crud.module';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DatePickerModule } from 'primeng/datepicker';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ToolbarModule } from 'primeng/toolbar';
@NgModule({
  declarations: [
    App,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule.forRoot({type: "square-jelly-box"}),
    ComponentsModule,
    CrudModule,

    ButtonModule,
    TableModule,
    TagModule,
    ToolbarModule,
    DialogModule,
    ConfirmDialogModule,
    ToastModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    ToggleButtonModule,
    ToggleSwitchModule,
    DatePickerModule,
    InputNumberModule,
    SelectModule,
    MessageModule,
    CardModule,
    CarouselModule
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
        monthNamesShort: [
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Out",
          "Nov",
          "Dez"
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
