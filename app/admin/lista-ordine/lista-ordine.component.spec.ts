import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOrdineComponent } from './lista-ordine.component';

describe('ListaOrdineComponent', () => {
  let component: ListaOrdineComponent;
  let fixture: ComponentFixture<ListaOrdineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaOrdineComponent]
    });
    fixture = TestBed.createComponent(ListaOrdineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
