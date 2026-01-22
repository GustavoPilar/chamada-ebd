import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmationService, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-salas',
  standalone: false,
  templateUrl: './salas.html',
  styleUrl: './salas.scss',
})
export class SalasComponent implements OnInit {

  public rooms: any[] = [];
  public teachers: any[] = [];
  public visible: boolean = false;
  public formDescription: string;
  public selectedEntity: any;
  public entityForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService
  ) {
    this.rooms = [
      {
        code: "Mini",
        description: "Sala dos pequenos",
        teacher: {
          id: 1,
          name: "Guilherme"
        }
      },
      {
        code: "Catecúmenos",
        description: "Novos membros",
        teacher: {
          id: 2,
          name: "Diogo"
        }
      }
    ]
  }

  ngOnInit(): void {

  }

  public showForm(entity: any): void {
    this.formDescription = entity ? entity.description : "Sala nova";
    this.selectedEntity = entity ?? { id: 0 };
    this.resourcesAsync().then((result) => {
      if (result) {
        this.entityForm = this.createForm();
        this.visible = true;
      }
    })
  }

  public closeForm(): void {
    const closeAllvariables = () => {
      this.visible = false;
      this.formDescription = "";
      this.selectedEntity = null;
      this.entityForm = null;
      this.teachers = [];
    }

    if (this.entityForm && !this.entityForm.pristine) {
      this.confirmationService.confirm({
        header: "Dejesa cancelar?",
        message: "Se você voltar, perderá todo o progresso.",
        icon: PrimeIcons.QUESTION,
        accept: () => closeAllvariables()
      });
    }
    else {
      closeAllvariables();
    }
  }

  public async resourcesAsync(): Promise<any> {
    return Promise.all([
      this.getTeachersAsync()
    ])
  }

  public createForm(): FormGroup {
    return this.formBuilder.group({
      code: [
        this.selectedEntity.code,
        Validators.required
      ],
      description: [
        this.selectedEntity.description,
        Validators.required
      ],
      teacher: [
        this.selectedEntity.teacher,
        Validators.required
      ]
    });
  }

  public async getTeachersAsync(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        this.teachers = [
          {
            id: 1,
            name: "Guilherme"
          },
          {
            id: 2,
            name: "Diogo"
          }
        ];

        resolve(this.teachers);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
}
