import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  standalone: false,
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.scss',
})
export class MenuBar {
  public items: MenuItem[];

  constructor(
    private router: Router
  ) {
    this.items = [
      {
        label: "Home",
        icon: PrimeIcons.HOME,
        command: () => this.router.navigate(["/home"])
      },
      {
        label: "Salas",
        icon: PrimeIcons.OBJECTS_COLUMN,
        command: () => this.router.navigate(["/rooms"])
      },
      {
        label: "Alunos",
        icon: PrimeIcons.USERS,
        command: () => this.router.navigate(["/students"])
      }
    ]
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    element.classList.toggle('my-app-dark');
  }
}
