import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WomanDetailComponent } from './pages/woman-detail/woman-detail.component';
import { WomanListComponent } from './pages/woman-list/woman-list.component';

//LazyLoad = utilizamos loadChildren para cargar módulos en vez de cargar sólo componentes
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },

  {
    path: 'woman-list',
    component: WomanListComponent,
  },

  {
    path: 'detail/:name',
    component: WomanDetailComponent,
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
