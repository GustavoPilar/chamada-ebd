import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home';
import { ButtonModule } from 'primeng/button';
import { SalasComponent } from './salas/salas';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { AlunosComponent } from './alunos/alunos';


@NgModule({
  declarations: [
    HomeComponent,
    SalasComponent,
    AlunosComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    ToolbarModule
  ]
})
export class PagesModule { }
