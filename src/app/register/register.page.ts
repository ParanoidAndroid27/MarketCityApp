import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  providers: [FormBuilder]
})
export class RegisterPage implements OnInit {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      nombreUsuario: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      confirmarContrasena: ['', Validators.required],
      fotoPerfil: [''],
      aceptarTerminos: [false, Validators.requiredTrue]
    });
  }

  ngOnInit() {
    // Puedes agregar cualquier lógica que necesites al inicializar el componente
  }

  onFileSelected(event: any) {
    this.registroForm.patchValue({ fotoPerfil: event.target.files[0] });
  }

  onSubmit() {
    if (this.registroForm.valid && this.registroForm.value.aceptarTerminos) {
      // Aquí iría la lógica para enviar los datos al servidor
      console.log(this.registroForm.value);
    } else {
      alert('Por favor, completa todos los campos y acepta los términos y condiciones.');
    }
  }
}
