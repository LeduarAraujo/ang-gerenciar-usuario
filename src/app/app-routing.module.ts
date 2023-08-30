import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastroComponent } from './feature/cadastro/cadastro.component';
import { HomeComponent } from './feature/home/home.component';
import { ListarPessoasComponent } from './feature/listar-pessoas/listar-pessoas.component';
import { LoginComponent } from './feature/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'listar-pessoas', component: ListarPessoasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
