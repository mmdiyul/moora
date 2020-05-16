import { AuthGuard } from './../../../services/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { AlternatifComponent } from './alternatif.component';
import { AlternatifActionComponent } from './alternatif-action/alternatif-action.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AlternatifComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    AlternatifComponent,
    AlternatifActionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    AlternatifComponent
  ],
  entryComponents: [
    AlternatifActionComponent
  ]
})
export class AlternatifModule { }
