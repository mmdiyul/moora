import { Pengguna } from './../../../services/pengguna';
import { HelpersService } from './../../../services/helpers.service';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

export interface Menu {
  name?: string;
  icon?: string;
  url?: string;
  hide?: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  menus: Menu[];
  currentUser: Pengguna;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private auth: AuthService,
    private helper: HelpersService
  ) {
    this.currentUser = this.helper.currentUser();
  }

  ngOnInit() {
    const prioritas = this.currentUser.roleId.prioritas;
    this.menus = [
      {
        name: 'Dashboard',
        url: '/backend/dashboard',
        hide: false,
      },
      {
        name: 'Alternatif',
        url: '/backend/alternatif',
        hide: false,
      },
      {
        name: 'Kriteria',
        url: '/backend/kriteria',
        hide: false,
      },
      {
        name: 'Bobot',
        url: '/backend/bobot',
        hide: false,
      },
      {
        name: 'Perhitungan',
        url: '/backend/perhitungan',
        hide: false,
      },
      {
        name: 'Pengguna',
        url: '/backend/pengguna',
        hide: (prioritas > 0) ? true : false,
      },
      {
        name: 'Peran',
        url: '/backend/peran',
        hide: (prioritas > 0) ? true : false,
      }
    ];
  }

  logout() {
    setTimeout(() => {
      this.auth.logout();
    }, 500);
  }
}
