import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ontop';
  PaginaActiva: number = 1;

  public navbarCollapsed = true;

  public setPaginaActiva(arg: number) {
    this.PaginaActiva = arg;
  }

  comprobarPaginaActiva(arg: number): boolean {
    return this.PaginaActiva == arg;
  }
}
