import { PrimeIcons } from "primeng/api";

export class SpecialOption {
  label?: string = "";
  icon?: string = "";
  styleClass?: string = "";
  severity?: "info" = "info"
  command!: () => void;
}
