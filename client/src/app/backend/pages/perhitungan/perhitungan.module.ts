import { SharedModule } from './../../../shared/shared.module';
import { AuthGuard } from './../../../services/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { PerhitunganComponent } from './perhitungan.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerhitunganMatriksKeputusanComponent } from './perhitungan-matriks-keputusan/perhitungan-matriks-keputusan.component';
import { PerhitunganNormalisasiComponent } from './perhitungan-normalisasi/perhitungan-normalisasi.component';
import { PerhitunganNilaiTerbobotComponent } from './perhitungan-nilai-terbobot/perhitungan-nilai-terbobot.component';
import { PerhitunganRankingComponent } from './perhitungan-ranking/perhitungan-ranking.component';

const routes: Routes = [
  {
    path: '',
    component: PerhitunganComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    PerhitunganComponent,
    PerhitunganMatriksKeputusanComponent,
    PerhitunganNormalisasiComponent,
    PerhitunganNilaiTerbobotComponent,
    PerhitunganRankingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    PerhitunganComponent
  ]
})
export class PerhitunganModule { }
