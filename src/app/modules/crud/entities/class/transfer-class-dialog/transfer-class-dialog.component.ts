import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DynamicDialogConfig } from "primeng/dynamicdialog";
import { ApiService } from "../../../../../services/api-service/api.service";
import { MessageService } from "primeng/api";

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
  //#endregion

  //#region Constructor
  constructor(private config: DynamicDialogConfig,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private messageService: MessageService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    let data = this.config.data;
    this.currentClass = data.currentClass;
    this.isTeacher = data.isTeacher;
    this.members = data.entities;
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
  //#endregion

  //#region Resources
  public loadClasses(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.apiService.getEntities("class").then((result: any) => {
          if (result) {
            this.classes = result;
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
}
