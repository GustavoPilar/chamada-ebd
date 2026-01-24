import { NgModule } from "@angular/core";
import { CrudComponent } from "./crud.component";
import { CrudRoutingModule } from "./crud-routing.module";

@NgModule({
    declarations: [
        CrudComponent
    ],
    imports: [
        CrudRoutingModule
    ],
    providers: [
        
    ]
})
export class CrudModule { }