import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdajaZlatoComponent } from './prodaja-zlato.component';

describe('ProdajaZlatoComponent', () => {
  let component: ProdajaZlatoComponent;
  let fixture: ComponentFixture<ProdajaZlatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdajaZlatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdajaZlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
