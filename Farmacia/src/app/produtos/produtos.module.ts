
import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarProdutosComponent } from './pages/editar-produtos/editar-produtos.component';
import { ExcluirProdutoComponent } from './dialog/excluir-produto/excluir-produto.component';
import { ListarProdutosComponent } from './pages/listar-produtos/listar-produtos.component';
import { NovoProdutoComponent } from './pages/novo-produto/novo-produto.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { ProdutoRoutingModule } from './produtos-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditarProdutosComponent,
    ExcluirProdutoComponent,
    NovoProdutoComponent,
    ListarProdutosComponent,
   
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    
    
    
  ],
  
})
export class ProdutosModule { }
