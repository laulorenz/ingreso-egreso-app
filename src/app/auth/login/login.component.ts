import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }

  public loginUsuario(): void {

    if (this.loginForm.invalid) {
      return;
    }

    Swal.fire({
      title: 'Espere por favor',
      willOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false,
    });

    const { correo, password } = this.loginForm.value;

    this.authService.loginUsuario(correo, password)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.message
        });
      })
      .finally(() => {
        if (Swal.isLoading()) {
          Swal.hideLoading();
        }
      });

  }
}
