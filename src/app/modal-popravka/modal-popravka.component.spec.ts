import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPopravkaComponent } from './modal-popravka.component';

describe('ModalPopravkaComponent', () => {
  let component: ModalPopravkaComponent;
  let fixture: ComponentFixture<ModalPopravkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPopravkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPopravkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
