import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioCalculadoraDivisasComponent } from './ejercicio-calculadora-divisas.component';

describe('EjercicioCalculadoraDivisasComponent', () => {
  let component: EjercicioCalculadoraDivisasComponent;
  let fixture: ComponentFixture<EjercicioCalculadoraDivisasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjercicioCalculadoraDivisasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjercicioCalculadoraDivisasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
