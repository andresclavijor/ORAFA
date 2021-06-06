import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  formUsuario: FormGroup;
  tiposIdentificacion:any[] = [];
  departamentos:any[] = [];
  ciudades:any[] = [];
  tipoUsuarios:any[] = [];
  contrasenasDiferentes :boolean = false;
  constructor(
    public dialogRef: MatDialogRef<RegistroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private autenticacionService: AutenticacionService,
    private toastr: ToastrService,
    private router:Router,
  ) {
    this.formUsuario = new FormGroup({
      usuario: new FormControl(this.data?.usuario ? this.data?.usuario: '' , [Validators.required]),
      identificacion: new FormControl('' , [Validators.required]),
      tipoDocumento: new FormControl('' , [Validators.required]),
      fechaNacimiento: new FormControl('' , [Validators.required]),
      nombre: new FormControl('' , [Validators.required]),
      apellido: new FormControl('' , [Validators.required]),
      celular: new FormControl('' , [Validators.required]),
      telefono: new FormControl('' , [Validators.required]),
      email: new FormControl('' , [Validators.required, Validators.email]),
      direccion: new FormControl('' , [Validators.required]),
      departamento: new FormControl('' , [Validators.required]),
      ciudad: new FormControl({ value: '', disabled: true} , [Validators.required]),
      contrasena: new FormControl( this.data?.contraseña ? this.data?.contraseña: '', [Validators.required]),
      confirmacionContrasena: new FormControl( '', [Validators.required]),
      tipoUsuario: new FormControl( '', [Validators.required]),
    });
   }

  ngOnInit(): void {
    this.obtenerTipodIdentificacion();
    this.obtenerDepartamentos();
    this.obtenerTiposUsuarios();
    
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  validarUsuario(){
    this.autenticacionService.validarUsuario();
  }

  obtenerTipodIdentificacion(){
    this.tiposIdentificacion = [
      {
        descripcion:"Cedula Ciudadania",
        id:"1"
      },
      {
        descripcion:"Cedula Extrangeria",
        id:"2"
      }

    ]
  }
  obtenerDepartamentos(){
    this.departamentos = [
      {
        descripcion:"Cundinamarca",
        id:"1",
        ciudades : [
          {
            descripcion:"Bogota D.C",
            id:"1",
          }
        ]
      },
      {
        descripcion:"Antioquia",
        id:"2",
        ciudades : [
          {
            descripcion:"Medellin",
            id:"1",
          }
        ]
      },
    ]
  }
  obtenerTiposUsuarios(){
    this.tipoUsuarios = [
      {
        descripcion:"Alumno",
        id:"1"
      },
      {
        descripcion:"Empleado",
        id:"2"
      }

    ]
  }

  obtenerCiudades(){
    let departamento = this.formUsuario.controls.departamento.value;
    console.log("departamento",departamento)
    if(departamento){
      this.ciudades = departamento.ciudades;
      this.formUsuario.controls.ciudad.reset();
      this.formUsuario.controls.ciudad.enable();
    }else{
      this.formUsuario.controls.ciudad.disable();
    }
  }

  getErrorMessage() {
    if (this.formUsuario.controls.email.hasError('required')) {
      return 'Ingrese correo';
    }
    return this.formUsuario.controls.email.hasError('email') ? 'Correo no valido' : '';
  }

  contrasenasIguales(){
    let contrasena = this.formUsuario.controls.contrasena;
    let confirmacionContrasena = this.formUsuario.controls.confirmacionContrasena;

    if(contrasena !== confirmacionContrasena){
      this.contrasenasDiferentes = true;
    }else{
      this.contrasenasDiferentes = false;
    }
    
  }
  guardarUsuario(usuario:any){
    if(usuario.contrasena === usuario.confirmacionContrasena){
      this.toastr.success('Usuario registrado correctamente');
      this.dialogRef.close(true);
    }else{
      this.toastr.warning('Contraseñas diferentes','ingrese una contraseña valida');
    }
  }
  

}
