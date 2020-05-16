import { AuthGuard } from './../../../services/auth.guard';
import { SharedModule } from './../../../shared/shared.module';
import { KriteriaComponent } from './kriteria.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { KriteriaActionComponent } from './kriteria-action/kriteria-action.component';

const routes: Routes = [
  {
    path: '',
    component: KriteriaComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    KriteriaComponent,
    KriteriaActionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    KriteriaComponent
  ],
  entryComponents: [ KriteriaActionComponent ]
})
export class KriteriaModule { }
