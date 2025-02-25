import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavComponent } from './components/nav/nav.component';
import { AgregarAnimalesComponent } from './components/agregar-animales/agregar-animales.component';
import { EditarElimminarAnimalesComponent } from './components/editar-elimminar-animales/editar-elimminar-animales.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [
    // Componentes
    {path: 'nav', component: NavComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'agregarAnimales', component: AgregarAnimalesComponent},
    {path: 'editarEliminarAnimales', component: EditarElimminarAnimalesComponent},

    // Rutas especiales
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: '**', redirectTo: 'inicio', pathMatch: 'full'},
];
