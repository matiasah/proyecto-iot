import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private token: string;

    public constructor(
        private http: HttpClient
    ) {

    }

    public ingresar(usuario: Usuario): Observable<boolean> {
        // Observable
        const observable: Subject<boolean> = new Subject();

        // Ingresar
        this.http.post<any>('http://endor.ceisufro.cl:8080/api/auth/login', {
            'username': usuario.nombre,
            'password': usuario.contrasena
        }).subscribe(
            Response => {
                // Almacenar token en memorial temporal
                this.token = Response.token;
                
                // Notificar ingreso exitoso
                observable.next(true);
            },
            Error => {
                // Notificar ingreso fallido
                observable.next(false);
            }
        );

        return observable;
    }

    public sesionExpirada(): boolean {
        if (this.token) {
            return false;
        }
        return true;
    }

    public getToken(): string {
        return this.token;
    }

}
