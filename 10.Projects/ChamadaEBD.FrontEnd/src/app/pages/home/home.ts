import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private router: Router) {
    this.options = [
      {
        label: "Salas",
        icon: PrimeIcons.OBJECTS_COLUMN,
        target: "rooms"
      },
      {
        label: "Alunos",
        icon: PrimeIcons.LIST,
        target: "students"
      }
    ]
  }

  ngOnInit(): void {
    
  }

  public navigateTo(target: string): void {
    this.router.navigate(["", target]);
  }
}
