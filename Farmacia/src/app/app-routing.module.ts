
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarProdutosComponent } from './produtos/pages/editar-produtos/editar-produtos.component';
import { ListarProdutosComponent } from './produtos/pages/listar-produtos/listar-produtos.component';
import { NovoProdutoComponent } from './produtos/pages/novo-produto/novo-produto.component';




const routes: Routes = 
[
  { path: 'produtos', component:ListarProdutosComponent},
  { path:'novoproduto', component:NovoProdutoComponent},
  { path:'edit/:idProduto', component:EditarProdutosComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
