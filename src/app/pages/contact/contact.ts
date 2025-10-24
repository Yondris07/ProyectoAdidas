import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DetallesService } from '../detalles/detalles.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  formulario: FormGroup;

  constructor(private pichi: DetallesService) {
    this.formulario = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required,
      ]),
    });
    // this.pichi.obtenerProducto(3).subscribe((response)=>{
    // })
  }
  guardar() {
    console.log('formulario: ', this.formulario);
    if (this.formulario.valid) {
      console.log('EL FORFMULARIO ESTA INCOMPLETO:', this.formulario.value);
      // this.pichi.guardarFormulario(this.formulario.value).subscribe((response) => {
      //   this.formulario.reset();
      // });
      setTimeout(() => {
        this.formulario.reset();
      }, 2000);
    }
  }
}
