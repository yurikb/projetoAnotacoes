import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotacoesModalDeleteComponent } from './anotacoes-modal-delete.component';

describe('AnotacoesModalDeleteComponent', () => {
  let component: AnotacoesModalDeleteComponent;
  let fixture: ComponentFixture<AnotacoesModalDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotacoesModalDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotacoesModalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
