import { AnotacaoService } from './../../../services/anotacao.service';
import { Nota } from './../../../models/nota';
import { Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anotacoes-list',
  templateUrl: './anotacoes-list.component.html',
  styleUrls: ['./anotacoes-list.component.scss']
})
export class AnotacoesListComponent implements OnInit {

  listaNotas$ = new Observable<Nota[]>();
  notaAction = new Nota({});

  notaSaveCurrent = new Nota({});

  criando$ = new Subject<boolean>();
  criado$ = new Subject<boolean>();

  monitoraStatusAction$ = new Subject<boolean>();

  constructor(private service: AnotacaoService) { }

  ngOnInit(): void {
    this.getList();

    this.criado$.subscribe((resp) => {
      this.criando$.next(resp);
      this.getList();
    });

    this.monitoraStatusAction$
        .subscribe(
          (resp) => {
              this.notaAction = new Nota({});
              this.getList();
          }
        )
  }

  getList() {
    this.listaNotas$ = this.service.getAll();
  }

  confirmAction(nota: Nota) {
    if(nota) {
      this.notaAction = nota;
    }
  }

  newNota(){
    this.criando$.next(true);
  }
}
