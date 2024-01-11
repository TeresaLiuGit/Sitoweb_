import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbDonnaComponent } from './abb-donna.component';

describe('AbbDonnaComponent', () => {
  let component: AbbDonnaComponent;
  let fixture: ComponentFixture<AbbDonnaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbbDonnaComponent]
    });
    fixture = TestBed.createComponent(AbbDonnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
