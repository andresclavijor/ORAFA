//leaves-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { MenuComponent } from './menu/menu.component';


const menuRoutes: Routes = [
  { 
    path: '', 
    component: MenuComponent,
    children:[
      { path: 'admin', loadChildren: () => import(`../admin/admin.module`).then(m => m.AdminModule) },
      { path: 'estudiantes', component: EstudianteComponent },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(menuRoutes)],
  exports: [RouterModule]
})

export class MenuRoutingModule { }
