import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopravkeCreateComponent } from './popravke-create.component';

describe('PopravkeCreateComponent', () => {
  let component: PopravkeCreateComponent;
  let fixture: ComponentFixture<PopravkeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopravkeCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopravkeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
