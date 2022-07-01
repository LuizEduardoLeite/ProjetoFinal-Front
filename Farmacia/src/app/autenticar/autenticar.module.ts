import { MaterialModule } from './../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './autenticar-routing.module';
import { TokenInTercept } from './interceptar/token-interceptor';
import { LoginComponent } from './pages/login/login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule
    
  ]
})
export class AutenticarModule {
  static forRoot():ModuleWithProviders<AutenticarModule>
  {
  return{
    ngModule:AutenticarModule,
    providers:[
      {
        provide:HTTP_INTERCEPTORS,
        useClass:TokenInTercept,
        multi:true
      }
    ]
  }
  }
 }
