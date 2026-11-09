import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-form-shell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule],
  template: `
    <form class="form-shell" (submit)="$event.preventDefault(); submitted.emit()">
      <header>
        <p>{{ eyebrow() }}</p>
        <h1>{{ title() }}</h1>
        @if (description()) {
          <span>{{ description() }}</span>
        }
      </header>
      <section class="fields"><ng-content select="[formFields]" /></section>
      <footer>
        <ng-content select="[formActions]" /><button
          mat-button
          type="button"
          (click)="cancelled.emit()"
        >
          {{ cancelLabel() }}</button
        ><button mat-flat-button type="submit">{{ submitLabel() }}</button>
      </footer>
    </form>
  `,
  styles: `
    .form-shell {
      overflow: hidden;
      border: 1px solid #e3eaf1;
      border-radius: 12px;
      background: #fff;
    }
    header {
      padding: 28px 32px 24px;
      border-bottom: 1px solid #e9eef4;
    }
    header p {
      margin: 0 0 7px;
      color: #29876a;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    h1 {
      margin: 0 0 7px;
      color: #172638;
      font:
        700 27px/1.1 Georgia,
        serif;
    }
    header span {
      color: #728094;
    }
    .fields {
      display: grid;
      gap: 16px;
      padding: 30px 32px;
    }
    footer {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      padding: 18px 32px;
      border-top: 1px solid #e9eef4;
      background: #fbfcfe;
    }
    footer [formActions] {
      margin-right: auto;
    }
    button[mat-flat-button] {
      --mat-button-filled-container-color: #1a8164;
      --mat-button-filled-label-text-color: #fff;
    }
    @media (max-width: 600px) {
      header,
      .fields,
      footer {
        padding-inline: 20px;
      }
      footer {
        flex-wrap: wrap;
      }
    }
  `,
})
export class FormShellComponent {
  readonly eyebrow = input('Форма');
  readonly title = input.required<string>();
  readonly description = input('');
  readonly submitLabel = input('Сохранить');
  readonly cancelLabel = input('Отмена');
  readonly submitted = output<void>();
  readonly cancelled = output<void>();
}
