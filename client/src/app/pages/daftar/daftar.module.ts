import { SharedModule } from './../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { DaftarComponent } from './daftar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: DaftarComponent
  }
];

@NgModule({
  declarations: [
    DaftarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    DaftarComponent
  ]
})
export class DaftarModule { }
