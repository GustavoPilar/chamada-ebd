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
  @Input() public abstractControl!: AbstractControl;
  //#endregion

  //#region Constructor
  constructor() {

  }
  //#endregion

  isRequired(): boolean {
    if (this.abstractControl) return this.abstractControl.hasValidator(Validators.required);

    return false;
  }
}
