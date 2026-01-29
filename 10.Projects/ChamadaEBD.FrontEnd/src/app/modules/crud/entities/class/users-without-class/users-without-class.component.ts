import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { ApiService } from "../../../../../services/communication/api.service";
import { Observable, Subject } from "rxjs";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-users-without-class",
  templateUrl: "./users-without-class.component.html",
  styleUrl: "./users.without-class.component.css",
  standalone: false
})
export class UsersWithoutClassComponent implements OnInit {

  //#region Fields
  public classId: number;
  public isTeacher: boolean;

  public users: any[];
  public userFiltered: any[] = [];

  public form: FormGroup;
  //#endregion

  constructor(private dynamicDialogConfig: DynamicDialogConfig,
    private dynamicDialogRef: DynamicDialogRef,
    private apiService: ApiService,
    private changeDetectorRef: ChangeDetectorRef,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {
    let data = this.dynamicDialogConfig.data;
    this.classId = data.classId;
    this.isTeacher = data.isTeacher;
  }

  ngOnInit(): void {
    this.initForm();

    this.loadUsersWithoutClass().then((result) => {
      this.users = result.map((x: any) => x = { ...x, added: false });
      this.userFiltered = this.users;
      this.changeDetectorRef.detectChanges();
    });
  }

  public save(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        let newUsers = this.users.filter((x: any) => x.added == true)
          .map((x) => x = { id: 0, classId: this.classId, userId: x.id, isTeacher: this.isTeacher, code: "", description: "" });

        this.apiService.PostRange("usersClasses", newUsers).then((result: any) => {
          if (result) {
            this.dynamicDialogRef.close(newUsers);
            resolve(newUsers);
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

  public cancel(): void {
    this.dynamicDialogRef.close(null);
  }

  public initForm(): void {
    this.form = this.formBuilder.group({
      name: [null],
      age: [null]
    });
  }

  public loadUsersWithoutClass(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.apiService.GetUsersWithoutClass().then((result: any) => {
          if (result) {
            resolve(result);
          }
        });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  public addOrRemoveUser(entity: any): void {
    entity.added = !entity.added;
  }

  public filter(): void {
    let filters = this.form.value;
    this.userFiltered = this.users;

    if (filters.name != null && filters.name != "") {
      this.userFiltered = this.userFiltered.filter((x: any) => x.name.toLowerCase().includes(filters.name.toLocaleLowerCase()));
    }

    if (filters.age != null) {
      this.userFiltered = this.userFiltered.filter((x: any) => x.age == filters.age);
    }
  }
}
