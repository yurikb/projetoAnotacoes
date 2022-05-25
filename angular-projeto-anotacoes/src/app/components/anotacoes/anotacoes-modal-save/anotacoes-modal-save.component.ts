import { Nota } from './../../../models/nota';
import { Subject } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anotacoes-modal-save',
  templateUrl: './anotacoes-modal-save.component.html',
  styleUrls: ['./anotacoes-modal-save.component.scss']
})
export class AnotacoesModalSaveComponent implements OnInit {

  @Input()
  statusSave$ = new Subject<boolean>();

  @Input()
  notaSave = new Nota({});

  constructor() { }

  ngOnInit(): void {

    this.statusSave$
        .subscribe(resp => {
          if(!resp) {
            document.getElementById('btnModalSaveNotaCancel')?.click();
          }
        });
  }

  updateStatus(status: boolean) {
    this.notaSave = new Nota({});
    this.statusSave$.next(status);
  }

}
