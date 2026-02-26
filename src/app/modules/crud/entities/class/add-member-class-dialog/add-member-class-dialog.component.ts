import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ConfirmationService, MessageService } from "primeng/api";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { ApiService } from "../../../../../services/api-service/api.service";

@Component({
  selector: "app-add-member-class-dialog",
  templateUrl: "./add-member-class-dialog.component.html",
  standalone: false
})
export class AddMemberClassDialogComponent implements OnInit {

  //#region  Fields
  public class!: any;
  public members!: any[];

  public form!: FormGroup;
  //#endregion

  //#region Constructor
  constructor(private viewRef: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    let data = config.data;
    this.class = data.class;
  }
  //#endregion

  //#region OnInit
  public ngOnInit(): void {
    this.loadMemberWithoutClass().then((result: any) => {
      if (result) {
        this.initForm();
        this.changeDetectorRef.detectChanges();
      }
    }, (error: any) => {
      this.members = [];
      this.messageService.add({
        summary: "Erro ao carregar",
        detail: "Ocorreu um erro ao tentar carregar os membros",
        life: 3000,
        closable: true,
        severity: "error"
      });

      this.initForm();
    });
  }
  //#endregion

  //#region Members
  public initForm(): void {
    this.form = this.formBuilder.group({
      member: [
        null,
        Validators.required
      ]
    });
  }

  public getField(field: string): AbstractControl {
    return this.form.get(field) as AbstractControl ?? null;
  }
  //#endregion

  //#region Resources
  public loadMemberWithoutClass(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.apiService.getEntities("member/withoutClass").then((result: any) => {
          if (result) {
            this.members = result;
            resolve(result);
          }
        }, (error: any) => {
          reject(error);
        })
      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }
  //#endregion
}
