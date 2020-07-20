import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatSort,MatTableDataSource,MatSortable,MatPaginator } from "@angular/material";
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { RepositoriosService } from '../repositorios.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-lista-repositorios',
  templateUrl: './lista-repositorios.component.html',
  styleUrls: ['./lista-repositorios.component.css'],
})
export class ListaRepositoriosComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;

  length = 0;
  pageSize = 100;
  pageSizeOptions = [100];

  pageEvent: PageEvent;

  dataSource = [];
  displayedColumns: string[] = ['nome', 'descricao'];

  constructor(
    private repositorioService: RepositoriosService,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.repositorioService.buscouRepositorios.subscribe((data) => {
      this.length =this.repositorioService.numeroTotalDeRegistros;
      this.dataSource = this.repositorioService.repositorios;
      this.paginator.pageIndex = this.repositorioService.pagina;
      this.notifyService.showInfo('Os dados foram atualizados!', 'Atenção');
    });
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  onPaginateChange(event){
    this.repositorioService.pagina = event.pageIndex;
    this.repositorioService.getRepositories();
  }
}
