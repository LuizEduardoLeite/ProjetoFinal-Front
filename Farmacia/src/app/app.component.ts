import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticarService } from './autenticar/services/autenticar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logged$!:boolean

  constructor
  (
    private authService:AutenticarService,
    private router:Router
  ){}

  ngOnInit()
  {
    this.authService.logged().subscribe
    (
      (logged)=>{
        this.logged$ = logged
        
      }
    )
  }
  logout(){
    this.authService.logout()
    this.router.navigateByUrl("/login")
  }
}
