import { AuthGuard } from './../services/auth.guard';
import { RemoveDialogModule } from './partials/remove-dialog/remove-dialog.module';
import { PerhitunganModule } from './pages/perhitungan/perhitungan.module';
import { SharedModule } from './../shared/shared.module';
import { SidenavModule } from './partials/sidenav/sidenav.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { RemoveDialogComponent } from './partials/remove-dialog/remove-dialog.component';
import { SidenavComponent } from './partials/sidenav/sidenav.component';
import { AlternatifComponent } from './pages/alternatif/alternatif.component';
import { AlternatifActionComponent } from './pages/alternatif/alternatif-action/alternatif-action.component';
import { AlternatifModule } from './pages/alternatif/alternatif.module';
import { HttpClientModule } from '@angular/common/http';
import { PeranModule } from './pages/peran/peran.module';
import { PenggunaModule } from './pages/pengguna/pengguna.module';
import { BobotModule } from './pages/bobot/bobot.module';
import { KriteriaModule } from './pages/kriteria/kriteria.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'alternatif',
    loadChildren: () => import('./pages/alternatif/alternatif.module').then(m => m.AlternatifModule)
  },
  {
    path: 'bobot',
    loadChildren: () => import('./pages/bobot/bobot.module').then(m => m.BobotModule)
  },
  {
    path: 'peran',
    loadChildren: () => import('./pages/peran/peran.module').then(m => m.PeranModule)
  },
  {
    path: 'perhitungan',
    loadChildren: () => import('./pages/perhitungan/perhitungan.module').then(m => m.PerhitunganModule)
  },
  {
    path: 'kriteria',
    loadChildren: () => import('./pages/kriteria/kriteria.module').then(m => m.KriteriaModule)
  },
  {
    path: 'pengguna',
    loadChildren: () => import('./pages/pengguna/pengguna.module').then(m => m.PenggunaModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardModule,
    AlternatifModule,
    PeranModule,
    BobotModule,
    PerhitunganModule,
    KriteriaModule,
    PenggunaModule,
    RouterModule.forChild(routes),
    SharedModule,
    HttpClientModule
  ],
  exports: [
    SidenavModule,
    RemoveDialogModule
  ]
})
export class BackendModule { }
