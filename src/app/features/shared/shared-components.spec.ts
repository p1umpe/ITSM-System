import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DataTableComponent } from './data-table.component';
import { FormShellComponent } from './form-shell.component';

@Component({
  imports: [FormShellComponent],
  template: `<app-form-shell title="Новая заявка"
    ><div formFields>Поля формы</div></app-form-shell
  >`,
})
class FormHostComponent {}

describe('shared UI components', () => {
  it('renders data rows in the table', () => {
    const fixture = TestBed.createComponent(DataTableComponent<Record<string, unknown>>);
    fixture.componentRef.setInput('columns', [
      { key: 'number', label: 'Номер' },
      { key: 'subject', label: 'Тема' },
    ]);
    fixture.componentRef.setInput('rows', [{ number: 'SD-1', subject: 'Проверка VPN' }]);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('SD-1');
    expect(fixture.nativeElement.textContent).toContain('Проверка VPN');
  });

  it('projects form fields into the form shell', () => {
    const fixture = TestBed.createComponent(FormHostComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Новая заявка');
    expect(fixture.nativeElement.textContent).toContain('Поля формы');
  });
});
