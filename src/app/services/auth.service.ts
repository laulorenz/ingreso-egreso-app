import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth
  ) { }

  /** nos avisa cuando hay un cambio de autenticacion */
  public initAuthListener(): void {
    this.auth.authState.subscribe(fuser => {
      console.log(fuser?.uid);
      console.log(fuser?.email);
    });
  }

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

  public logout() {
    return this.auth.signOut();
  }
}
