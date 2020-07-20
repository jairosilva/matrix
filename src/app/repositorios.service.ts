import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpClientModule } from '@angular/common/http';
import { Subject } from 'rxjs';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class RepositoriosService {

  public linguagem = 'java';
  public pagina = 0
  public itensPorPagina = 100
  public numeroTotalDeRegistros = 0;
  public repositorios = []
  public buscouRepositorios = new Subject();

  constructor(private http: HttpClient, private notifyService : NotificationService) {}

  getRepositories() {
    const url = 'http://localhost:8080/repositorios/' + this.linguagem + '/' + this.pagina + '/' + this.itensPorPagina;

    this.http.get<any>(url)
    .subscribe(
      (data) => {
        this.numeroTotalDeRegistros = data.total_count;
        this.repositorios = data.items;
        this.buscouRepositorios.next();
      },
      (error) => {
        this.notifyService.showError("Não foi possível buscar os dados!", "Erro");
      }
    );;
  }
}
