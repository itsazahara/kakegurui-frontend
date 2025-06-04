import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonajeService } from '../../services/personaje.service';
import { Personaje } from '../../models/personaje';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  personajes: Personaje[] = [];

  constructor(private personajeService: PersonajeService, private router: Router) {}

  ngOnInit(): void {
    this.personajeService.getAll().subscribe(data => {
      this.personajes = data;
    });
  }

  verDetalle(id: number) {
  this.router.navigate(['/personajes', id]);
}

}
