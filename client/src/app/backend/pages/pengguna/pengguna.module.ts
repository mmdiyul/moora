import { AuthGuard } from './../../../services/auth.guard';
import { SharedModule } from './../../../shared/shared.module';
import { PenggunaComponent } from './pengguna.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PenggunaActionComponent } from './pengguna-action/pengguna-action.component';

const routes: Routes = [
  {
    path: '',
    component: PenggunaComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    PenggunaComponent,
    PenggunaActionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    PenggunaComponent
  ],
  entryComponents: [
    PenggunaActionComponent
  ]
})
export class PenggunaModule { }
