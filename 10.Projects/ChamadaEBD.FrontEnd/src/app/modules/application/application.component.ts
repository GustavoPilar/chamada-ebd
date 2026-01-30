import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "../../services/communication/api.service";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-application",
  templateUrl: "./application.component.html",
  styleUrl: "./application.component.css",
  standalone: false
})
export class ApplicationComponent implements OnInit {

  //#region Filds
  public entityForm: FormGroup;
  public canSave: boolean = false;

  public classes: any[] = [];
  public users: any[] = [];
  public checkins: any[] = [];

  public selectedClass: any;
  public registerDateTime: Date;
  //#endregion

  //#region Consutructor
  constructor(private formBuilder: FormBuilder,
    private apiService: ApiService,
    private changeDetectorRef: ChangeDetectorRef,
    private messageService: MessageService
  ) {

  }

  //#region OnInit
  ngOnInit(): void {
    this.initForm();
    this.loadClasses();
  }
  //#endregion

  //#region Members :: InitForm

  /**
   * @description Inicia o formulário
   * @returns void
   */
  public initForm(): void {
    this.entityForm = this.formBuilder.group({
      class: [null, Validators.required],
      registerDateTime: [null, Validators.required]
    });
  }

  public canSearch(): boolean {
    return this.entityForm.valid;
  }

  public searchCheckins(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        let entityFormValue = this.entityForm.value;
        this.selectedClass = entityFormValue.class;
        this.registerDateTime = entityFormValue.registerDateTime;

        this.loadUsersByClass().then((users: any) => {
          if (users) {
            this.apiService.GetCheckinsByClassAndRegisterDateTime(this.selectedClass.id, this.registerDateTime).then((checkins: any) => {
              if (checkins) {
                this.checkins = checkins;

                if (this.checkins.length > 0) {
                  this.checkins = checkins.map((x: any) => x = {
                    ...x,
                    classDescription: this.selectedClass.description,
                    userDescription: this.users.find((value: any) => value.id == x.userId).name
                  });

                  let usersFilteredIds = this.checkins.map((x: any) => x.userId);
                  let usersFiltered = this.users.filter((x: any) => !usersFilteredIds.includes(x.id));

                  usersFiltered.forEach((user: any) => {
                    this.checkins.push({
                      id: 0,
                      code: "",
                      description: "",
                      classId: this.selectedClass.id,
                      classDescription: this.selectedClass.description,
                      userId: user.id,
                      userDescription: user.name,
                      isPresent: false,
                      registerDateTime: this.registerDateTime
                    });
                  });
                }
                else {
                  this.users.forEach((user: any) => {
                    this.checkins.push({
                      id: 0,
                      classId: this.selectedClass.id,
                      classDescription: this.selectedClass.description,
                      userId: user.id,
                      userDescription: user.name,
                      isPresent: false,
                      registerDateTime: this.registerDateTime
                    });
                  });
                }

                this.canSave = true;
                this.changeDetectorRef.detectChanges();
                resolve(checkins);
              }
            });
          }
        });

      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }

  public onChangeAttendance(checkin: any): void {
    checkin.isPresent = !checkin.isPresent
  }

  public saveCheckins(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.apiService.PostRange("Checkin", this.checkins).then((result: any) => {
          if (result) {

            this.messageService.add({
              summary: "Salva!",
              detail: "A chamada foi salva com sucesso.",
              severity: "success",
              life: 1500
            });

            this.entityForm.reset();
            this.checkins = [];
            this.canSave = false;
            this.changeDetectorRef.detectChanges();
            resolve(result);
          }
        });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }
  //#endregion

  //#region Resources :: LoadClasses
  public loadClasses(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.apiService.Get("Class").then((result) => {
          if (result) {
            this.classes = result;
            this.changeDetectorRef.detectChanges();
            resolve(result);
          }
        });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }

  public loadUsersByClass(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.apiService.GetUsersByClassId(this.selectedClass.id).then((result) => {
          if (result) {
            this.users = result;
            this.changeDetectorRef.detectChanges();
            resolve(result);
          }
        });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
  //#endregion
}
