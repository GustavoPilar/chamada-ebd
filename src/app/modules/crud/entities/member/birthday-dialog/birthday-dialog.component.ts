import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { ApiService } from "../../../../../services/api-service/api.service";
import { MessageService } from "primeng/api";
import { DisplayColumn } from "../../../../../models/crud/display-column";
import { DisplayColumnType } from "../../../../../models/crud/display-column-type";

@Component({
  selector: "app-birthday-dialog",
  templateUrl: "./birthday-dialog.component.html",
  standalone: false
})
export class BirthdayDialogComponent implements OnInit {

  //#region Fields
  public entities!: any[];
  public weedings!: any[];
  public filteredValues!: any[];

  public form!: FormGroup;
  public months!: any[];
  public options: any[] = [
    { id: 0, label: "Individual" },
    { id: 1, label: "Casamento" }
  ];
  public alreadyLoad: boolean = false;
  public displayColumns!: DisplayColumn[]
  //#endregion

  //#region Constructor
  constructor(private config: DynamicDialogConfig,
    private viewRef: DynamicDialogRef,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private messageService: MessageService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.entities = this.config.data.entities.filter((x: any) => x.birthday != null).map((x: any) => x = { name: x.name, birthday: new Date(x.birthday) });
  }
  //#endregion

  //#endregion OnInit
  public ngOnInit(): void {
    this.initNameMonths();
    this.initForm();
    this.getColumns();
    this.filterEntities();
  }
  //#endregion

  //#region Resources
  public initNameMonths(): void {
    this.months = [
      { id: 0, name: "Janeiro" },
      { id: 1, name: "Fevereiro" },
      { id: 2, name: "Março" },
      { id: 3, name: "Abril" },
      { id: 4, name: "Maio" },
      { id: 5, name: "Junho" },
      { id: 6, name: "Julho" },
      { id: 7, name: "Agosto" },
      { id: 8, name: "Setembro" },
      { id: 9, name: "Outubro" },
      { id: 10, name: "Novembro" },
      { id: 11, name: "Dezembro" },
    ]
  }
  //#endregion

  //#region Members
  public initForm(): void {
    let currentIndexMonth: number = this.months.findIndex(x => x.id == new Date().getMonth());

    this.form = this.formBuilder.group({
      month: [
        this.months[currentIndexMonth],
        Validators.required
      ],
      type: [
        this.options[0],
        Validators.required
      ]
    });
  }

  public getField(field: string): AbstractControl {
    return this.form.get(field) as AbstractControl;
  }

  public filterEntities(): void {
    let month: number = this.form.get('month')?.value.id;
    this.filteredValues = this.entities.filter(x => new Date(x.birthday).getMonth() == month);
  }

  public filterWeedings(): void {
    let month: number = this.form.get('month')?.value.id;
    this.filteredValues = this.weedings.filter(x => new Date(x.weedingDateTime).getMonth() == month);
  }

  public transformDate(date: Date): string {
    return date.toLocaleDateString();
  }

  public onChangeType(event: any): void {
    this.filteredValues = [];
    if (event.value.id == 0) {
      this.filterEntities();
      this.changeDetectorRef.detectChanges();
    }
    else {
      if (!this.alreadyLoad) {
        this.loadWeedings().then((result) => {
          if (result) {
            this.alreadyLoad = true;
            this.getColumns();
            this.filterWeedings();
            this.changeDetectorRef.detectChanges();
          }
        }, (error) => {
          this.messageService.add({
            summary: "Erro ao carregar",
            detail: "Ocorreu um erro ao carregar os casamentos.\nTente novamente.",
            life: 3000,
            closable: true,
            severity: "error"
          });

          this.form.get("type")?.setValue(this.options[0]);
        });
      }
      else {
        this.filterWeedings();
        this.changeDetectorRef.detectChanges();
      }
    }
  }

  public loadWeedings(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.apiService.getEntities("weedingDate").then((result: any) => {
          if (result) {
            this.weedings = result;
            resolve(result);
          }
        }, (error: any) => {
          reject(error);
        });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }

  public getColumns(): void {
    if (this.form.get("type")?.value.id == 0) {
      this.displayColumns = [
        {
          label: "Nome",
          field: "name",
          displayColumnType: DisplayColumnType.TEXT
        },
        {
          label: "Aniversário",
          field: "birthday",
          displayColumnType: DisplayColumnType.DATE
        }
      ]
    }
    else {
      this.displayColumns = [
        {
          label: "Esposo",
          field: "husband.name",
          displayColumnType: DisplayColumnType.OBJECT
        },
        {
          label: "Esposa",
          field: "wife.name",
          displayColumnType: DisplayColumnType.OBJECT
        },
        {
          label: "Aniversário",
          field: "weedingDateTime",
          displayColumnType: DisplayColumnType.DATE
        }
      ]
    }
  }

  public showObejctValue(entity: any, columnField: string): any {
    let fields: string[] = columnField.split(".");
    let currentValue: any = entity;

    fields.forEach((field: string) => {
      currentValue = currentValue[field];
    });

    return currentValue;
  }

  public showDefaultValue(value?: string): any {
    return value;
  }

  public showDateValue(date?: string) {
    return new Date(date!).toLocaleDateString();
  }

  public onChangeMonth(): void {
    if (this.form.get('type')?.value.id == 0) {
      this.filterEntities();
    }
    else {
      this.filterWeedings();
    }
  }
  //#endregion
}
