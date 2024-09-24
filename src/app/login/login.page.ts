import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  private readonly validUser = 'kaliel';
  private readonly validPassword = 'kal123';

  user: string = '';
  password: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  onLoginButtonPressed() {
    if (this.user === this.validUser && this.password === this.validPassword) {
      this.router.navigate(['/home']);
    } else {
      this.user = '';
      this.password = '';
      alert('Las credenciales ingresadas son inválidas.');
    }
  }

  onRegisterButtonPressed() {
    this.router.navigate(['/register']);
  }
}
