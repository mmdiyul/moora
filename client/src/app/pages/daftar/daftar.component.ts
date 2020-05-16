import { BobotService } from './../../services/bobot.service';
import { takeUntil } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { HelpersService } from './../../services/helpers.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PenggunaService } from './../../services/pengguna.service';
import { PeranService } from './../../services/peran.service';
import { Pengguna } from './../../services/pengguna';
import { Bobot } from './../../services/bobot';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-daftar',
  templateUrl: './daftar.component.html',
  styleUrls: ['./daftar.component.scss']
})
export class DaftarComponent implements OnInit, OnDestroy {

  constructor(
    private fb: FormBuilder,
    private penggunaService: PenggunaService,
    private peranService: PeranService,
    private bobotService: BobotService,
    private router: Router,
    private helper: HelpersService
  ) {
    this.form = this.fb.group({
      nama: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: [''],
      roleId: [null]
    });
    this.currentUser = this.helper.currentUser();
    if (this.currentUser !== null) {
      this.router.navigate(['/backend/dashboard']);
    }
  }

  form: FormGroup;
  subject = new Subject();
  subs = new Subscription();
  peranList = [];
  dialogTitle = '';
  currentUser: Pengguna;
  dataBobot: Bobot;

  ngOnInit() {
    this.peranService.getAll('user').subscribe(({results}) => {
      this.peranList = results;
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  onSubmit() {
    this.form.controls.password.setValue('password');
    this.form.controls.roleId.setValue(this.peranList[0]._id);
    this.penggunaService.insert(this.form.value).pipe(takeUntil(this.subject)).subscribe(results => {
      this.dataBobot = {
        userId: results
      };
      this.bobotService.insert(this.dataBobot).pipe(takeUntil(this.subject)).subscribe();
      this.form.reset();
      const route = '/masuk';
      this.router.navigate([route]);
      this.helper.sbError('Akun berhasil didaftarkan', 'OK');
    }, err => {
      this.helper.sbError('Pendaftaran gagal! ' + err.message, 'OK');
    });
  }

}
