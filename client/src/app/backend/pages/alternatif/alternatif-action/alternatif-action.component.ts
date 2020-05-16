import { Subscription } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';

@Component({
  selector: 'app-alternatif-action',
  templateUrl: './alternatif-action.component.html',
  styleUrls: ['./alternatif-action.component.scss']
})
export class AlternatifActionComponent implements OnInit, OnDestroy {

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AlternatifActionComponent>,
    @Inject(MAT_DIALOG_DATA) public md: any
  ) {
    this.dialogTitle = 'Tambah Alternatif';
    this.form = this.fb.group({
      nama: ['', Validators.required],
      c1: [0, Validators.required],
      c2: [0, Validators.required],
      c3: [0, Validators.required],
      c4: [0, Validators.required],
      c5: [0, Validators.required],
      c6: [0, Validators.required]
    });
    if (this.md.data) {
      const { nama, c1, c2, c3, c4, c5, c6 } = this.md.data;
      this.form.setValue({nama, c1, c2, c3, c4, c5, c6});
      this.dialogTitle = 'Sunting Alternatif (' + nama + ')';
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
