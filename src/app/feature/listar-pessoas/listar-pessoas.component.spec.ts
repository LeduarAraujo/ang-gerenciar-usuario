import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPessoasComponent } from './listar-pessoas.component';

describe('ListarPessoasComponent', () => {
  let component: ListarPessoasComponent;
  let fixture: ComponentFixture<ListarPessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPessoasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
