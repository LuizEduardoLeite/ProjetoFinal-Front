import { ProdutosServiceService } from './../../services/produtos-service.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {

  // @ViewChild('fileInput')
  fileInput!: ElementRef
  private canExit!:boolean

  produto: FormGroup = this.fb.group({
    nome:['',[Validators.required ]],
    tipo:['',[Validators.required]],
    valor:['',[Validators.required]]
  })

  foto!: File

  constructor(
    private fb: FormBuilder,
    private prodService: ProdutosServiceService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialog: MatDialog,
    // private authService:AuthenticationService,
  ) { }
  
  

  ngOnInit(): void {
    
  }

  selectInput(): void{
    this.fileInput.nativeElement.click();
  }

  submit(): void{
    const produto = this.produto.value;
    
    

    this.prodService
    .addProduto(produto)
    .subscribe(
      (p) => {

       

        if(this.foto != undefined){

          const formData: FormData =new FormData();

          formData.append('foto', new Blob([this.foto], {type: this.foto.type}));

          const filename = `produto-${p.idProduto}.${this.foto.type.split('/')[1]}`;

          this.prodService.addFoto(p.idProduto || 0, formData, filename)
          .subscribe(
            () => {
              this.produto.reset();
              this.showSuccessAndRedirect()
        },(e: HttpErrorResponse) =>{

              this.showErrorMessage(e)
         
        })

        } else{
          this.produto.reset();
          this.showSuccessAndRedirect();
        }
      },
      (e: HttpErrorResponse) =>{
        this.showErrorMessage(e)
      })

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
