import { AuthGuard } from './../../../services/auth.guard';
import { SharedModule } from './../../../shared/shared.module';
import { BobotComponent } from './bobot.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: BobotComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    BobotComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    BobotComponent
  ]
})
export class BobotModule { }
