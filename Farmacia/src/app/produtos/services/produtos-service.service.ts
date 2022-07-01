import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produtos } from '../Models/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosServiceService {

  private readonly baseUrl = 'http://localhost:8081/servico/medicamento'

  constructor
  (
    private http:HttpClient
  ) { }

  getProdutos():Observable<Produtos[]>
  {
    return this.http.get<Produtos[]>(this.baseUrl)
  }
  getProdutoById(id: number): Observable<Produtos>{
    return this.http.get<Produtos>(`${this.baseUrl}/${id}`)
  }

  deletarProduto(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
  }

  addProduto(produto: Produtos): Observable<Produtos>{
    return this.http.post<Produtos>(this.baseUrl, produto)
  }

  addFoto(id: number, data:FormData, fileName:String): Observable<void>{
    return this.http.post<void>(`${this.baseUrl}/addFoto/${id}?nome=${fileName}`,data)
  }

  updateProduto(produto: Produtos): Observable<Produtos>{
    return this.http.put<Produtos>(`${this.baseUrl}/${produto.idProduto}`, produto)
  }
}
