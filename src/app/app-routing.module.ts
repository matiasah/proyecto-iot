import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { VisualizadorComponent } from './components/visualizador/visualizador.component';
import { IngresoGuard } from './guards/ingreso.guard';
import { VisualizadorGuard } from './guards/visualizador.guard';

const routes: Routes = [
    {
        path: '',
        component: IngresoComponent,
        canActivate: [IngresoGuard]
    },
    {
        path: 'personas',
        component: VisualizadorComponent,
        canActivate: [VisualizadorGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
