import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ApiService } from '../../../../services/communication/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentCheckin, TeacherCheckin } from '../../../../models/entities';
import { MessageService } from 'primeng/api';

@Component({
    selector: "app-dialog-checkin-dialog",
    standalone: false,
    templateUrl: "./checkin-dialog.component.html"
})
export class CheckinDialogComponent implements OnInit {
    //#region 
    public classRoom: any;

    public selectedOption: any;
    public checkinOptions: any[] = [];

    public checkins: any[] = [];
    public users: any[] = [];
    //#endregion

    //#region Constructor
    constructor(public apiService: ApiService,
        private dynamicDialogConfig: DynamicDialogConfig,
        private changeDetectorRef: ChangeDetectorRef,
        private messageService: MessageService
    ) {
        let data = this.dynamicDialogConfig.data;
        this.classRoom = data;
    }
    //#endregion

    //#region OnInit
    ngOnInit(): void {
        this.initCheckinOptions();
        this.selectedOption = this.checkinOptions[0];
        this.loadCheckins().then((result) => {
            if (result) {
                this.checkCheckins()
                this.changeDetectorRef.detectChanges();
            }
        });
    }
    //#endregion

    //#region

    public initCheckinOptions(): void {
        this.checkinOptions = [
            {
                id: 1,
                value: "student",
                checkin: "studentCheckin",
                description: "Alunos"
            },
            {
                id: 2,
                value: "teacher",
                checkin: "teacherCheckin",
                description: "Professores"
            }
        ];
    }

    public loadCheckins(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            try {
                this.apiService.getEntityByClassRoom(this.selectedOption.checkin, this.classRoom.id).then((result) => {
                    if (result) {
                        result.sort((a: any, b: any) => a.userId - b.userId);

                        this.checkins = result;

                        this.apiService.getEntityByClassRoom(this.selectedOption.value, this.classRoom.id) // => Carrega os alunos da sala
                            .then((resultUsers) => {
                                if (resultUsers) {
                                    resultUsers.sort((a: any, b: any) => a.id - b.id);

                                    this.users = resultUsers;
                                    resolve(result);
                                }
                            });
                    }
                })
            } catch (error) {
                console.log(error);
                reject(error);
            }
        })
    }

    public checkCheckins(): void {
        this.users.forEach((element, index) => {
            if (this.checkins[index] == null) {
                let newEntity: any = {
                    id: 0,
                    studentId: element.id,
                    classRoomId: this.classRoom.id,
                    code: element.code,
                    dateTimeCheckin: new Date(),
                    description: element.description,
                    attendance: false
                };

                this.checkins.push(newEntity);
            }
        });
    }

    public changeAttendance(entity: any): void {
        entity.attendance = !entity.attendance;
    }

    public save(): void {
        this.apiService.PostRange(this.selectedOption.checkin, this.checkins).then((result: any) => {
            if (result) {
                this.messageService.add({
                    summary: "Registros salvos",
                    detail: "A chamada foi salva com sucesso",
                    life: 3000,
                    severity: "success"
                })
            }
        })
    }
    //#endregion
}
