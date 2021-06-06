import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegistroComponent } from '../registro/registro.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup ;
  
  constructor(
    private router:Router,
    public dialog: MatDialog
  ) {
    this.formLogin = new FormGroup({
      usuario: new FormControl("", [Validators.required]),
      contraseña: new FormControl("", [Validators.required])
    });
   }



  ngOnInit(): void {

  }

  autenticarse(valores:any){
    console.log("valores",valores);
    sessionStorage.setItem('usuario', valores.usuario);
    this.router.navigate(['menu/menu']);
  }


  registrarse(): void {
    const dialogRef = this.dialog.open(RegistroComponent, {
      width: '750px',
      data: this.formLogin.value,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.router.navigate(['menu/menu']);
      }
    });
  }

}
