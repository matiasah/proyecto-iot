import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { timer } from 'rxjs';

@Component({
    selector: 'app-visualizador',
    templateUrl: './visualizador.component.html',
    styleUrls: ['./visualizador.component.scss']
})
export class VisualizadorComponent implements OnInit {

    // Cantidad de personas
    public personas: string;

    public constructor(
        private personaService: PersonaService
    ) {

    }

    public ngOnInit() {
        // Enviar petición cada 2 segundos
        timer(0, 2000).subscribe(
            () => {
                // Obtener cantidad de personas
                this.personaService.getPersonas().then(
                    Response => {
                        this.personas = Response;
                    }
                );
            }
        );
    }

}
