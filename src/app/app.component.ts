import { Component } from '@angular/core';
import { RepositoriosService } from './repositorios.service';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    linguagem = 'java';
  processando = false;
  textoBotao = 'Pesquisar';

  constructor(private repositorioService: RepositoriosService) { }

  ngOnInit(): void {
    this.repositorioService.buscouRepositorios.subscribe((data) => {
      this.processando = false;
      this.textoBotao = 'Pesquisar';
    });

    this.buscaRepositorios();
  }

  buscaRepositorios() {
    this.processando = true;
    this.textoBotao = 'Pesquisando';

    this.repositorioService.linguagem = this.linguagem;
    this.repositorioService.pagina = 0;
    this.repositorioService.getRepositories();
  }
}
