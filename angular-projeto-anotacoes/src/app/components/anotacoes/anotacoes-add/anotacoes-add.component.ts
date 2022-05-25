import { CategoriaService } from './../../../services/categoria.service';
import { AnotacaoService } from './../../../services/anotacao.service';
import { Categoria } from './../../../models/categoria';
import { Nota } from './../../../models/nota';
import { Subject, Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anotacoes-add',
  templateUrl: './anotacoes-add.component.html',
  styleUrls: ['./anotacoes-add.component.scss']
})
export class AnotacoesAddComponent implements OnInit {

  @Input()
  status = new Subject<boolean>();

  @Input()
  notaInsert = new Nota({categoria: new Categoria({})});

  categoriasList = new Observable<Categoria[]>();

  constructor(private notaService: AnotacaoService,
              private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.getAllCategorias();
  }

  getAllCategorias() {
    this.categoriasList = this.categoriaService.getAll();
  }

  save() {
    console.log(this.notaInsert);
    if(this.validate()) {
      this.notaService
          .save(this.notaInsert)
          .subscribe(
            (notaSaved) => {
              if(notaSaved.idNota)
                this.cancel();
            }
          )
    }
  }

  cancel() {
    this.status.next(false);
  }

  validate() {
    if(typeof this.notaInsert.categoria == 'undefined') {
      return false;
    }

    return true;
  }

}
