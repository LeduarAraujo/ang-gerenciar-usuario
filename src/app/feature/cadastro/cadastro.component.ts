import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/models/usuario.model';
import { AtomicoService } from 'src/app/core/services/atomico.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  usuario: Usuario = new Usuario;

  constructor(
    private atomicoService: AtomicoService,
    private router: Router
  ) {}

  cadastrar(formCadastro: NgForm) {

  }

}
