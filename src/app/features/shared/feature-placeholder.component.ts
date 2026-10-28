import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-feature-placeholder',
  imports: [MatButtonModule, MatCardModule, MatIconModule],
  template: `<header>
      <p>{{ eyebrow() }}</p>
      <h1>{{ title() }}</h1>
      <span>{{ description() }}</span>
    </header>
    <section class="stats">
      <mat-card appearance="outlined"
        ><mat-icon>{{ icon() }}</mat-icon
        ><b>{{ metric() }}</b
        ><span>{{ metricLabel() }}</span></mat-card
      ><mat-card appearance="outlined"
        ><mat-icon>schedule</mat-icon><b>В работе</b><span>Раздел готов к развитию</span></mat-card
      >
    </section>
    <mat-card class="empty" appearance="outlined"
      ><mat-icon>{{ icon() }}</mat-icon>
      <h2>{{ title() }} — стартовый раздел</h2>
      <p>Каркас маршрута и UI-компонентов готов. Здесь появятся рабочие сценарии модуля.</p>
      <button mat-flat-button>Создать запись</button></mat-card
    >`,
  styles: `
    header {
      margin-bottom: 32px;
    }
    header > p {
      margin: 0 0 7px;
      color: #29876a;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    h1 {
      margin: 0 0 8px;
      color: #172638;
      font:
        700 36px/1.1 Georgia,
        serif;
      letter-spacing: -0.035em;
    }
    header > span,
    .empty p {
      color: #728094;
    }
    .stats {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
    }
    .stats mat-card {
      padding: 24px;
      border-color: #e3eaf1;
      box-shadow: none;
    }
    .stats mat-icon {
      color: #217a62;
    }
    .stats b {
      display: block;
      margin: 18px 0 5px;
      color: #203348;
      font:
        700 25px Georgia,
        serif;
    }
    .stats span {
      color: #718095;
      font-size: 13px;
    }
    .empty {
      display: grid;
      place-items: center;
      margin-top: 28px;
      padding: 54px 24px;
      border-color: #e3eaf1;
      text-align: center;
      box-shadow: none;
    }
    .empty > mat-icon {
      width: 44px;
      height: 44px;
      font-size: 44px;
      color: #82bbaa;
    }
    .empty h2 {
      margin: 19px 0 8px;
      font:
        700 21px Georgia,
        serif;
    }
    .empty p {
      max-width: 430px;
      margin: 0 0 16px;
    }
    .empty button {
      --mat-button-filled-container-color: #1a8164;
      --mat-button-filled-label-text-color: #fff;
    }
    @media (max-width: 700px) {
      .stats {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class FeaturePlaceholderComponent {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly icon = input.required<string>();
  readonly metric = input.required<string>();
  readonly metricLabel = input.required<string>();
}
