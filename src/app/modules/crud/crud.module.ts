import { NgModule } from "@angular/core";
import { CrudComponent } from "./crud.component";
import { CommonModule } from "@angular/common";
import { CrudRoutingModule } from "./crud-routing.module";
import { CrudListManagerComponent } from "./crud-list/crud-list-manager/crud-list-manager.component";
import { CrudListComponent } from "./crud-list/crud-list.component";
import { MemberComponent } from "./entities/member/member.component";

import { TableModule } from "primeng/table";
import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule } from "primeng/button";
import { CrudFormManagerComponent } from "./crud-form/crud-form-manager/crud-form-manager.component";
import { CrudFormComponent } from "./crud-form/crud-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { InputNumberModule } from "primeng/inputnumber";
import { SelectButtonModule } from "primeng/selectbutton";
import { ToggleButtonModule } from "primeng/togglebutton";
import { IconFieldModule } from "primeng/iconfield";
import { InputIconModule } from "primeng/inputicon";
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { TagModule } from 'primeng/tag';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from "primeng/api";
import { LabelComponent } from "./components/label/label.component";
import { SelectModule } from "primeng/select";
import { CheckboxModule } from "primeng/checkbox";
import { TextareaModule } from 'primeng/textarea';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { DatePickerModule } from 'primeng/datepicker';
import { ToastModule } from "primeng/toast";
import { SkeletonModule } from "primeng/skeleton";
import { BirthdayDialogComponent } from "./entities/member/birthday-dialog/birthday-dialog.component";

@NgModule({
  declarations: [
    CrudComponent,
    CrudListManagerComponent,
    CrudListComponent,
    CrudFormManagerComponent,
    CrudFormComponent,

    LabelComponent,
    BirthdayDialogComponent,

    MemberComponent,
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    SelectButtonModule,
    ToggleButtonModule,
    InputIconModule,
    IconFieldModule,
    ToggleSwitchModule,
    TagModule,
    ConfirmDialogModule,
    SelectModule,
    CheckboxModule,
    TextareaModule,
    OrganizationChartModule,
    DialogModule,
    DynamicDialogModule,
    DatePickerModule,
    ToastModule,
    SkeletonModule
  ],
  providers: [
    ConfirmationService,
    DialogService,
    MessageService
  ]
})
export class CrudModule { }
