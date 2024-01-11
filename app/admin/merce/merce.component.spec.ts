import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerceComponent } from './merce.component';

describe('MerceComponent', () => {
  let component: MerceComponent;
  let fixture: ComponentFixture<MerceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerceComponent]
    });
    fixture = TestBed.createComponent(MerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
