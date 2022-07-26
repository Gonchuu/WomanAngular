import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//LazyLoad = utilizamos loadChildren para cargar módulos en vez de cargar sólo componentes
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('src/app/pages/home/home.module').then(m => m.HomeModule)
  },

  {
    path: 'woman-list',
    loadChildren: () => import('src/app/pages/woman-list/woman-list.module').then(m => m.WomanListModule)
  },

  {
    path: 'detail/:womanId',
    loadChildren: () => import('src/app/pages/woman-detail/woman-detail.module').then(m => m.WomanDetailModule)
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
