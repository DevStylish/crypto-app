import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCryptoComponent } from './detalle-crypto.component';

describe('DetalleCryptoComponent', () => {
  let component: DetalleCryptoComponent;
  let fixture: ComponentFixture<DetalleCryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleCryptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
