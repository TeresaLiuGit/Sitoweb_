import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFaceComponent } from './admin-face.component';

describe('AdminFaceComponent', () => {
  let component: AdminFaceComponent;
  let fixture: ComponentFixture<AdminFaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminFaceComponent]
    });
    fixture = TestBed.createComponent(AdminFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
