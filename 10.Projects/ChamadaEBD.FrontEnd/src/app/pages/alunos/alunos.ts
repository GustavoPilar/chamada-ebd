import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  standalone: false,
  templateUrl: './alunos.html',
  styleUrl: './alunos.scss',
})
export class AlunosComponent implements OnInit {

  public students: any[];

  constructor() {
    this.students = [
      {
        name: "Gustavo",
        room: "Jovens",
        age: 21,
        active: true
      },
      {
        name: "Yasmin",
        room: "Jovens",
        age: 19,
        active: true
      }
    ]
  }

  ngOnInit(): void {

  }
}
