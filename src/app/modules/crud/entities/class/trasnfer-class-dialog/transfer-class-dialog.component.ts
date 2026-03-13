import { ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { Class, ClassRoll } from "../../../../../models/entities";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { ApiService } from "../../../../../services/communication/api.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ConfirmationService, MessageService, PrimeIcons } from "primeng/api";

@Component({
  selector: "app-transfer-class-dialog",
  standalone: false,
  templateUrl: "./transfer-class-dialog.component.html"
})
export class TransferClassDialogComponent implements OnInit, OnDestroy {

  //#region Fields
  public originClass!: Class;
  public classRoll!: ClassRoll;

  public classes!: Class[];
  //#endregion

  //#region Constructor
  constructor(private config: DynamicDialogConfig,
    private viewRef: DynamicDialogRef,
    @Inject(ApiService) private apiService: ApiService,
    @Inject(NgxSpinnerService) private loaderService: NgxSpinnerService,
    @Inject(ConfirmationService) private confirmationService: ConfirmationService,
    @Inject(MessageService) private messageService: MessageService,
    private cdr: ChangeDetectorRef
  ) {
    let data = this.config.data;

    this.originClass = data.originClass;
    this.classRoll = data.classRoll;
  }
  //#endregion

  //#region OnInit

  public ngOnInit(): void {
    this.loadClasses();
  }

  public ngOnDestroy(): void {
    this.viewRef.close(null);
  }

  //#endregion

  //#region Members

  public loadClasses(): void {
    this.loaderService.show();

    this.apiService.getEntities<Class>("class").subscribe({
      next: (result) => {
        this.classes = result.filter(x => x.name != this.originClass.name);
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.loaderService.hide();
      },
      complete: () => {
        this.loaderService.hide();
      }
    });
  }

  public confirmAddMemberToClass(entity: Class): void {
    this.confirmationService.confirm({
      header: "Transferir membro?",
      message: "Você confirma a transferência do aluno: " + this.classRoll.memberName + "?",
      icon: PrimeIcons.QUESTION_CIRCLE,
      accept: () => { this.transferMemberToClass(entity) }
    });
  }

  public transferMemberToClass(entity: Class): void {
    this.loaderService.show();

    this.apiService.transferEntity<ClassRoll>(`classroll/${this.originClass.name}/${this.classRoll.id}/transfer/${entity.name}`, this.classRoll).subscribe({
      next: (result) => {
        this.messageService.add({
          summary: "Sucesso",
          detail: "Aluno transferido",
          severity: "success",
          life: 3000,
          closable: true
        });

        this.viewRef.close(result);
      },
      error: (err) => {
        console.log(err);
        this.messageService.add({
          summary: "Erro",
          detail: "Erro ao fazer a transferência de classe",
          severity: "error",
          closable: true,
          life: 3000
        });
        this.loaderService.hide();
      },
      complete: () => {
        this.loaderService.hide();
      }
    });
  }

  //#region

}
