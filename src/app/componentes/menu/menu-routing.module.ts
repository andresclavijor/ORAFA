//leaves-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
    { path: 'estudiante', component:  EstudianteComponent},
    { path: 'menu', component:  MenuComponent},
    { path: '**', component:  EstudianteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MenuRoutingModule { }
