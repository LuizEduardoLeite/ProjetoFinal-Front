import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExcluirProdutoComponent } from '../../dialog/excluir-produto/excluir-produto.component';
import { Produtos } from '../../Models/produtos';
import { ProdutosServiceService } from '../../services/produtos-service.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  produtos: Produtos[] = [];

  columns: string[] = ['idProduto','nome','tipo','valor','action']

  constructor(
    private prodService: ProdutosServiceService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.recuperarProdutos();
  }

  


  openDialog(id:number,nome:string): void {
    const dialogRef = this.dialog.open(ExcluirProdutoComponent)
  
    dialogRef.afterClosed().subscribe( 
    canDelete => {
        if(canDelete) {
          this.prodService.deletarProduto(id).subscribe(
            ( ) => {
              this.snackBar.open(`o produto ${nome} foi deletado!`, "ok", {
                duration: 3000
              })
              this.recuperarProdutos();
            }
          )
        }
      }
    )
  }

  recuperarProdutos() {
    this.prodService.getProdutos().subscribe(
      (produto) => {
        this.produtos = produto
      }
    )
  }
  

}
