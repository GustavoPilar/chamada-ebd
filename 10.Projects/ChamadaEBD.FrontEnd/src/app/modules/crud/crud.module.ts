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
import { StudentComponent } from "./entities/student/student.component";
import { SelectModule } from "primeng/select";
import { ClassRoomComponent } from "./entities/classRoom/classRoom.component";
import { DatePickerModule } from "primeng/datepicker";
import { TeacherComponent } from "./entities/teacher/teacher.component";
import { DialogService } from "primeng/dynamicdialog";
import { DialogModule } from "primeng/dialog";
import { CheckinDialogComponent } from "./dynamicDialog/checkin/cheking-dialog.component";
import { SelectButtonModule } from "primeng/selectbutton";

@NgModule({
  declarations: [
    CrudComponent,
    CrudListManagerComponent,
    CrudListComponent,
    CrudFormManagerComponent,
    CrudFormComponent,

    UserComponent,
    StudentComponent,
    TeacherComponent,
    ClassRoomComponent,

    CheckinDialogComponent
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
    SelectButtonModule
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
