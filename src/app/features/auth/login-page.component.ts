import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, RouterLink],
  template: `<main>
    <section>
      <span class="mark">I</span>
      <p>ITSM CONSOLE</p>
      <h1>Работа с услугами<br />без потери контекста.</h1>
      <span>Единое пространство для заявок, активов и прозрачных процессов поддержки.</span>
    </section>
    <form>
      <p>ВХОД В СИСТЕМУ</p>
      <h2>С возвращением</h2>
      <mat-form-field appearance="outline"
        ><mat-label>Рабочая почта</mat-label><input matInput type="email" /></mat-form-field
      ><mat-form-field appearance="outline"
        ><mat-label>Пароль</mat-label><input matInput type="password" /></mat-form-field
      ><button mat-flat-button routerLink="/requests">Войти</button>
    </form>
  </main>`,
  styles: `
    main {
      display: grid;
      min-height: 100dvh;
      grid-template-columns: 1.1fr 0.9fr;
      background: #fff;
    }
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10vw;
      background: #132235;
      color: #fff;
    }
    .mark {
      display: grid;
      width: 38px;
      height: 38px;
      place-items: center;
      margin-bottom: 80px;
      border-radius: 10px;
      background: #77e0bd;
      color: #132235;
      font: 700 24px Georgia;
    }
    p {
      margin: 0 0 12px;
      color: #4bc39e;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.12em;
    }
    h1 {
      margin: 0 0 20px;
      font:
        700 clamp(42px, 5vw, 72px)/0.98 Georgia,
        serif;
      letter-spacing: -0.05em;
    }
    section > span:last-child {
      max-width: 440px;
      color: #adbac9;
      font-size: 17px;
      line-height: 1.6;
    }
    form {
      display: flex;
      flex-direction: column;
      align-self: center;
      justify-self: center;
      width: min(370px, 80%);
    }
    form p {
      color: #29876a;
    }
    h2 {
      margin: 0 0 32px;
      color: #172638;
      font:
        700 32px Georgia,
        serif;
    }
    button {
      height: 48px;
      --mat-button-filled-container-color: #1a8164;
      --mat-button-filled-label-text-color: #fff;
    }
    @media (max-width: 760px) {
      main {
        grid-template-columns: 1fr;
      }
      section {
        padding: 48px 30px;
      }
      .mark {
        margin-bottom: 35px;
      }
      form {
        width: 80%;
        padding: 48px 0;
      }
    }
  `,
})
export class LoginPageComponent {}
