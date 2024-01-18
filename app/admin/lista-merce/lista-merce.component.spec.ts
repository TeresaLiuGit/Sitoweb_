import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMerceComponent } from './lista-merce.component';

describe('ListaMerceComponent', () => {
  let component: ListaMerceComponent;
  let fixture: ComponentFixture<ListaMerceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaMerceComponent]
    });
    fixture = TestBed.createComponent(ListaMerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
