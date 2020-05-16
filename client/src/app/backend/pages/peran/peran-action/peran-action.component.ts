import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-peran-action',
  templateUrl: './peran-action.component.html',
  styleUrls: ['./peran-action.component.scss']
})
export class PeranActionComponent implements OnInit, OnDestroy {

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<PeranActionComponent>,
    @Inject(MAT_DIALOG_DATA) public md: any
  ) {
    this.dialogTitle = 'Tambah Peran';
    this.form = this.fb.group({
      nama: ['', Validators.required],
      prioritas: [1, Validators.required]
    });
    if (this.md.data) {
      const { nama, prioritas } = this.md.data;
      this.form.setValue({nama, prioritas});
      this.dialogTitle = 'Sunting Peran (' + nama + ')';
    }
  }

  form: FormGroup;
  subs = new Subscription();
  dialogTitle = '';

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.dialogRef.close(this.form.value);
  }

}
