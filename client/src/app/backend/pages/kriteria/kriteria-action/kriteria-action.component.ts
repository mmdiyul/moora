import { KriteriaService } from './../../../../services/kriteria.service';
import { takeUntil } from 'rxjs/operators';
import { Subscription, Subject } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';

@Component({
  selector: 'app-kriteria-action',
  templateUrl: './kriteria-action.component.html',
  styleUrls: ['./kriteria-action.component.scss']
})
export class KriteriaActionComponent implements OnInit, OnDestroy {

  constructor(
    private fb: FormBuilder,
    private kriteriaService: KriteriaService,
    public dialogRef: MatDialogRef<KriteriaActionComponent>,
    @Inject(MAT_DIALOG_DATA) public md: any
  ) {
    this.dialogTitle = 'Tambah Kriteria';
    this.kriteriaService.getAll().pipe(takeUntil(this.subject)).subscribe(({results}) => {
      this.kriteriaList = results;
    });
    this.form = this.fb.group({
      kode: ['', Validators.required],
      keterangan: ['', Validators.required],
      atribut: ['', Validators.required]
    });
    if (this.md.data) {
      const { kode, keterangan, atribut } = this.md.data;
      this.form.setValue({kode, keterangan, atribut});
      this.dialogTitle = 'Sunting Kriteria (' + kode + ')';
    }
  }

  form: FormGroup;
  subject = new Subject();
  subs = new Subscription();
  kriteriaList = [];
  atributList = ['Benefit', 'Cost'];
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
