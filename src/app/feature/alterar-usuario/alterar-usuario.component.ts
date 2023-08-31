import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/models/usuario.model';
import { AtomicoService } from 'src/app/core/services/atomico.service';

@Component({
  selector: 'app-alterar-usuario',
  templateUrl: './alterar-usuario.component.html',
  styleUrls: ['./alterar-usuario.component.scss']
})
export class AlterarUsuarioComponent {
  usuario: Usuario = new Usuario();

  constructor(
    private atomicoService: AtomicoService,
    private router: Router) { console.log(this.usuario)}

  alterarDadosUsuario(formAlterarUsuario: NgForm) {
    this.atomicoService.alterarDadosUsuario(this.usuario)
  }
}
