import { IEntityBase } from "./base/i-entity-base";

export class User implements IEntityBase {
  id: number;
  code: number;
  name: string;
  age: string;
  phone: string;
  active: boolean;
}
