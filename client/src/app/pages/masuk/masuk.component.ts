import { takeUntil, filter } from 'rxjs/operators';
import { FormStateMatcher } from './../../services/form-state-matcher';
import { Subject } from 'rxjs';
import { Pengguna } from './../../services/pengguna';
import { HelpersService } from './../../services/helpers.service';
import { AuthService } from './../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-masuk',
  templateUrl: './masuk.component.html',
  styleUrls: ['./masuk.component.scss']
})
export class MasukComponent implements OnInit, OnDestroy {

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private helper: HelpersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['']
    });
    this.currentUser = this.helper.currentUser();
    if (this.currentUser !== null) {
      this.router.navigate(['/backend']);
    }
  }

  currentUser: Pengguna;
  loginForm: FormGroup;
  fm = new FormStateMatcher();
  private unsubs = new Subject();

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.unsubs.next();
    this.unsubs.complete();
  }

  onSubmit() {
    this.loginForm.controls.password.setValue('password');
    const uname = this.loginForm.get('email').value;
    const pass = this.loginForm.get('password').value;
    this.auth.login(uname.toLowerCase(), pass).pipe(takeUntil(this.unsubs))
    .subscribe(res => {
      localStorage.setItem(this.auth.localUser, JSON.stringify(res.user));
      localStorage.setItem(this.auth.localToken, res.token);
      this.activatedRoute.queryParams.pipe(takeUntil(this.unsubs))
      .subscribe(params => {
        const route = params.returnUrl ? params.returnUrl : '/backend';
        setTimeout(() => {
          this.router.navigate([route]);
        }, 500);
      });
      this.helper.sbError('Berhasil masuk', 'OK');
    }, err => {
      this.helper.sbError(err.message, 'OK');
    });
  }
}
