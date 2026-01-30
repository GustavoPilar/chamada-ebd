import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ApplicationComponent } from "./application.component";
import { ApplicationRoutingModule } from "./application-routing.module";
import { ToastModule } from "primeng/toast";
import { ConfirmDialog, ConfirmDialogModule } from "primeng/confirmdialog";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { DatePickerModule } from "primeng/datepicker";
import { DialogModule } from "primeng/dialog";
import { IconFieldModule } from "primeng/iconfield";
import { InputIconModule } from "primeng/inputicon";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { InputText } from "primeng/inputtext";
import { SelectModule } from "primeng/select";
import { SelectButtonModule } from "primeng/selectbutton";
import { TableModule } from "primeng/table";
import { ToggleButtonModule } from "primeng/togglebutton";
import { ToolbarModule } from "primeng/toolbar";

@NgModule({
  declarations: [
    ApplicationComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,

    // PrimeNG
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
  providers: [

  ]
})
export class ApplicationModule { }
