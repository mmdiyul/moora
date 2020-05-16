import { SharedModule } from './../../shared/shared.module';
import { MasukComponent } from './masuk.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: MasukComponent
  }
];

@NgModule({
  declarations: [
    MasukComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    MasukComponent
  ]
})
export class MasukModule { }
