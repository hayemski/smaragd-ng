import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmenaKorisnikComponent } from './izmena-korisnik.component';

describe('IzmenaKorisnikComponent', () => {
  let component: IzmenaKorisnikComponent;
  let fixture: ComponentFixture<IzmenaKorisnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzmenaKorisnikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmenaKorisnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
