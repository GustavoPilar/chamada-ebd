import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { icon } from '@primeuix/themes/aura/avatar';
import { ConfirmationService, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-alunos',
  standalone: false,
  templateUrl: './alunos.html',
  styleUrl: './alunos.scss',
})
export class AlunosComponent implements OnInit {

  public students: any[];
  public rooms: any[];
  public visible: boolean = false;
  public entityForm: FormGroup;
  public selectedEntity: any;
  public formDescription: string;

  constructor(
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService
  ) {
    this.students = [
      {
        name: "Gustavo",
        room: {
          id: 2,
          code: "Catecúmenos"
        },
        age: 21,
        active: true
      },
      {
        name: "Yasmin",
        room: {
          id: 1,
          code: "Mini"
        },
        age: 19,
        active: true
      }
    ]
  }

  ngOnInit(): void {

  }

  public showForm(entity: any): void {
    this.formDescription = entity?.name ?? "Novo aluno";
    this.selectedEntity = entity ?? { id: 0 };
    this.resources().then((result) => {
      if (result) {
        this.entityForm = this.createForm();
        this.visible = true;
      }
    });
  }

  public closeForm(): void {
    const closeAllvariables = () => {
      this.visible = false;
      this.formDescription = "";
      this.entityForm = null;
      this.selectedEntity = null;
    }

    if (!this.entityForm.pristine) {
      this.confirmationService.confirm({
        header: "Deseja cancelar?",
        message: "Se você voltar, perderá todo seu progresso.",
        icon: PrimeIcons.EXCLAMATION_TRIANGLE,
        accept: () => closeAllvariables()
      });
    }
    else {
      closeAllvariables();
    }
  }

  public createForm(): FormGroup {
    return this.formBuilder.group({
      name: [
        this.selectedEntity.name,
        Validators.required
      ],
      age: [
        this.selectedEntity.age,
        Validators.required
      ],
      active: [
        this.selectedEntity.active ?? false,
        Validators.required
      ],
      room: [
        this.selectedEntity.room,
        Validators.required
      ]
    });
  }

  public resources(): Promise<any> {
    return Promise.all([
      this.getRooms()
    ]);
  }

  public getRooms(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.rooms = [
          {
            id: 1,
            code: "Mini"
          },
          {
            id: 2,
            code: "Catecúmenos"
          }
        ];
        resolve(this.rooms);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
}
