import { Inject, Injectable } from "@angular/core";
import { MenuItem, PrimeIcons } from "primeng/api";

@Injectable({
  providedIn: "root"
})
export class MenuSelectionService {

  //#region Constructor
  constructor() {

  }
  //#endregion

  //#region Members :: GetManagerOptions(), GetApplicationOptions()

  /**
   * @description Retorna as opções de menu para Cadastros
   * @returns {MenuItem} Opção de cadastros
   */
  public GetManagerOption(): MenuItem {
    const rootLink: string = "/manager/list";

    const root: MenuItem = {
      label: "Cadastros",
      icon: PrimeIcons.LIST
    };

    const childs: MenuItem[] = [
      { label: "Alunos", title: "Adicione, remova ou atualize alunos", routerLink: `${rootLink}/member`, icon: PrimeIcons.USER },
      { label: "Casamentos", title: "Adicione, remova ou atualize aniversários de casamento", routerLink: `${rootLink}/weddingDate`, icon: PrimeIcons.GIFT },
      { label: "Classes", title: "Adicione, remova ou atualize classes", routerLink: `${rootLink}/class`, icon: PrimeIcons.OBJECTS_COLUMN },
    ]

    root.items = childs;

    return root;
  }

  /**
   * @description Retorna as opções de menu para Aplicação
   * @returns {MenuItem} Opção de aplicações
   */
  public GetApplicationOption(): MenuItem {
    const rootLink: string = "application/"

    const root: MenuItem = {
      label: "Aplicação",
      icon: PrimeIcons.LIST
    };

    const childs: MenuItem[] = [
      { label: "Chamada", title: "Faça a chamada de uma classe", routerLink: `${rootLink}/class-roll`, icon: PrimeIcons.TICKET }
    ];

    root.items = childs;

    return root;
  }

  /**
   * @description Retorna todas as opções de menus
   * @returns {MenuItem[]} Opções de menus
   */
  public GetAllOptions(): MenuItem[] {
    let all: MenuItem[] = [
      this.GetManagerOption(),
      this.GetApplicationOption()
    ];

    return all;
  }

  //#endregion

}
