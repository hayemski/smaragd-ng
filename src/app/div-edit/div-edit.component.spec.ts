import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivEditComponent } from './div-edit.component';

describe('DivEditComponent', () => {
  let component: DivEditComponent;
  let fixture: ComponentFixture<DivEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
