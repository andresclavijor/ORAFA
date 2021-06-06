import { Component, OnInit,ViewChild, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'orafa';
  constructor(
    private router:Router,
  ){
  }
  ngOnInit(): void {
    this.validarUsuarioConectado();
  }

  validarUsuarioConectado(){
    let usuario = sessionStorage.getItem('usuario');
      if (usuario) {
        this.router.navigate(['menu/menu']);
      }else{
        this.router.navigate(['registro/login']);
      }
  }
}
