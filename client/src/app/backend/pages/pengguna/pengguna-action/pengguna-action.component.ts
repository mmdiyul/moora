import { PeranService } from './../../../../services/peran.service';
import { takeUntil } from 'rxjs/operators';
import { Subscription, Subject } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-pengguna-action',
  templateUrl: './pengguna-action.component.html',
  styleUrls: ['./pengguna-action.component.scss']
})
export class PenggunaActionComponent implements OnInit, OnDestroy {

  constructor(
    private fb: FormBuilder,
    private preanService: PeranService,
    public dialogRef: MatDialogRef<PenggunaActionComponent>,
    @Inject(MAT_DIALOG_DATA) public md: any
  ) {
    this.dialogTitle = 'Tambah Pengguna';
    this.preanService.getAll().pipe(takeUntil(this.subject)).subscribe(({results}) => {
      this.rolesList = results;
    });
    this.form = this.fb.group({
      nama: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      roleId: [null, Validators.required],
      password: ['']
    });
    if (this.md.data) {
      const { nama, email, roleId, password} = this.md.data;
      this.form.setValue({nama, email, roleId: roleId._id, password});
      this.dialogTitle = 'Sunting Pengguna (' + nama + ')';
    }
  }

  form: FormGroup;
  subject = new Subject();
  subs = new Subscription();
  rolesList = [];
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
    this.form.controls.password.setValue('password');
    this.dialogRef.close(this.form.value);
  }

}
