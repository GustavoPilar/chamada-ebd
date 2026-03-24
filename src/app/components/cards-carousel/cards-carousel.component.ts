import { Component, HostListener, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem, PrimeIcons } from "primeng/api";

@Component({
  selector: "app-cards-carousel",
  standalone: false,
  templateUrl: "./cards-carousel.component.html"
})
export class CardsCarouselComponent implements OnInit {

  //#region Fields

  /** Items para o card */
  @Input()
  public items: MenuItem[] = [];

  /** Rota prévia */
  @Input()
  public prevRouterLink!: string;

  // Carousel

  /** Intervalo de rolagem automática (segundos) */
  @Input()
  public autoplayInterval: number = 0;

  /** Opções de responsividade */
  @Input()
  public responsiveOptions: any[] = [];

  /** Quantidade visível */
  @Input()
  public numVisible: number = 1;

  /** Rolagem circular? */
  @Input()
  public circular: boolean = false;



  //#endregion

  //#region Constructor
  constructor(private router: Router) {

  }
  //#endregion

  //#region OnInit()
  public ngOnInit(): void {
  }
  //#endregion

  //#region Members

  /**
   * @description Navega até o alvo
   * @param target Alvo
   * @returns {void} Vazio
   */
  public navigateTo(target: string): void {
    this.router.navigate([this.prevRouterLink, target]);
  }

  /**
   * @description Transforma o texto em minúsculo
   * @param label Texto
   * @returns {string} Texto
   */
  public getLower(label: string): string {
    return label.toLowerCase();
  }

  //#endregion

}
