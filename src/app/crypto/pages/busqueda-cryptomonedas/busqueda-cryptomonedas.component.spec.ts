import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaCryptomonedasComponent } from './busqueda-cryptomonedas.component';

describe('BusquedaCryptomonedasComponent', () => {
  let component: BusquedaCryptomonedasComponent;
  let fixture: ComponentFixture<BusquedaCryptomonedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaCryptomonedasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaCryptomonedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
