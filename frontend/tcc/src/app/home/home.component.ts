import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }), // Ponto inicial
        animate(
          '0.8s ease-out',
          style({ opacity: 1, transform: 'translateY(0)' }) // Finalização da animação
        ),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  showSuccessAlert = false; // Controla a exibição do alerta
  alertFadeOut = false; // Controla a animação de saída

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Aqui você simula a navegação após o login bem-sucedido
    // Definindo showSuccessAlert como true quando o login for bem-sucedido
    this.showSuccessAlert = true;

    // Fechar o alerta após 5 segundos (tempo para o usuário ver)
    setTimeout(() => {
      this.alertFadeOut = true; // Aciona a animação de saída
    }, 5000); // Alerta será exibido por 5 segundos

    // Após a animação de saída, você pode ocultar o alerta completamente
    setTimeout(() => {
      this.showSuccessAlert = false;
      this.alertFadeOut = false; // Reseta o estado da animação de saída
    }, 5500); // Espera a animação de saída terminar (500ms após o fadeOut)
  }

  signIn(): void {
    this.router.navigate(['/login']);
  }

  closeAlert(): void {
    // Se o usuário clicar no botão de fechar, o alerta será fechado imediatamente
    this.showSuccessAlert = false;
    this.alertFadeOut = false;
  }

  findOutMore(): void {
    window.open('https://www.uninter.com/', '_blank');
  }
}
