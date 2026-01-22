import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salas',
  standalone: false,
  templateUrl: './salas.html',
  styleUrl: './salas.scss',
})
export class SalasComponent implements OnInit {

  public rooms: any[] = [];

  constructor() {
    this.rooms = [
      {
        code: "Mini",
        description: "Sala dos pequenos",
        teacher: "Wal"
      },
      {
        code: "Catecúmenos",
        description: "Novos membros",
        teacher: "Diogo"
      }
    ]
  }

  ngOnInit(): void {
    
  }

}
