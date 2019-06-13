import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PersonaService {

    private static CUSTOMER_ID: string = '5500c8a0-8de6-11e9-9c7a-ef2ffff9109f';

    public constructor(
        private http: HttpClient,
        private authService: AuthService
    ) {

    }

    public async getPersonas(): Promise<string> {
        // Cabeceras
        let headers: HttpHeaders = new HttpHeaders();

        // Agregar token
        headers = headers.set('X-Authorization', 'bearer ' + this.authService.getToken());

        // Obtener dispositivos
        const dispositivos: {data: {id: {id: number}}[]} = await this.http.get<any>('http://endor.ceisufro.cl:8080/api/customer/' + PersonaService.CUSTOMER_ID + '/devices?limit=1', {headers: headers}).toPromise();

        // Obtener ID del dispositivo
        const id: number = dispositivos.data[0].id.id;

        // Obtener datos
        const data: {personas: {value: string}} = await this.http.get<any>('http://endor.ceisufro.cl:8080/api/plugins/telemetry/DEVICE/' + id + '/values/timeseries?keys=personas', {headers: headers}).toPromise();

        // Retornar cantidad de personas
        return data.personas[0].value;
    }
}
