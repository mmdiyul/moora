import { PenggunaService } from './../../../services/pengguna.service';
import { KriteriaService } from './../../../services/kriteria.service';
import { AlternatifService } from './../../../services/alternatif.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private alternatifService: AlternatifService,
    private kriteriaService: KriteriaService,
    private penggunaService: PenggunaService
  ) { }

  alternatifLength: number;
  kriteriaLength: number;
  penggunaLength: number;

  ngOnInit() {
    this.getCountData();
  }

  getCountData() {
    this.alternatifService.getAll()
      .subscribe(({count}) => {
        this.alternatifLength = count;
      });
    this.kriteriaService.getAll()
      .subscribe(({count}) => {
        this.kriteriaLength = count;
      });
    this.penggunaService.getAll()
      .subscribe(({count}) => {
        this.penggunaLength = count;
      });
  }
}
