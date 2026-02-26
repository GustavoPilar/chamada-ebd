import { Component, OnInit } from "@angular/core";
import { CrudBaseComponent } from "../../base/crud-base";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MessageService, PrimeIcons } from "primeng/api";
import { DialogService } from "primeng/dynamicdialog";
import { DisplayColumn } from "../../../../models/crud/display-column";
import { DisplayColumnType } from "../../../../models/crud/display-column-type";
import { SpecialOption } from "../../../../models/crud/special-option";
import { TypeDescription } from "../../../../models/crud/type-description";
import { ApiService } from "../../../../services/api-service/api.service";
import { CrudManager } from "../../base/crud-manager.service";

@Component({
  selector: "app-teacher",
  templateUrl: "./teacher.component.html",
  standalone: false
})
export class TeacherComponent extends CrudBaseComponent implements OnInit {

  //#region Fields
  public members!: any[];
  public classes!: any[];
  //#endregion

  //#region Constructor
  constructor(public override crudManager: CrudManager,
    protected override apiService: ApiService,
    protected override formBuilder: FormBuilder,
    protected override dialogService: DialogService,
    protected override messageService: MessageService) {
    super(crudManager, apiService, formBuilder, dialogService, messageService);
  }
  //#endregion

  //#region OnInit
  public override ngOnInit(): void {
    super.ngOnInit();
  }
  //#endregion

  //#region CrudBaseComponent Methods
  public override getDisplayColumns(): DisplayColumn[] {
    return [
      { field: "member.name", label: "Membro", displayColumnType: DisplayColumnType.OBJECT },
      { field: "class.name", label: "Classe", displayColumnType: DisplayColumnType.OBJECT },
    ];
  }

  public override getTypeDescription(): TypeDescription {
    return new TypeDescription("Professor", "Professores", false);
  }

  public override getForm(): FormGroup {
    return this.formBuilder.group({
      member: [
        this.selectedEntity?.member,
        Validators.required
      ],
      class: [
        this.selectedEntity?.class,
        Validators.required
      ]
    });
  }

  public override loadResources(): Promise<any> {
    return Promise.all([
      this.loadMembers(),
      this.loadClasses(),
    ]);
  }
  //#endregion

  //#region Resources
  public loadMembers(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.apiService.getEntities("member").then((result: any) => {
          if (result) {
            this.members = result;
            resolve(result);
          }
        }, (error) => {
          reject(error);
        });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }

  public loadClasses(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.apiService.getEntities("class").then((result: any) => {
          if (result) {
            this.classes = result;
            resolve(result);
          }
        }, (error) => {
          reject(error);
        });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }
  //#endregion
}
