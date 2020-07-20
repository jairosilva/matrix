import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRepositoriosComponent } from './lista-repositorios.component';

describe('ListaRepositoriosComponent', () => {
  let component: ListaRepositoriosComponent;
  let fixture: ComponentFixture<ListaRepositoriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRepositoriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRepositoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
