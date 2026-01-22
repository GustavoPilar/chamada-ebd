import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  standalone: false,
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.scss',
})
export class MenuBar {
  public items: MenuItem[];

  constructor() {
    this.items = [
      {
        label: "Home",
        icon: PrimeIcons.HOME
      },
      {
        label: "Salas",
        icon: PrimeIcons.OBJECTS_COLUMN
      }
    ]
  }
}
