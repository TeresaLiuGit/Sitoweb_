import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOrdineComponent } from './form-ordine.component';

describe('FormOrdineComponent', () => {
  let component: FormOrdineComponent;
  let fixture: ComponentFixture<FormOrdineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormOrdineComponent]
    });
    fixture = TestBed.createComponent(FormOrdineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
