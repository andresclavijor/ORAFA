import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaErrorComponent } from './componentes/pagina-error/pagina-error.component';

const routes: Routes = [

  { path: 'registro', loadChildren: () => import(`./componentes/registro/registro.module`).then(m => m.RegistroModule) },
  { path: 'menu', loadChildren: () => import(`./componentes/menu/menu.module`).then(m => m.MenuModule) },
  { path: 'error', component:  PaginaErrorComponent},

  { path: '**', component:  PaginaErrorComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
