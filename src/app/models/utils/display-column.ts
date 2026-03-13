import { DisplayColumnTypeEnum } from "./display-column-type";

export class DisplayColumn {
    field!: string;
    label!: string;
    type!: DisplayColumnTypeEnum;
    icon?: string;
}