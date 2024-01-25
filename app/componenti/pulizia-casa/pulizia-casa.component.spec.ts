import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuliziaCasaComponent } from './pulizia-casa.component';

describe('PuliziaCasaComponent', () => {
  let component: PuliziaCasaComponent;
  let fixture: ComponentFixture<PuliziaCasaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuliziaCasaComponent]
    });
    fixture = TestBed.createComponent(PuliziaCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
