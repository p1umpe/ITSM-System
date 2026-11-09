import { ChangeDetectionStrategy, Component, Injectable, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmDialogData } from './shared-ui.models';

@Component({
  selector: 'app-confirm-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatDialogModule, MatIconModule],
  template: `<div class="dialog-icon" [class.danger]="data.destructive">
      <mat-icon>{{ data.destructive ? 'warning_amber' : 'help_outline' }}</mat-icon>
    </div>
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <mat-dialog-content>{{ data.message }}</mat-dialog-content
    ><mat-dialog-actions align="end"
      ><button mat-button mat-dialog-close>{{ data.cancelLabel ?? 'Отмена' }}</button
      ><button mat-flat-button [class.danger-button]="data.destructive" [mat-dialog-close]="true">
        {{ data.confirmLabel ?? 'Подтвердить' }}
      </button></mat-dialog-actions
    >`,
  styles: `
    .dialog-icon {
      display: grid;
      width: 42px;
      height: 42px;
      place-items: center;
      margin: 24px 24px -8px;
      border-radius: 50%;
      background: #eaf6f0;
      color: #207b60;
    }
    .dialog-icon.danger {
      background: #fff0eb;
      color: #b15b45;
    }
    h2 {
      color: #172638;
      font:
        700 24px Georgia,
        serif;
    }
    mat-dialog-content {
      color: #617187;
      line-height: 1.55;
    }
    .danger-button {
      --mat-button-filled-container-color: #b6533c;
      --mat-button-filled-label-text-color: #fff;
    }
  `,
})
export class ConfirmDialogComponent {
  readonly data = inject<ConfirmDialogData>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<ConfirmDialogComponent, boolean>);
}

@Injectable({ providedIn: 'root' })
export class ConfirmDialogService {
  private readonly dialog = inject(MatDialog);
  confirm(data: ConfirmDialogData) {
    return this.dialog.open(ConfirmDialogComponent, { data, autoFocus: 'dialog' }).afterClosed();
  }
}
