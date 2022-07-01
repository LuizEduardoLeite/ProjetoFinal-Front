import { ProdutosServiceService } from './../../services/produtos-service.service';
import { Component, OnInit } from '@angular/core';
import { Produtos } from '../../Models/produtos';
@Component({
  selector: 'app-excluir-produto',
  templateUrl: './excluir-produto.component.html',
  styleUrls: ['./excluir-produto.component.css']
})
export class ExcluirProdutoComponent implements OnInit {

  IdProdutos!:number|null
  produto!:Produtos

  constructor(private prodService:ProdutosServiceService) { }

  ngOnInit(): void {
  }

 
}
