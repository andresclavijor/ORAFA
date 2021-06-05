import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';



const appRoutes = [
  { path: 'users', component: EstudianteComponent,  pathMatch: 'full'},
];

@NgModule({
  declarations: [
    EstudianteComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class MenuModule { }
