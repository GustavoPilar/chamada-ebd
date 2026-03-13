import { ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, ViewContainerRef } from "@angular/core";
import { Class, ClassRoll, Member } from "../../../../../models/entities";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { ApiService } from "../../../../../services/communication/api.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ConfirmationService, MessageService, PrimeIcons } from "primeng/api";

@Component({
  selector: "app-class-roll-dialog",
  standalone: false,
  templateUrl: "./class-roll-dialog.component.html"
})
export class ClassRollDialogComponent implements OnInit, OnDestroy {

  //#region Fields
  public className!: string;

  public classRolls!: ClassRoll[];
  public isTeacher: boolean = false;
  //#endregion

  //#region Constructor
  constructor(private config: DynamicDialogConfig,
    private viewRef: DynamicDialogRef,
    @Inject(ApiService) private apiService: ApiService,
    @Inject(NgxSpinnerService) private loaderService: NgxSpinnerService,
    @Inject(MessageService) private messageService: MessageService,
    @Inject(ConfirmationService) private confirmationService: ConfirmationService,
    private cdr: ChangeDetectorRef
  ) {
    let data = this.config.data;

    this.className = data.className;
  }
  //#endregion

  //#region OnInit
  public ngOnInit(): void {
    this.loadMembersWithoutClass();
  }

  public ngOnDestroy(): void {
    this.viewRef.close(null);
  }
  //#endregion

  //#region Members

  public loadMembersWithoutClass(): void {
    this.loaderService.show();

    this.apiService.getEntities<ClassRoll>("classRoll/Sem classe").subscribe({
      next: (result) => {
        this.classRolls = result;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err);
        this.loaderService.hide()
      },
      complete: () => {
        this.loaderService.hide();
      }
    })

  }

  public confirmAddMemberToClass(classRoll: ClassRoll): void {
    this.confirmationService.confirm({
      header: "Adicionar membro?",
      message: "Você confirma a adição do aluno: " + classRoll.memberName + "?",
      icon: PrimeIcons.QUESTION_CIRCLE,
      accept: () => { this.addMemberToClass(classRoll) }
    });
  }

  public addMemberToClass(classRoll: ClassRoll): void {
    this.loaderService.show();

    let entity: ClassRoll = {
      id: classRoll.id,
      memberName: classRoll.memberName,
      attendances: [],
      isTeacher: this.isTeacher
    }


    this.apiService.createEntity<ClassRoll>("classroll/" + this.className, entity).subscribe({
      next: (result) => {
        this.messageService.add({
          summary: "Sucesso",
          detail: "Aluno adicionado",
          severity: "success",
          life: 3000,
          closable: true
        });

        this.loadMembersWithoutClass();
      },
      error: (err) => {
        console.log(err);
        this.loaderService.hide();
      },
      complete: () => {
        this.loaderService.hide();
      }
    });
  }

  //#endregion

}
