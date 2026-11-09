export interface TableColumn<T extends Record<string, unknown>> {
  key: keyof T & string;
  label: string;
  format?: (value: unknown, row: T) => string;
}

export interface TableFilter<T extends Record<string, unknown>> {
  key: keyof T & string;
  label: string;
  options: readonly { label: string; value: string }[];
}

export interface ConfirmDialogData {
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  destructive?: boolean;
}
