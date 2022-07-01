import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable,tap } from 'rxjs';
import { UsuarioJWT } from '../Models/usuarioJWT';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {

  private readonly baseURL: string = 'http://localhost:8081/'
  private logged$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient
  ) { }

    login(usuario: UsuarioJWT) : Observable<{ Authorization: string }>{
      return this.http.post<{ Authorization: string }>(`${this.baseURL}login`, usuario)
      .pipe(
        tap((token) => {
          localStorage.setItem('token', token.Authorization)
          this.logged$.next(true)
        }),
        
      )
    }

    logged():Observable<boolean> {
      this.logged$.next(localStorage.getItem('token')==null)
      return this.logged$.asObservable()
    }
    logout()
    {
      localStorage.removeItem('token')
      this.logged$.next(false)
    }
}
