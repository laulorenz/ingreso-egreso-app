import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {

  public registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  public crearUsuario(): void {

    if (this.registroForm.invalid) {
      return;
    }

    Swal.fire({
      title: 'Espere por favor',
      willOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false,
    });

    const { nombre, correo, password } = this.registroForm.value;

    this.authService.crearUsuario(nombre, correo, password)
      .then(credenciales => {
        this.router.navigate(['/']);
      })
      .catch(err =>
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.message
        })
      )
      .finally(() => {
        if (Swal.isLoading()) {
          Swal.hideLoading();
        }
      });
  }
}
