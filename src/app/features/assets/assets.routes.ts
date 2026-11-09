import { Routes } from '@angular/router';
import { FeaturePlaceholderComponent } from '../shared/feature-placeholder.component';

export const ASSETS_ROUTES: Routes = [
  {
    path: '',
    component: FeaturePlaceholderComponent,
    data: {
      eyebrow: 'Учёт конфигураций',
      title: 'Активы',
      description: 'Единый реестр оборудования и его жизненного цикла.',
      icon: 'inventory_2',
      metric: '428',
      metricLabel: 'Учтённых активов',
    },
  },
];
