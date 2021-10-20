import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopravkeListComponent } from './popravke-list.component';

describe('PopravkeListComponent', () => {
  let component: PopravkeListComponent;
  let fixture: ComponentFixture<PopravkeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopravkeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopravkeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
