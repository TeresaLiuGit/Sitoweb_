import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArredamentoComponent } from './arredamento.component';

describe('ArredamentoComponent', () => {
  let component: ArredamentoComponent;
  let fixture: ComponentFixture<ArredamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArredamentoComponent]
    });
    fixture = TestBed.createComponent(ArredamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
