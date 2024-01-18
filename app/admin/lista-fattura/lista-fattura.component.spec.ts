import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFatturaComponent } from './lista-fattura.component';

describe('ListaFatturaComponent', () => {
  let component: ListaFatturaComponent;
  let fixture: ComponentFixture<ListaFatturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaFatturaComponent]
    });
    fixture = TestBed.createComponent(ListaFatturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
