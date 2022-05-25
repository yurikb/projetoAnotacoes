import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotacoesModalSaveComponent } from './anotacoes-modal-save.component';

describe('AnotacoesModalSaveComponent', () => {
  let component: AnotacoesModalSaveComponent;
  let fixture: ComponentFixture<AnotacoesModalSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotacoesModalSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotacoesModalSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
