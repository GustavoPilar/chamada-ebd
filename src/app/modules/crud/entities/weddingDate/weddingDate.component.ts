import { MessageService } from 'primeng/api';
import { ChangeDetectorRef, Component, Inject, OnInit } from "@angular/core";
import { CrudBaseComponent } from "../../base/crud-base.component";
import { Member, WeddingDate } from "../../../../models/entities";
import { ApiService } from "../../../../services/communication/api.service";
import { DisplayColumn } from "../../../../models/utils/display-column";
import { DisplayColumnTypeEnum } from "../../../../models/utils/display-column-type";
import { DescriptionType } from "../../../../models/utils/description-type";
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forkJoin, Observable, tap } from 'rxjs';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: "app-weddingDate",
  standalone: false,
  templateUrl: "./weddingDate.component.html"
})
export class WeddingDateComponent extends CrudBaseComponent<WeddingDate> implements OnInit {

  //#region fields

  /** Lista de membros */
  public members!: Member[];

  /** Lista de maridos */
  public husbands!: string[];

  /** Lista de esposas */
  public wifes!: string[];

  //#endregion

  //#region Constructor
  constructor(protected override apiService: ApiService,
    protected override cdr: ChangeDetectorRef,
    protected override formBuilder: FormBuilder,
    protected override messageService: MessageService,
    protected override loaderService: NgxSpinnerService,
    protected override dialogService: DialogService
  ) {
    super(apiService, cdr, formBuilder, messageService, loaderService, dialogService);
  }
  //#endregion

  //#endregion Fields

  //#endregion

  //#region OnInit
  public override ngOnInit(): void {

  }
  //#endregion

  //#region CrudBaseComponent
  public override getEntityName(): string {
    return "weddingDate";
  }

  public override getDescription(entity: WeddingDate): string {
    return entity.husband.split(" ")[0] + " e " + entity.wife.split(" ")[0];
  }

  public override getEntityDescription(): DescriptionType {
    return { singular: "Data de casamento", plural: "Datas de casamentos", isFamale: true };
  }

  public override getDisplayColumns(): DisplayColumn[] {
    return [
      { field: "husband", label: "Marido", type: DisplayColumnTypeEnum.TEXT },
      { field: "wife", label: "Esposa", type: DisplayColumnTypeEnum.TEXT },
      { field: "weddingDateTime", label: "Data de casamento", type: DisplayColumnTypeEnum.DATE },
      { field: "totalYears", label: "Tempo de casados", type: DisplayColumnTypeEnum.NUMERIC }
    ];
  }

  public override getColumnValue(entity: WeddingDate, column: DisplayColumn): string {
    switch (column.type) {
      case DisplayColumnTypeEnum.TEXT:
        if (column.field == "husband")
          return entity.husband;
        if (column.field == "wife")
          return entity.wife;
        break;
      case DisplayColumnTypeEnum.NUMERIC:
        return entity.totalYears?.toString() ?? "-";
      case DisplayColumnTypeEnum.DATE:
        if (entity.weddingDateTime != null) {
          return new Date(Date.parse(entity.weddingDateTime.toString())).toLocaleDateString();
        }
    }

    return "-";
  }

  public override createForm(): FormGroup {
    let date: Date | null = null;

    if (this.selectedEntity.weddingDateTime != null)
      date = new Date(Date.parse(this.selectedEntity.weddingDateTime.toString()));

    return this.formBuilder.group({
      husband: [
        this.selectedEntity?.husband ?? null,
        Validators.required
      ],
      wife: [
        this.selectedEntity?.wife ?? null,
        Validators.required
      ],
      weddingDatetime: [
        date
      ],
      totalYears: [
        this.selectedEntity?.totalYears ?? null
      ]
    });
  }

  public onChangeWeddingDateTime(event: Date): void {
    let birthDate: Date = event
    let age: number = this.currentDate.getFullYear() - birthDate.getFullYear();
    const m: number = this.currentDate.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && this.currentDate.getDate() < birthDate.getDate())) {
      age--;
    }

    this.form.get('totalYears')?.setValue(age);
  }

  public onClearWeddingDateTime(): void {
    this.form.get("totalYears")?.setValue(null);
  }

  public override prepareEntityToSave(): WeddingDate {
    let entity = this.form.value;
    entity.id = this.selectedEntity.id;

    return entity;
  }

  public override loadResources(): Observable<any> {
    return forkJoin({
      members: this.apiService.getEntities<Member>("member")
    }).pipe(
      tap(({ members }) => {
        this.members = members;
        this.husbands = members.filter(x => x.isMale == true).map(x => x.name);
        this.wifes = members.filter(x => x.isMale == false).map(x => x.name);
      })
    );
  }
  //#endregion

}
