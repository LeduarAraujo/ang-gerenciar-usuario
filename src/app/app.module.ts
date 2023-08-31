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
import { ListarUsuarioComponent } from './feature/listar-usuario/listar-usuario.component';
import { ListarVeiculoComponent } from './feature/listar-veiculo/listar-veiculo.component';
import { CadastroVeiculoComponent } from './feature/cadastro-veiculo/cadastro-veiculo.component';
import { AlterarVeiculoComponent } from './feature/alterar-veiculo/alterar-veiculo.component';
import { RemoverVeiculoComponent } from './feature/remover-veiculo/remover-veiculo.component';
import { AlterarUsuarioComponent } from './feature/alterar-usuario/alterar-usuario.component';
import { RemoverUsuarioComponent } from './feature/remover-usuario/remover-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    NavbarComponent,
    ListarUsuarioComponent,
    ListarVeiculoComponent,
    CadastroVeiculoComponent,
    AlterarVeiculoComponent,
    RemoverVeiculoComponent,
    AlterarUsuarioComponent,
    RemoverUsuarioComponent
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
