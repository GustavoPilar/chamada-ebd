import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Member, WeddingDate } from "../../../../../models/entities";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { NgxSpinnerService } from "ngx-spinner";
import { Observable } from "rxjs";
import { ApiService } from "../../../../../services/communication/api.service";
import { MessageService } from "primeng/api";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DisplayColumn } from "../../../../../models/utils/display-column";
import { DisplayColumnTypeEnum } from "../../../../../models/utils/display-column-type";

export class Month {
  id!: number;
  name!: string;
}

@Component({
  selector: "app-birth-date-dialog",
  standalone: false,
  templateUrl: "./birth-date-dialog.component.html"
})
export class BirthDateDialogComponent implements OnInit {

  //#region Fields

  /** Lista de membros */
  public members: Member[];

  /** Lista de casamentos */
  public weddingDates!: WeddingDate[];

  /** Lista das entidades filtradas */
  public entitiesFiltered!: any[];

  /** Meses */
  public months!: Month[];

  /** Mês selecionado */
  public monthSelected!: Month;

  /** Formulário */
  public form!: FormGroup;

  //#endregion

  //#region Constructor
  constructor(private config: DynamicDialogConfig,
    private viewRef: DynamicDialogRef,
    private apiService: ApiService,
    private loaderService: NgxSpinnerService,
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
    let data = this.config.data;

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
    ];

    this.monthSelected = this.months[new Date().getMonth()];

    this.members = data.members;
    this.onFilterEntities(this.members, "birthDate");
  }
  //#endregion

  //#region OnInit
  public ngOnInit(): void {
    this.loadMembers();
  }
  //#endregion

  //#region Members

  /** Carrega os aniversários de casamentos */
  public loadMembers(): void {
    this.loaderService.show();

    this.apiService.getEntities<WeddingDate>("weddingDate").subscribe({
      next: (result) => {
        this.weddingDates = result.filter(x => x.weddingDateTime != null);
        this.createForm();
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.messageService.add({
          severity: "error",
          summary: "Erro",
          detail: "Houve um erro durante o carregamento dos aniversários de casamento",
          life: 3000,
          closable: true
        })
      },
      complete: () => {
        this.loaderService.hide();
      }
    })
  }

  /** Cria os formulários */
  public createForm(): void {
    this.form = this.formBuilder.group({
      month: [
        this.monthSelected
      ],
      isWedding: [
        false
      ]
    });
  }

  /** Retorna as colunas */
  public getColumns(): DisplayColumn[] {
    if (!this.form || !this.form!.get('isWedding')!.value) {
      return [
        { label: "Nome", field: "name", type: DisplayColumnTypeEnum.TEXT },
        { label: "Aniversário", field: "birthDate", type: DisplayColumnTypeEnum.DATE }
      ];
    }

    return [
      { label: "Marido", field: "husband", type: DisplayColumnTypeEnum.TEXT },
      { label: "Esposa", field: "wife", type: DisplayColumnTypeEnum.TEXT },
      { label: "Aniversário", field: "weddingDateTime", type: DisplayColumnTypeEnum.DATE }
    ]
  }

  /** Retorna o valor da coluna em formato de string
   * @param entity registro
   * @param field campo do registro
   * @param fieldType tipo do campo
   * @returns O valor do campo no registro
   */
  public getColumnValue(entity: any, field: string, fieldType: DisplayColumnTypeEnum): string {
    if (fieldType == DisplayColumnTypeEnum.DATE) {
      return new Date(entity[field]).toLocaleDateString();
    }

    return entity[field];
  }

  /** Altera o mês selecionado e filtra
   * @param evnt Event disparado => Mês selecionado
   * @returns void
   */
  public onChangeMonth(evnt: any): void {
    this.monthSelected = evnt.value;
    this.onChangeToggleButton(this.form.get('isWedding')!.value);
  }

  /** Transforma as entidades filtradas
   * true => WeddingDates
   * false => Members
   * @param evnt Evento disparado => valor booleano
   * @returns void
   */
  public onChangeToggleButton(evnt: boolean): void {
    this.onFilterEntities(evnt ? this.weddingDates : this.members, evnt ? "weddingDateTime" : "birthDate");
  }

  /** Filtra as entidades com o array e pelo campo passados
   * @param array array alvo
   * @param campo campo alvo
   * @returns void
   */
  public onFilterEntities(array: any[], field: string): void {
    this.entitiesFiltered = array.filter((x: any) => new Date(x[field]).getMonth() == this.monthSelected.id)
      .sort((x, y) => new Date(x[field]).getDate() - new Date(y[field]).getDate());
  }
  // #endregion

}
