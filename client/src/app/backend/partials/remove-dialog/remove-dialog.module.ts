import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveDialogComponent } from './remove-dialog.component';

@NgModule({
  declarations: [
    RemoveDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  entryComponents: [
    RemoveDialogComponent
  ]
})
export class RemoveDialogModule { }
