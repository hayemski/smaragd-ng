import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorinterceptorComponent } from './errorinterceptor.component';

describe('ErrorinterceptorComponent', () => {
  let component: ErrorinterceptorComponent;
  let fixture: ComponentFixture<ErrorinterceptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorinterceptorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorinterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
