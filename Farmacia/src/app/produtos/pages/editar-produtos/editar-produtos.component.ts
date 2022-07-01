import { ProdutosServiceService } from './../../services/produtos-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from '../../Models/produtos';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-editar-produtos',
  templateUrl: './editar-produtos.component.html',
  styleUrls: ['./editar-produtos.component.css']
})
export class EditarProdutosComponent implements OnInit {

  prod!: Produtos
  produtos: FormGroup = this.fb.group({
    nome: ['',[Validators.required]],
    tipo: ['',[Validators.required]],
    valor: ['',[Validators.required]],
    foto:[null]

  })
  foto!: File;
  

  constructor(
    private route: ActivatedRoute,
    private prodService: ProdutosServiceService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    const id: number = parseInt(this.route.snapshot.paramMap.get('idProduto')||'0' )

    this.prodService.getProdutoById(id)
    .subscribe(
      (p) => {
        this.prod = p;

        this.produtos.patchValue({
          nome: this.prod.nome,
          tipo: this.prod.tipo,
          valor: this.prod.valor,
        })
      }
    )
  }

  submit() {
    this.prod.nome = this.produtos.value.nome
    this.prod.tipo = this.produtos.value.tipo
    this.prod.valor = this.produtos.value.valor

    this.prodService.updateProduto(this.prod)
    .subscribe(
      () => {
              this.produtos.reset()
              this.showSuccessAndRedirect()
      },
      (e: HttpErrorResponse) => {
        this.showErrorMessage(e)
      }
    )
  }
  fileChange(event: any){
    this.foto = event.target.files[0]
  }
  
  showSuccessAndRedirect():void{

    this.snackBar.open('Produto cadastrado com sucesso!','ok',{
      duration: 3000,
      horizontalPosition:'left',
     verticalPosition:'top'
   })
   this.router.navigateByUrl('/produtos')

  }
  showErrorMessage(e: HttpErrorResponse):void{

    this.snackBar.open(`Ocorreu um erro no salvamento! (Erro: ${e.status})`, "ok",{
      duration: 3000,
      horizontalPosition:'left',
      verticalPosition:'top'
    })

  }

}
