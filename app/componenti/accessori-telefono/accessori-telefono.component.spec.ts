import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriTelefonoComponent } from './accessori-telefono.component';

describe('AccessoriTelefonoComponent', () => {
  let component: AccessoriTelefonoComponent;
  let fixture: ComponentFixture<AccessoriTelefonoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessoriTelefonoComponent]
    });
    fixture = TestBed.createComponent(AccessoriTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
