import { AuthGuard } from './../../../services/auth.guard';
import { SharedModule } from './../../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { PeranComponent } from './peran.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeranActionComponent } from './peran-action/peran-action.component';

const routes: Routes = [
  {
    path: '',
    component: PeranComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    PeranComponent,
    PeranActionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    PeranComponent
  ],
  entryComponents: [
    PeranActionComponent
  ]
})
export class PeranModule { }
