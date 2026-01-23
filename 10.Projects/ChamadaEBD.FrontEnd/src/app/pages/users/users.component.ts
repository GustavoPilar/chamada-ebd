import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/communication/api.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ConfirmationService, PrimeIcons } from "primeng/api";

@Component({
    selector: "app-users",
    templateUrl: "./users.component.html",
    styleUrl: "./users.component.css",
    standalone: false,
    providers: [ApiService]
})
export class UserComponent implements OnInit {

    public users: any[] = [];
    public visible: boolean = false;
    public entityForm: FormGroup;
    public selectedEntity: any;
    public formDescription: string;

    constructor(private apiService: ApiService,
        private formBuilder: FormBuilder,
        private confirmationService: ConfirmationService,
        private changeDetectorRef: ChangeDetectorRef
    ) {

    }

    ngOnInit(): void {
        this.apiService.Get("user").then((result) => {
            if (result) {
                this.users = result;
                this.changeDetectorRef.detectChanges();
            }
        });
    }

    public showForm(entity: any): void {
        this.formDescription = entity?.name ?? "Novo aluno";
        this.selectedEntity = entity ?? { id: 0 };
        this.entityForm = this.createForm();
        this.visible = true;
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
            code: [
                this.selectedEntity.code,
                Validators.required
            ],
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
            phone: [
                this.selectedEntity.phone,
                Validators.required
            ]
        });
    }
}
