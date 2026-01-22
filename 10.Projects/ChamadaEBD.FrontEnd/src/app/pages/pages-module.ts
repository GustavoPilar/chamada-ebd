import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home';
import { SalasComponent } from './salas/salas';
import { AlunosComponent } from './alunos/alunos';

import { ComponentsModule } from '../components/components-module';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@NgModule({
  declarations: [
    HomeComponent,
    SalasComponent,
    AlunosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule,

    ButtonModule,
    TableModule,
    ToolbarModule,
    DialogModule,
    InputTextModule,
    SelectModule,
    ConfirmDialogModule,
    InputNumberModule,
    ToggleSwitchModule
  ],
  providers: [
    ConfirmationService
  ]
})
export class PagesModule { }
