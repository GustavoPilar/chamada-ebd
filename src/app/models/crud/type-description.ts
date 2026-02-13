export class TypeDescription {
  single: string;
  plural: string;
  isFemale: boolean;

  constructor(single: string, plural: string, isFemale: boolean) {
    this.single = single;
    this.plural = plural;
    this.isFemale = isFemale;
  }
}
