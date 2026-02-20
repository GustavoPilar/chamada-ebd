import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";

@Component({
  selector: "app-birthday-dialog",
  templateUrl: "./birthday-dialog.component.html",
  standalone: false
})
export class BirthdayDialogComponent implements OnInit {

  //#region Fields
  public entities!: any[]
  public filteredEntities!: any[];

  public form!: FormGroup;
  public months!: any[];
  //#endregion

  //#region Constructor
  constructor(private config: DynamicDialogConfig,
    private viewRef: DynamicDialogRef,
    private formBuilder: FormBuilder
  ) {
    this.entities = this.config.data.entities.filter((x: any) => x.birthday != null).map((x: any) => x = { name: x.name, birthday: new Date(x.birthday) });
  }
  //#endregion

  //#endregion OnInit
  public ngOnInit(): void {
    this.initNameMonths();
    this.initForm();
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
      ]
    });
  }

  public getField(field: string): AbstractControl {
    return this.form.get(field) as AbstractControl;
  }

  public filterEntities(): void {
    let month: number = this.form.get('month')?.value.id;
    this.filteredEntities = this.entities.filter(x => new Date(x.birthday).getMonth() == month);
  }

  public transformDate(date: Date): string {
    return date.toLocaleDateString();
  }
  //#endregion
}
