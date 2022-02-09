import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaLibreComponent } from './busqueda-libre.component';

describe('BusquedaLibreComponent', () => {
  let component: BusquedaLibreComponent;
  let fixture: ComponentFixture<BusquedaLibreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaLibreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaLibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
