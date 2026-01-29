import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { ApiService } from "../../../../../services/communication/api.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-users-class-view",
  templateUrl: "./users-class-view.component.html",
  styleUrl: "./users-class-view.component.css",
  standalone: false
})
export class UsersClassViewComponnet implements OnInit {

  //#region
  public users: any[] = [];
  public usersFiltered: any[] = [];
  public classId: number;
  public isTeacher: boolean;

  public form: FormGroup;
  //#endregion

  constructor(private dynamicDialogRef: DynamicDialogRef,
    private dynamicDialogConfig: DynamicDialogConfig,
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
    private messageService: MessageService
  ) {
    let data = this.dynamicDialogConfig.data;
    this.classId = data.classId;
    this.isTeacher = data.isTeacher;
  }

  ngOnInit(): void {
    this.initForm();

    this.loadUsers().then((result: any) => {
      this.usersFiltered = result;
      this.changeDetectorRef.detectChanges();
    });
  }

  //#region Memebers :: InitForm
  public initForm(): void {
    this.form = this.formBuilder.group({
      name: [null],
      age: [null]
    });
  }

  public loadUsers(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.apiService.Get(`User/byClassId/${this.classId}/${this.isTeacher}`).then((result: any) => {
          if (result) {
            this.users = result.map((x: any) => x = { ...x, removed: false });
            resolve(this.users);
          }
        });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  public filter(): void {
    let filters = this.form.value;
    this.usersFiltered = this.users;

    if (filters.name != null && filters.name != "") {
      this.usersFiltered = this.usersFiltered.filter((x: any) => x.name.toLowerCase().includes(filters.name.toLocaleLowerCase()));
    }

    if (filters.age != null) {
      this.usersFiltered = this.usersFiltered.filter((x: any) => x.age == filters.age);
    }
  }

  public save(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        let removedUsers = this.users.filter((x: any) => x.removed == true).map((x: any) => x.id);
        console.log(removedUsers);
        this.loadUsersClasses(removedUsers).then((result) => {
          if (result) {
            this.apiService.DeleteRange("UsersClasses", result).then((result: any) => {
              if (result) {
                this.dynamicDialogRef.close(result);
                resolve(result);
              }
            });
          }
        });
      } catch (error) {
        console.log(error);
        this.messageService.add({
          summary: "Erro ao salvar!",
          detail: error,
          severity: "danger",
          life: 3000
        });
        reject(error);
      }
    })
  }

  public loadUsersClasses(ids: number[]): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.apiService.GetListUsersClassesByIds("Users", ids).then((result: any) => {
          if (result) {
            resolve(result);
          }
        });
      } catch (error) {
        console.log(error);
        this.messageService.add({
          summary: "Erro ao salvar!",
          detail: error,
          severity: "danger",
          life: 3000
        });
        reject(error);
      }
    })
  }

  public addOrRemoveUser(event: any): void {
    event.removed = !event.removed;
  }
  //#endregion

}
