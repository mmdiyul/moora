import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { BobotService } from './../../../services/bobot.service';
import { Pengguna } from './../../../services/pengguna';
import { Bobot } from './../../../services/bobot';
import { HelpersService } from './../../../services/helpers.service';
import { Subject, Subscription } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-bobot',
  templateUrl: './bobot.component.html',
  styleUrls: ['./bobot.component.scss']
})
export class BobotComponent implements OnInit, OnDestroy {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private helper: HelpersService,
    private bobotService: BobotService
  ) {
    this.form = this.fb.group({
      w1: [0, Validators.required],
      w2: [0, Validators.required],
      w3: [0, Validators.required],
      w4: [0, Validators.required],
      w5: [0, Validators.required],
      w6: [0, Validators.required]
    });
    this.currentUser = this.helper.currentUser();
  }

  form: FormGroup;
  subject = new Subject();
  subs = new Subscription();
  currentUser: Pengguna;
  bobot: Bobot;

  ngOnInit() {
    this.bobotService.getAll().subscribe(({results}) => {
      results.forEach(element => {
        if (element.userId._id === this.currentUser._id) {
          this.bobot = element;
          const { w1, w2, w3, w4, w5, w6 } = this.bobot;
          this.form.setValue({w1, w2, w3, w4, w5, w6});
        }
      });
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  onSubmit() {
    this.bobotService.updateById(this.bobot._id, this.form.value).pipe(takeUntil(this.subject)).subscribe(results => {
      const route = '/backend/perhitungan';
      this.router.navigate([route]);
      this.helper.sbSuccess('Perubahan bobot berhasil disimpan');
    }, err => {
      this.helper.sbError('Perubahan bobot gagal disimpan');
    });
  }

}
