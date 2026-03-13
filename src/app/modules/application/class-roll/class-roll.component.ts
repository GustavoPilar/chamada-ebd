import { ChangeDetectorRef, Component, Inject, OnInit } from "@angular/core";
import { ApiService } from "../../../services/communication/api.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Attendance, Class, ClassRoll } from "../../../models/entities";
import { NgxSpinnerService } from "ngx-spinner";
import { forkJoin, tap } from "rxjs";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { MessageService, PrimeIcons } from "primeng/api";
import { AttendanceOptionDialogComponent } from "./attendance-option-dialog/attendance-option-dialog.component";

@Component({
  selector: "app-class-roll",
  standalone: false,
  templateUrl: "./class-roll.component.html"
})
export class ClassRollComponent implements OnInit {

  //#region Fields
  public form!: FormGroup;

  public classes!: Class[];
  public dates!: any[]

  public filtered: boolean = false;
  public expandedRows = {};
  public classRoll!: ClassRoll[];

  public attendanceDialog!: DynamicDialogRef<AttendanceOptionDialogComponent> | null;
  //#endregion

  //#region Constructor
  constructor(@Inject(ApiService) private apiService: ApiService,
    @Inject(MessageService) private messageService: MessageService,
    private loaderService: NgxSpinnerService,
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef,
    private dialogService: DialogService
  ) {

  }
  //#endregion

  //#region OnInit
  public ngOnInit(): void {
    this.createForm();
    this.loadClasses();
  }
  //#endregion

  //#region Members

  public createForm(): void {
    this.form = this.formBuilder.group({
      class: [
        null,
        Validators.required
      ]
    });
  }

  public loadClasses(): void {
    this.loaderService.show();

    this.apiService.getEntities<Class>("class").subscribe({
      next: (result: Class[]) => {
        this.classes = result;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err);
        this.showErrorMessage();
        this.loaderService.hide();
      },
      complete: () => {
        this.loaderService.hide();
      }
    });
  }

  public loadResources(): void {
    this.loaderService.show();

    let selectedClass: Class = this.form.get('class')?.value;

    forkJoin({
      dates: this.apiService.getEntities<any>(`classroll/${selectedClass.name}/dates`),
      classRoll: this.apiService.getEntities<ClassRoll>(`classroll/${selectedClass.name}`)
    }).pipe(
      tap(({ dates, classRoll }) => {
        this.dates = dates.map((x: any) => x = { id: dates.indexOf(x), date: x });
        this.classRoll = classRoll;
      })
    ).subscribe({
      next: (result) => {
        this.filtered = true;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err);
        this.showErrorMessage();
        this.loaderService.hide();
      },
      complete: () => {
        this.loaderService.hide();
      }
    })
  }

  public loadDates(): void {
    this.loaderService.show();

    let selectedClass: Class = this.form.get('class')?.value;

    this.apiService.getEntities<any>(`classroll/${selectedClass.name}/dates`).subscribe({
      next: (result) => {
        this.dates = result.map((x: any) => x = { id: result.indexOf(x), date: x });
        this.filtered = true;
        this.cdr.detectChanges();
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

  public showErrorMessage(): void {
    this.messageService.add({
      summary: "Erro",
      detail: "Erro ao carregar os registros",
      severity: "error",
      life: 1500
    });
  }

  public showSuccessMessage(text: string): void {
    this.messageService.add({
      summary: "Sucesso",
      detail: text,
      severity: "success",
      closable: true,
      life: 1500
    });
  }

  public getClassRollByDate(date: string): ClassRoll[] {

    let filtered: ClassRoll[] = this.classRoll.map(x => {
      let att = x.attendances;

      return {
        ...x, attendances: att.filter(x => {
          let classDate = x.date;

          return new Date(classDate).toLocaleDateString() == date;
        })
      }
    });

    return filtered;
  }

  public getAttendance(attendances: Attendance[]): Attendance {
    return attendances != null && attendances.length > 0
      ? attendances[0]
      : new Attendance();
  }

  public getAttendanceString(attendance: Attendance): string {
    if (attendance.isPresent == null)
      return "Pendente";

    return attendance.isPresent ? "Presente" : "Faltou"
  }

  public getAttendanceIcon(attendance: Attendance): string {
    if (attendance.isPresent == null)
      return PrimeIcons.MINUS;

    return attendance.isPresent ? PrimeIcons.CHECK : PrimeIcons.TIMES;
  }

  public getAttendanceClass(attendance: Attendance): string {
    if (attendance.isPresent == null)
      return "bg-gray-300 text-gray-600";

    return attendance.isPresent ? "" : "bg-red-200 text-red-600";
  }

  public openDialog(classRoll: ClassRoll, attendances: Attendance[]): void {
    let att: Attendance = this.getAttendance(attendances);

    let data = {
      attendance: att
    }

    this.attendanceDialog = this.dialogService.open(AttendanceOptionDialogComponent, {
      data,
      header: "Opção da chamada",
      closable: true,
      draggable: false,
      styleClass: "w-auto h-auto",
      closeOnEscape: false
    });

    this.attendanceDialog?.onClose.subscribe({
      next: (result) => {
        if (result && result.save) {

          att.isPresent = result.value;

          this.changeAttendance(classRoll, att);
        }
      }
    })
  }

  public changeAttendance(classRoll: ClassRoll, att: Attendance): void {
    this.loaderService.show();

    let className: string = this.form.get("class")?.value.name;

    this.apiService.updateAttendance(className, classRoll.id, att).subscribe({
      next: () => {
        this.showSuccessMessage("Registro de presença atualizado!");
        this.cdr.detectChanges();
      },
      error: (err) => {
        att.isPresent = att.isPresent != null ? !att.isPresent : undefined;
        console.log(err);
        this.loaderService.hide();
      },
      complete: () => { this.loaderService.hide(); }
    });
  }

  //#endregion

}
