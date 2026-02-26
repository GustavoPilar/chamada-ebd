import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { ApiService } from "../../../../../services/api-service/api.service";
import { ConfirmationService, MessageService } from "primeng/api";

@Component({
  selector: "app-transfer-class-dialog",
  templateUrl: "./transfer-class-dialog.component.html",
  standalone: false
})
export class TransferClassDialogComponent implements OnInit {

  //#region Fields
  public currentClass!: any;
  public isTeacher!: boolean;

  public form!: FormGroup;
  public members!: any[];
  public classes!: any[];
  public optionLabel!: string;
  //#endregion

  //#region Constructor
  constructor(private config: DynamicDialogConfig,
    private dialogRef: DynamicDialogRef,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    let data = this.config.data;
    this.currentClass = data.currentClass;
    this.isTeacher = data.isTeacher;
    this.members = data.entities;
    this.optionLabel = this.isTeacher ? "member.name" : "name";
  }
  //#endregion

  //#region OnInit
  public ngOnInit(): void {
    this.loadClasses().then((result: any) => {
      if (result) {
        this.initForm();
        this.changeDetectorRef.detectChanges();
      }
    }, (error) => {
      this.messageService.add({
        summary: "Erro ao carregar",
        detail: "Ocorreu um erro ao tentar carregar as classes.\nTente novemente.",
        closable: true,
        severity: "error",
        life: 3000
      });
    });

  }
  //#endregion

  //#endregion Members
  public initForm(): void {
    this.form = this.formBuilder.group({
      member: [
        null,
        Validators.required
      ],
      currentClass: [
        this.currentClass?.name
      ],
      redeploy: [
        null,
        Validators.required
      ]
    })
  }

  public getField(field: string): AbstractControl {
    return this.form?.get(field) as AbstractControl;
  }

  public canSave(): boolean {
    return this.form?.valid ?? false;
  }

  public closeDialog(entity: any): void {
    this.dialogRef.close(entity);
  }

  public cancel(): void {
    if (!this.form.pristine) {
      this.confirmationService.confirm({
        header: "Deseja voltar?",
        message: "As alterações não serão salvas",
        closable: false,
        accept: () => { this.closeDialog(null) }
      });
    }
    else {
      this.closeDialog(null);
    }
  }
  //#endregion

  //#region Resources
  public loadClasses(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.apiService.getEntities("class").then((result: any) => {
          if (result) {
            this.classes = result.filter((x: any) => x.id != this.currentClass.id);
            resolve(result);
          }
        }, (error) => {
          reject(error);
        });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }
  //#endregion

  //#region Api requests

  public save(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        let entity: any = {};
        let redeploy: any = this.form.get("redeploy")!.value;

        if (this.isTeacher) {
          let teacher = this.form.get("member")!.value;
          entity.id = teacher.id;
          entity.member = teacher.member;
        }
        else {
          entity = this.form.get("member")!.value;
        }

        entity.class = redeploy;

        let controller: string = this.isTeacher ? "teacher" : "member"
        this.apiService.updateEntity(controller, entity.id, entity).then((result: any) => {
          if (result) {
            resolve(result);
            this.closeDialog(result);
          }
        }, (error: any) => {
          this.messageService.add({
            summary: "Erro ao salvar",
            detail: "Ocorreu um erro ao tentar remanejar!\nTente novamente.",
            closable: true,
            life: 3000,
            severity: "error"
          });
          console.log(error);
        });

      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }

  //#endregion
}
