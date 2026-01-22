import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent implements OnInit {

  options: any[] = [];

  constructor() {
    this.options = [
      {
        label: "Cadastros",
        icon: PrimeIcons.LIST
      },
      {
        label: "Salas",
        icon: PrimeIcons.OBJECTS_COLUMN
      },
      {
        label: "Alunos",
        icon: PrimeIcons.USERS
      }
    ]
  }

  ngOnInit(): void {
    
  }

  teste(): void {
    alert("funcionou");
  }
}
