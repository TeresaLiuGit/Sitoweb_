import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerramentaComponent } from './ferramenta.component';

describe('FerramentaComponent', () => {
  let component: FerramentaComponent;
  let fixture: ComponentFixture<FerramentaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FerramentaComponent]
    });
    fixture = TestBed.createComponent(FerramentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
