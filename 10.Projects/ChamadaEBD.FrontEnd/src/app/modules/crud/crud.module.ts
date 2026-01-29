import { NgModule } from "@angular/core";
import { CrudComponent } from "./crud.component";
import { CrudRoutingModule } from "./crud-routing.module";
import { CommonModule } from "@angular/common";
import { ConfirmationService, MessageService } from "primeng/api";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { ConfirmDialog, ConfirmDialogModule } from "primeng/confirmdialog";
import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule } from "primeng/button";
import { CrudListComponent } from "./crud-list/crud-list.component";
import { UserComponent } from "./entities/user/user.component";
import { CrudFormComponent } from "./crud-form/crud-form.component";
import { CrudFormManagerComponent } from "./crud-form/crud-form-manager/crud-form-manager.component";
import { FormsModule, FormSubmittedEvent, ReactiveFormsModule } from "@angular/forms";
import { InputText } from "primeng/inputtext";
import { InputNumberModule } from "primeng/inputnumber";
import { IconFieldModule } from "primeng/iconfield";
import { InputIconModule } from "primeng/inputicon";
import { ToggleButtonModule } from "primeng/togglebutton";
import { InputMaskModule } from "primeng/inputmask";
import { CrudListManagerComponent } from "./crud-list/crud-list-manager/crud-list-manager.component";
import { SelectModule } from "primeng/select";
import { ClassComponent } from "./entities/class/class.component";
import { DatePickerModule } from "primeng/datepicker";
import { DialogService } from "primeng/dynamicdialog";
import { DialogModule } from "primeng/dialog";
import { SelectButtonModule } from "primeng/selectbutton";
import { UsersWithoutClassComponent } from "./entities/class/users-without-class/users-without-class.component";

@NgModule({
  declarations: [
    CrudComponent,
    CrudListManagerComponent,
    CrudListComponent,
    CrudFormManagerComponent,
    CrudFormComponent,

    UserComponent,
    ClassComponent,

    // Dynamic Dialog
    UsersWithoutClassComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    //PrimeNG,
    TableModule,
    ToastModule,
    ConfirmDialog,
    ToolbarModule,
    ButtonModule,
    FormsModule,
    InputText,
    FormsModule,
    ReactiveFormsModule,
    InputNumberModule,
    IconFieldModule,
    InputIconModule,
    ConfirmDialogModule,
    ToggleButtonModule,
    InputMaskModule,
    SelectModule,
    DatePickerModule,
    DialogModule,
    SelectButtonModule,
    FormsModule
  ],
  exports: [
  ],
  providers: [
    ConfirmationService,
    MessageService,
    DialogService
  ]
})
export class CrudModule { }
