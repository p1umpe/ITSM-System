import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shell',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  template: `<mat-sidenav-container class="shell"
    ><mat-sidenav class="nav" mode="side" opened
      ><a class="brand" routerLink="/requests"
        ><i>I</i><span>ITSM <b>Console</b></span></a
      >
      <p>РАБОЧЕЕ ПРОСТРАНСТВО</p>
      <mat-nav-list
        ><a mat-list-item routerLink="/requests" routerLinkActive="active"
          ><mat-icon matListItemIcon>confirmation_number</mat-icon
          ><span matListItemTitle>Заявки</span></a
        ><a mat-list-item routerLink="/assets" routerLinkActive="active"
          ><mat-icon matListItemIcon>inventory_2</mat-icon><span matListItemTitle>Активы</span></a
        ></mat-nav-list
      >
      <p>СИСТЕМА</p>
      <mat-nav-list
        ><a mat-list-item routerLink="/administration" routerLinkActive="active"
          ><mat-icon matListItemIcon>tune</mat-icon
          ><span matListItemTitle>Администрирование</span></a
        ></mat-nav-list
      ></mat-sidenav
    ><mat-sidenav-content
      ><mat-toolbar
        ><span>Центр управления услугами</span><span class="spacer"></span
        ><button mat-icon-button aria-label="Уведомления">
          <mat-icon>notifications_none</mat-icon></button
        ><button mat-button><span class="avatar">АМ</span>Анна Морозова</button></mat-toolbar
      >
      <main><router-outlet /></main></mat-sidenav-content
  ></mat-sidenav-container>`,
  styles: `
    .shell {
      min-height: 100dvh;
      background: #f4f7fb;
    }
    .nav {
      width: 260px;
      padding: 24px 12px;
      background: #132235;
      color: #dce6f3;
      border: 0;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 0 12px 30px;
      color: #fff;
      font-size: 18px;
      text-decoration: none;
    }
    .brand i {
      display: grid;
      width: 28px;
      height: 28px;
      place-items: center;
      border-radius: 8px;
      background: #77e0bd;
      color: #132235;
      font: 700 19px Georgia;
    }
    .nav p {
      margin: 18px 12px 7px;
      color: #8194aa;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.12em;
    }
    .nav mat-nav-list {
      --mat-list-list-item-label-text-color: #dce6f3;
      --mat-list-list-item-leading-icon-color: #92a4b9;
    }
    .nav a[mat-list-item] {
      margin: 2px 0;
      border-radius: 8px;
    }
    .nav .active {
      background: rgba(119, 224, 189, 0.13);
      --mat-list-list-item-label-text-color: #fff;
      --mat-list-list-item-leading-icon-color: #77e0bd;
    }
    mat-toolbar {
      height: 72px;
      padding: 0 32px;
      background: #fff;
      border-bottom: 1px solid #e4eaf1;
      color: #5c6d80;
      font-size: 13px;
    }
    .spacer {
      flex: 1;
    }
    .avatar {
      display: inline-grid;
      width: 28px;
      height: 28px;
      place-items: center;
      margin-right: 8px;
      border-radius: 50%;
      background: #e6f5ef;
      color: #156b51;
      font-size: 10px;
      font-weight: 700;
    }
    main {
      max-width: 1440px;
      margin: auto;
      padding: 40px 48px;
    }
    @media (max-width: 700px) {
      .nav {
        width: 68px;
        padding: 24px 8px;
      }
      .brand span,
      .nav p,
      .nav span[matListItemTitle] {
        display: none;
      }
      main {
        padding: 28px 20px;
      }
      mat-toolbar {
        padding: 0 16px;
      }
    }
  `,
})
export class AppShellComponent {}
