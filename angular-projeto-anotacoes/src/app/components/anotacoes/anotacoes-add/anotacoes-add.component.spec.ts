import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotacoesAddComponent } from './anotacoes-add.component';

describe('AnotacoesAddComponent', () => {
  let component: AnotacoesAddComponent;
  let fixture: ComponentFixture<AnotacoesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotacoesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotacoesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
