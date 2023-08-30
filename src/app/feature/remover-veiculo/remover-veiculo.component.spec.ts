import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverVeiculoComponent } from './remover-veiculo.component';

describe('RemoverVeiculoComponent', () => {
  let component: RemoverVeiculoComponent;
  let fixture: ComponentFixture<RemoverVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverVeiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoverVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
