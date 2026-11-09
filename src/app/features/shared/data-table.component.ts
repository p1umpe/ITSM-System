import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TableColumn, TableFilter } from './shared-ui.models';

@Component({
  selector: 'app-data-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule],
  template: `
    <section class="table-shell">
      <header class="toolbar">
        <mat-form-field class="search" appearance="outline" subscriptSizing="dynamic">
          <mat-label>{{ searchPlaceholder() }}</mat-label>
          <input matInput [value]="searchTerm()" (input)="setSearch($any($event.target).value)" />
          <mat-icon matSuffix>search</mat-icon>
        </mat-form-field>

        @for (filter of filters(); track filter.key) {
          <mat-form-field appearance="outline" subscriptSizing="dynamic">
            <mat-label>{{ filter.label }}</mat-label>
            <mat-select
              [value]="activeFilters()[filter.key] ?? ''"
              (selectionChange)="setFilter(filter.key, $event.value)"
            >
              <mat-option value="">Все</mat-option>
              @for (option of filter.options; track option.value) {
                <mat-option [value]="option.value">{{ option.label }}</mat-option>
              }
            </mat-select>
          </mat-form-field>
        }

        @if (hasActiveFilters()) {
          <button mat-button type="button" (click)="resetFilters()">Сбросить</button>
        }
      </header>

      <div class="table-scroll">
        <table>
          <thead>
            <tr>
              @for (column of columns(); track column.key) {
                <th scope="col">{{ column.label }}</th>
              }
            </tr>
          </thead>
          <tbody>
            @for (row of filteredRows(); track identify(row); let index = $index) {
              <tr
                tabindex="0"
                (click)="rowActivated.emit(row)"
                (keydown.enter)="rowActivated.emit(row)"
              >
                @for (column of columns(); track column.key) {
                  <td>{{ display(row, column) }}</td>
                }
              </tr>
            } @empty {
              <tr>
                <td class="empty" [attr.colspan]="columns().length">
                  <mat-icon>filter_alt_off</mat-icon>
                  <span>По заданным условиям записей не найдено</span>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
      <footer>{{ filteredRows().length }} из {{ rows().length }} записей</footer>
    </section>
  `,
  styles: `
    .table-shell {
      overflow: hidden;
      border: 1px solid #e3eaf1;
      border-radius: 12px;
      background: #fff;
    }
    .toolbar {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px;
      border-bottom: 1px solid #e9eef4;
    }
    .toolbar mat-form-field {
      min-width: 170px;
    }
    .toolbar .search {
      min-width: min(100%, 290px);
      margin-right: auto;
    }
    .toolbar button {
      color: #217a62;
    }
    .table-scroll {
      overflow-x: auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      min-width: 620px;
    }
    th {
      padding: 13px 20px;
      color: #77869a;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-align: left;
      text-transform: uppercase;
    }
    td {
      padding: 15px 20px;
      border-top: 1px solid #edf1f5;
      color: #2d4054;
      font-size: 14px;
    }
    tbody tr:not(:has(.empty)) {
      cursor: pointer;
      transition: background-color 0.15s ease;
    }
    tbody tr:not(:has(.empty)):hover,
    tbody tr:focus {
      background: #f2faf7;
      outline: none;
    }
    .empty {
      height: 190px;
      color: #748397;
      text-align: center;
    }
    .empty mat-icon {
      display: block;
      margin: 0 auto 10px;
      color: #9acdbd;
    }
    footer {
      padding: 13px 20px;
      border-top: 1px solid #e9eef4;
      color: #7c8b9d;
      font-size: 12px;
    }
    @media (max-width: 800px) {
      .toolbar {
        align-items: stretch;
        flex-direction: column;
      }
      .toolbar .search {
        margin-right: 0;
      }
      .toolbar mat-form-field {
        width: 100%;
      }
    }
  `,
})
export class DataTableComponent<T extends Record<string, unknown>> {
  readonly columns = input.required<readonly TableColumn<T>[]>();
  readonly rows = input<readonly T[]>([]);
  readonly filters = input<readonly TableFilter<T>[]>([]);
  readonly searchPlaceholder = input('Поиск');
  readonly rowActivated = output<T>();

  protected readonly searchTerm = signal('');
  protected readonly activeFilters = signal<Partial<Record<string, string>>>({});
  protected readonly filteredRows = computed(() => {
    const query = this.searchTerm().trim().toLocaleLowerCase();
    const filters = this.activeFilters();

    return this.rows().filter((row) => {
      const matchesSearch =
        !query ||
        Object.values(row).some((value) => String(value).toLocaleLowerCase().includes(query));
      const matchesFilters = Object.entries(filters).every(
        ([key, value]) =>
          !value || String(row[key]).toLocaleLowerCase() === value.toLocaleLowerCase(),
      );
      return matchesSearch && matchesFilters;
    });
  });
  protected readonly hasActiveFilters = computed(
    () => Boolean(this.searchTerm()) || Object.values(this.activeFilters()).some(Boolean),
  );

  protected setSearch(value: string): void {
    this.searchTerm.set(value);
  }
  protected setFilter(key: string, value: string): void {
    this.activeFilters.update((filters) => ({ ...filters, [key]: value }));
  }
  protected resetFilters(): void {
    this.searchTerm.set('');
    this.activeFilters.set({});
  }
  protected identify(row: T): T {
    return row;
  }
  protected display(row: T, column: TableColumn<T>): string {
    const value = row[column.key];
    return column.format ? column.format(value, row) : String(value ?? '—');
  }
}
