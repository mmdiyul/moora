import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'masuk',
    pathMatch: 'full'
  },
  {
    path: 'masuk',
    loadChildren: () => import('./pages/masuk/masuk.module').then(m => m.MasukModule)
  },
  {
    path: 'daftar',
    loadChildren: () => import('./pages/daftar/daftar.module').then(m => m.DaftarModule)
  },
  {
    path: 'backend',
    loadChildren: () => import('./backend/backend.module').then(m => m.BackendModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
