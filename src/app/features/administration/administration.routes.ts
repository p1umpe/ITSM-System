import { Routes } from '@angular/router';
import { FeaturePlaceholderComponent } from '../shared/feature-placeholder.component';

export const ADMINISTRATION_ROUTES: Routes = [
  {
    path: '',
    component: FeaturePlaceholderComponent,
    data: {
      eyebrow: 'Системные настройки',
      title: 'Администрирование',
      description: 'Настраивайте правила, доступы и справочные данные.',
      icon: 'tune',
      metric: '4',
      metricLabel: 'Раздела настроек',
    },
  },
];
