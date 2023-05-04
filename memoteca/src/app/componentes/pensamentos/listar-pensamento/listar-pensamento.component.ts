import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Passa informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Propriedade é decorada com @input',
      autoria: 'componente filho',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, non aliquam laborum voluptatum eius assumenda, architecto incidunt nam placeat et, sequi magni facilis asperiores officiis doloribus. Autem quasi iure voluptate.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, non aliquam laborum voluptatum eius assumenda, architecto incidunt nam placeat et, sequi magni facilis asperiores officiis doloribus. Autem quasi iure voluptate.',
      autoria: 'teste',
      modelo: 'modelo1'
    }
   ];

  constructor() { }

  ngOnInit(): void {
  }

}
