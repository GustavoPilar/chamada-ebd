import { Component, Input } from "@angular/core";
import { AbstractControl, Validators } from "@angular/forms";

@Component({
  selector: "app-label",
  templateUrl: "./label.component.html",
  standalone: false
})
export class LabelComponent {

  //#region Fields
  @Input() public description!: string;
  @Input() public abstractControll!: AbstractControl;
  //#endregion

  //#region Constructor
  constructor() {

  }
  //#endregion

  isRequired(): boolean {
    if (this.abstractControll) return this.abstractControll.hasValidator(Validators.required);

    return false;
  }
}
