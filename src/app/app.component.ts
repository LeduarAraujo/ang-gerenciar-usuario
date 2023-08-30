import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './core/models/usuario.model';
import { AtomicoService } from './core/services/atomico.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router,
    private atomService: AtomicoService) {

  }

}
