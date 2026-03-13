import { EntityBase } from "./base/entity-base";

export class Member extends EntityBase {

  /** Nome */
  name!: string;

  /** Está ativo? */
  isActive!: boolean;

  /** É homem? */
  isMale?: boolean | null;

  /** Data de nascimento */
  birthDate?: Date | null;

  /** Idade */
  age?: number | null;

  public override toString(): string {
    return this.name;
  }
}

export class WeddingDate extends EntityBase {

  /** Marido */
  husband!: string;

  /** Esposa */
  wife!: string

  /** Data de casamento */
  weddingDateTime?: Date | null;

  /** Tempo casados */
  totalYears?: number | null;

  public override toString(): string {
    return this.husband + " e " + this.wife;
  }
}

export class Class extends EntityBase {

  /** Nome da classe */
  name!: string;

  /** Descrição da classe */
  description!: string;

  /** Data que começa a classe */
  startDate!: Date;

  /** Data que termina a classe */
  endDate!: Date;

  public override toString(): string {
    return this.name;
  }

}

export class ClassRoll extends EntityBase {

  /** Nome do membro */
  memberName!: string;

  /** É professor? */
  isTeacher!: boolean;

  /** Lista de presença */
  attendances!: Attendance[]

}

export class Attendance extends EntityBase {

    /** Dia da presença */
    date!: Date;

    /** Está presente? */
    isPresent?: boolean

    public override toString(): string {
      return `${this.isPresent != null ? (this.isPresent ? "Presente" : "Faltou") : "Pendente"}`
    }
}
