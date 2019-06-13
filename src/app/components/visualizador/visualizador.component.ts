import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';

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
        // Obtener cantidad de personas
        this.personaService.getPersonas().then(
            Response => {
                console.log(Response);
                this.personas = Response;
            }
        )
    }

}
