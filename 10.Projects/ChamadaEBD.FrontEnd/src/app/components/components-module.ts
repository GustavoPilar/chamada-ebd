import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { MenuBar } from './menu-bar/menu-bar';

// PrimeNG
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    MenuBar
  ],
  imports: [
    CommonModule,

    // PrimeNG,
    MenubarModule,
    ButtonModule
  ],
  exports: [
    MenuBar
  ]
})
export class ComponentsModule { }
