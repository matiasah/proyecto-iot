import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class IngresoGuard implements CanActivate {

    public constructor(
        private authService: AuthService,
        private router: Router
    ) {

    }

    public canActivate(): boolean {
        // Si hay sesión
        if (!this.authService.sesionExpirada()) {
            // Ir a visualizador
            this.router.navigate(['/personas']);

            return false;
        }

        // Si no hay sesión, permitir acceder a vista
        return true;
    }

}
