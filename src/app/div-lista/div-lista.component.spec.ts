import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivListaComponent } from './div-lista.component';

describe('DivListaComponent', () => {
  let component: DivListaComponent;
  let fixture: ComponentFixture<DivListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
