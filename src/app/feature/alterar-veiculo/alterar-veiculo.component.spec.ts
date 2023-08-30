import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarVeiculoComponent } from './alterar-veiculo.component';

describe('AlterarVeiculoComponent', () => {
  let component: AlterarVeiculoComponent;
  let fixture: ComponentFixture<AlterarVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarVeiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterarVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
