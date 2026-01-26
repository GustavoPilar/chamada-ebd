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

@NgModule({
  declarations: [
    CrudComponent,
    CrudListComponent,
    CrudFormManagerComponent,
    CrudFormComponent,

    UserComponent,
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
    InputMaskModule
  ],
  exports: [
  ],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class CrudModule { }
