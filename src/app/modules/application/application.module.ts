import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ComponentsModule } from "../../components/components.module";
import { ApplicationRoutingModule } from "./application-routing.module";
import { ButtonModule } from "primeng/button";
import { ApplicationComponent } from "./application.component";
import { ClassRollComponent } from "./class-roll/class-roll.component";
import { ConfirmationService, MessageService } from "primeng/api";
import { ReactiveFormsModule } from "@angular/forms";
import { SelectModule } from "primeng/select";
import { DialogService } from "primeng/dynamicdialog";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { TagModule } from "primeng/tag";
import { AnimateOnScrollModule } from "primeng/animateonscroll";
import { CardModule } from 'primeng/card';
import { DialogModule } from "primeng/dialog";
import { AttendanceOptionDialogComponent } from "./class-roll/attendance-option-dialog/attendance-option-dialog.component";

@NgModule({
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    ButtonModule,
    SelectModule,
    TableModule,
    ToastModule,
    TagModule,
    AnimateOnScrollModule,
    CardModule,
    DialogModule
  ],
  declarations: [
    ApplicationComponent,
    ClassRollComponent,

    AttendanceOptionDialogComponent
  ],
  exports: [

  ],
  providers: [
    MessageService,
    ConfirmationService,
    DialogService
  ]
})
export class ApplicationModule { }
