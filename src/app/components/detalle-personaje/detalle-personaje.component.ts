import { Component } from '@angular/core';
import { Personaje } from '../../models/personaje';
import { ActivatedRoute } from '@angular/router';
import { PersonajeService } from '../../services/personaje.service';

@Component({
  selector: 'app-detalle-personaje',
  standalone: false,
  templateUrl: './detalle-personaje.component.html',
  styleUrl: './detalle-personaje.component.css'
})
export class DetallePersonajeComponent {

  personaje!: Personaje;

  constructor(
    private route: ActivatedRoute,
    private personajeService: PersonajeService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personajeService.getById(id).subscribe(data => {
      this.personaje = data;
    });
  }

}
