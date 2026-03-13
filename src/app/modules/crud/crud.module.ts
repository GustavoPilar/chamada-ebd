import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { CrudComponent } from "./crud.component";
import { CrudRoutingModule } from "./crud-routing.module";
import { CrudListComponent } from "./list/crud-list.component";
import { CrudListManagerComponent } from "./list/manager/crud-list-manager.component";
import { MemberComponent } from "./entities/member/member.component";

import { ButtonModule } from "primeng/button";
import { TableModule } from 'primeng/table';
import { TagModule } from "primeng/tag";
import { ToolbarModule } from "primeng/toolbar";
import { CrudFormManagerComponent } from "./form/manager/crud-form-manager.component";
import { ConfirmationService, MessageService } from "primeng/api";
import { DialogModule } from "primeng/dialog";
import { ToastModule } from "primeng/toast";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { DialogService } from "primeng/dynamicdialog";
import { CrudFormComponent } from "./form/crud-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LabelComponent } from "./components/label/label.component";
import { InputTextModule } from "primeng/inputtext";
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { WeddingDateComponent } from "./entities/weddingDate/weddingDate.component";
import { SelectModule } from "primeng/select";
import { BirthDateDialogComponent } from "./entities/member/birth-date-dialog/birth-date-dialog.component";
import { classComponent } from "./entities/class/class.component";
import { MessageModule } from "primeng/message";
import { ClassRollDialogComponent } from "./entities/class/class-roll-dialog/class-roll-dialog..component";
import { ToggleSwitchModule } from "primeng/toggleswitch";
import { TransferClassDialogComponent } from "./entities/class/trasnfer-class-dialog/transfer-class-dialog.component";

@NgModule({
  imports: [
    CommonModule,
    CrudRoutingModule,
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
    MessageModule
  ],
  declarations: [
    CrudComponent,
    CrudListComponent,
    CrudListManagerComponent,
    CrudFormManagerComponent,
    CrudFormComponent,

    MemberComponent,
    WeddingDateComponent,
    classComponent,

    BirthDateDialogComponent,
    ClassRollDialogComponent,
    TransferClassDialogComponent,

    LabelComponent
  ],
  exports: [

  ],
  providers: [
    MessageService,
    ConfirmationService,
    DialogService
  ]
})
export class CrudModule { }
