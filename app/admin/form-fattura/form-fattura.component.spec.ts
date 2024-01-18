import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFatturaComponent } from './form-fattura.component';

describe('FormFatturaComponent', () => {
  let component: FormFatturaComponent;
  let fixture: ComponentFixture<FormFatturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormFatturaComponent]
    });
    fixture = TestBed.createComponent(FormFatturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
