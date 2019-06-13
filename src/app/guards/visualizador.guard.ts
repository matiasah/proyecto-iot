import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class VisualizadorGuard implements CanActivate {

    public constructor(
        private authService: AuthService,
        private router: Router
    ) {

    }

    public canActivate(): boolean {
        // Si no hay sesión
        if (this.authService.sesionExpirada()) {
            // Ir a ingreso
            this.router.navigate(['/']);

            return false;
        }

        // Si hay sesión, permitir acceder a vista
        return true;
    }

}
