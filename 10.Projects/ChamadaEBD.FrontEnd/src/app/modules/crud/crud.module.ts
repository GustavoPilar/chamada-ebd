import { NgModule } from "@angular/core";
import { CrudComponent } from "./crud.component";
import { CrudRoutingModule } from "./crud-routing.module";
import { CommonModule } from "@angular/common";
import { ConfirmationService, MessageService } from "primeng/api";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { ConfirmDialog } from "primeng/confirmdialog";
import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule } from "primeng/button";
import { CrudListComponent } from "./crud-list/crud-list.component";
import { UserComponent } from "./entities/user/user.component";
import { CrudFormComponent } from "./crud-form/crud-form.component";

@NgModule({
    declarations: [
        CrudComponent,
        CrudListComponent,
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
        ButtonModule
    ],
    exports: [
    ],
    providers: [
        ConfirmationService,
        MessageService
    ]
})
export class CrudModule { }