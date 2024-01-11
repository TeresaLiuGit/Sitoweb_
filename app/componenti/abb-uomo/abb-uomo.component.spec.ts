import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbUomoComponent } from './abb-uomo.component';

describe('AbbUomoComponent', () => {
  let component: AbbUomoComponent;
  let fixture: ComponentFixture<AbbUomoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbbUomoComponent]
    });
    fixture = TestBed.createComponent(AbbUomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
