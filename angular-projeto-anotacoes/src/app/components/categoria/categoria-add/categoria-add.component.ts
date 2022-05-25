import { CategoriaService } from './../../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-categoria-add',
  templateUrl: './categoria-add.component.html',
  styleUrls: ['./categoria-add.component.scss']
})
export class CategoriaAddComponent implements OnInit {

  formCategoria: Categoria = new Categoria({});

  msgRetorno = new Subject<boolean>();

  constructor(private service: CategoriaService) { }

  ngOnInit(): void {
  }

  save() {
    this.service
        .save(this.formCategoria)
        .subscribe(
          (categoria) => {
            if(categoria.idCategoria) {
              this.formCategoria = categoria;
              this.msgRetorno.next(true);
            }
          }
        );
  }

}
