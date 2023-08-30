import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './feature/login/login.component';
import { CadastroComponent } from './feature/cadastro/cadastro.component';
import { HomeComponent } from './feature/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ListarPessoasComponent } from './feature/listar-pessoas/listar-pessoas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    NavbarComponent,
    ListarPessoasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
