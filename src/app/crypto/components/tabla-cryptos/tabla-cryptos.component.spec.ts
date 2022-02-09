import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCryptosComponent } from './tabla-cryptos.component';

describe('TablaCryptosComponent', () => {
  let component: TablaCryptosComponent;
  let fixture: ComponentFixture<TablaCryptosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaCryptosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCryptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
