import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
    selector: 'app-ingreso',
    templateUrl: './ingreso.component.html',
    styleUrls: ['./ingreso.component.scss']
})
export class IngresoComponent implements OnInit {

    // Indicar si el ingreso fue erroneo
    public incorrecto: boolean;

    // Usuario
    public usuario: Usuario = {};

    // Formulario
    @ViewChild('form', {static: true})
    public form: NgForm;

    public constructor(
        private authService: AuthService,
        private router: Router
    ) {

    }

    public ngOnInit() {
    }

    public onSubmit() {
        // Si el formulario es válido
        if (this.form.valid) {
            // Dejar de indicar ingreso erroneo
            this.incorrecto = false;

            // Ingresar
            this.authService.ingresar(this.usuario).subscribe(
                Response => {

                    if ( Response ) {
                        // Si logró ingresar
                        this.router.navigate(['personas']);
                    } else {
                        // Si no logró ingresar
                        this.incorrecto = true;
                    }
                }
            );
        }
    }

}
