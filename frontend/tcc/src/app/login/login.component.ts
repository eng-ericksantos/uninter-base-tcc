import { LoginResponse } from './../models/login-response.interface';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login-service.service';
import { User } from '../models/user.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit() {
    const payload = new User(this.username, this.password);

    this.loginService.logIn(payload).subscribe({
      next: () => {
        // Após sucesso, redirecionar para a página home
        this.router.navigate(['/home']);
      },
      error: () => {
        alert('Login falhou. Verifique suas credenciais.');
      },
    });
  }
}
