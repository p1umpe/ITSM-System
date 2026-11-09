import { Routes } from '@angular/router';
import { FeaturePlaceholderComponent } from '../shared/feature-placeholder.component';

export const REQUESTS_ROUTES: Routes = [
  {
    path: '',
    component: FeaturePlaceholderComponent,
    data: {
      eyebrow: 'Service Desk',
      title: 'Заявки',
      description: 'Контролируйте обращения, приоритеты и сроки решения.',
      icon: 'confirmation_number',
      metric: '12',
      metricLabel: 'Открытых заявок',
    },
  },
];
