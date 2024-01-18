import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMerceComponent } from './form-merce.component';

describe('FormMerceComponent', () => {
  let component: FormMerceComponent;
  let fixture: ComponentFixture<FormMerceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormMerceComponent]
    });
    fixture = TestBed.createComponent(FormMerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
