import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth
  ) { }

  public crearUsuario(
    nombre: string,
    correo: string,
    password: string
  ) {
    return this.auth.createUserWithEmailAndPassword(correo, password);
  }

  public loginUsuario(
    correo: string,
    password: string
  ) {
    return this.auth.signInWithEmailAndPassword(correo, password);
  }

  public logout(): void {
    this.auth.signOut();
  }
}
