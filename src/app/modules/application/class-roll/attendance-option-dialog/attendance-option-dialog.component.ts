import { Component, OnDestroy, OnInit } from "@angular/core";
import { Attendance } from "../../../../models/entities";
import { MenuItem, PrimeIcons } from "primeng/api";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";

@Component({
  selector: "app-attendance-option-dialog",
  standalone: false,
  templateUrl: "./attendance-option-dialog.component.html"
})
export class AttendanceOptionDialogComponent implements OnInit, OnDestroy {

  //#region Fields
  public attendance!: Attendance;

  public options: MenuItem[];
  //#endregion

  //#region Constructor
  constructor(
    private config: DynamicDialogConfig,
    private viewRef: DynamicDialogRef
  ) {

    let data = this.config.data;

    this.attendance = data.attendance;

    this.options = [
      { id: "present", title: "Presente", icon: PrimeIcons.CHECK, command: () => { this.getTrueValue() } },
      { id: "absence", title: "Faltou", icon: PrimeIcons.TIMES, command: () => { this.getFalseValue() } },
      { id: "pendent", title: "Pendente", icon: PrimeIcons.MINUS, command: () => { this.getNullvalue() } }
    ];
  }

  //#endregion


  //#endregion OnInit()
  public ngOnInit(): void {

  }

  public ngOnDestroy(): void {
    this.viewRef.close({ value: null, save: false });
  }
  //#endregion

  //#region Members

  public getTrueValue(): void {
    this.viewRef.close({value: true, save: true});
  }

  public getFalseValue(): void {
    this.viewRef.close({value: false, save: true});
  }

  public getNullvalue(): void {
    this.viewRef.close({value: null, save: true});
  }

  public chooseValue(option: MenuItem): void {
    switch (option.id) {
      case "present":
        this.getTrueValue();
        break;
      case "absence":
        this.getFalseValue();
        break;
      default:
        this.getNullvalue();
    }
  }

  public getSeverity(option: MenuItem): "success" | "secondary" | "danger" {
    let severity: "success" | "secondary" | "danger";

    switch (option.id) {
      case "present":
        severity = "success";
        break;
      case "absence":
        severity = "danger";
        break;
      default:
        severity = "secondary";
    }

    return severity;
  }
  //#endregion
}
