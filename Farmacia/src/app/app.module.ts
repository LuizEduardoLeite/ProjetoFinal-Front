import { NovoProdutoComponent } from './produtos/pages/novo-produto/novo-produto.component';
import { HttpClientModule } from '@angular/common/http';
import { ListarProdutosComponent } from './produtos/pages/listar-produtos/listar-produtos.component';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EditarProdutosComponent } from './produtos/pages/editar-produtos/editar-produtos.component';
import { ExcluirProdutoComponent } from './produtos/dialog/excluir-produto/excluir-produto.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AutenticarModule } from './autenticar/autenticar.module';
import { ProdutoRoutingModule } from './produtos/produtos-routing.module';
import { ProdutosModule } from './produtos/produtos.module';




@NgModule({
  declarations: [
    AppComponent,
    // EditarProdutosComponent,
    // ExcluirProdutoComponent,
    // NovoProdutoComponent,
    // ListarProdutosComponent,
    
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AutenticarModule.forRoot()
   
    




    
    
  ],
  
  providers: [
    ProdutosModule,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
