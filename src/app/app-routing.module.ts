import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AlterarUsuarioComponent } from './feature/alterar-usuario/alterar-usuario.component';
import { AlterarVeiculoComponent } from './feature/alterar-veiculo/alterar-veiculo.component';
import { CadastroVeiculoComponent } from './feature/cadastro-veiculo/cadastro-veiculo.component';
import { CadastroComponent } from './feature/cadastro/cadastro.component';
import { HomeComponent } from './feature/home/home.component';
import { ListarUsuarioComponent } from './feature/listar-usuario/listar-usuario.component';
import { ListarVeiculoComponent } from './feature/listar-veiculo/listar-veiculo.component';
import { LoginComponent } from './feature/login/login.component';
import { RemoverUsuarioComponent } from './feature/remover-usuario/remover-usuario.component';
import { RemoverVeiculoComponent } from './feature/remover-veiculo/remover-veiculo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'listar-usuario', component: ListarUsuarioComponent },
  { path: 'listar-veiculo', component: ListarVeiculoComponent },
  { path: 'cadastro-veiculo', component: CadastroVeiculoComponent },
  { path: 'alterar-veiculo', component: AlterarVeiculoComponent },
  { path: 'remover-veiculo', component: RemoverVeiculoComponent },
  { path: 'alterar-usuario', component: AlterarUsuarioComponent },
  { path: 'remover-usuario', component: RemoverUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
