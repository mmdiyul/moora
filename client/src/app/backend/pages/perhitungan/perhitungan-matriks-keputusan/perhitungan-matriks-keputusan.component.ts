import { Pengguna } from './../../../../services/pengguna';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { HelpersService } from './../../../../services/helpers.service';
import { AlternatifService } from './../../../../services/alternatif.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-perhitungan-matriks-keputusan',
  templateUrl: './perhitungan-matriks-keputusan.component.html',
  styleUrls: ['./perhitungan-matriks-keputusan.component.scss']
})
export class PerhitunganMatriksKeputusanComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['index', 'nama', 'C01', 'C02', 'C03', 'C04', 'C05', 'C06'];
  matriksKeputusan = [];
  resultsLength = 0;

  constructor(
    private alternatifService: AlternatifService,
    private helper: HelpersService
  ) {
    this.currentUser = this.helper.currentUser();
  }

  private unsubs = new Subject();
  private subject = 'nama';
  countDataSearch = 0;
  isLoadingResults = true;
  sortActive = 'nama';
  sortDirection = 'asc';
  limit = 0; offset = 0;
  page = 0;
  searchForm = new FormGroup({
    search: new FormControl(''),
  });
  currentUser: Pengguna;

  ngOnInit() {
    this.getData();
  }

  ngOnDestroy() {
    this.unsubs.next();
    this.unsubs.complete();
  }

  getData() {
    this.isLoadingResults = true;
    this.alternatifService.getAll( '', this.sortActive, this.sortDirection, this.offset, this.limit )
      .subscribe(({count, results}) => {
        this.matriksKeputusan = results;
        this.resultsLength = count;
        this.isLoadingResults = false;
        this.countDataSearch = results.length;
        this.matriksKeputusan.forEach(element => {
          const kriteria1 = element.c1;
          const kriteria2 = element.c2;
          const kriteria3 = element.c3;
          const kriteria4 = element.c4;
          const kriteria5 = element.c5;
          const kriteria6 = element.c6;

          if (kriteria1 <= 200000) {
            element.c1 = 4;
          } else if (kriteria1 <= 400000) {
            element.c1 = 3;
          } else if (kriteria1 <= 600000) {
            element.c1 = 2;
          } else {
            element.c1 = 1;
          }

          if (kriteria2 <= 15) {
            element.c2 = 1;
          } else if (kriteria2 <= 30) {
            element.c2 = 2;
          } else if (kriteria2 <= 45) {
            element.c2 = 3;
          } else {
            element.c2 = 4;
          }

          if (kriteria3 <= 2) {
            element.c3 = 4;
          } else if (kriteria3 <= 4) {
            element.c3 = 3;
          } else if (kriteria3 <= 6) {
            element.c3 = 2;
          } else {
            element.c3 = 1;
          }

          if (kriteria4 <= 1) {
            element.c4 = 1;
          } else if (kriteria4 <= 2) {
            element.c4 = 2;
          } else if (kriteria4 <= 3) {
            element.c4 = 3;
          } else {
            element.c4 = 4;
          }

          if (kriteria5 <= 1000) {
            element.c5 = 1;
          } else if (kriteria5 <= 2000) {
            element.c5 = 2;
          } else if (kriteria5 <= 3000) {
            element.c5 = 3;
          } else {
            element.c5 = 4;
          }

          if (kriteria6 <= 1.5) {
            element.c6 = 1;
          } else if (kriteria6 <= 3) {
            element.c6 = 2;
          } else if (kriteria6 <= 4.5) {
            element.c6 = 3;
          } else {
            element.c6 = 4;
          }
        });
      }, (err) => {
        this.isLoadingResults = false;
        console.log(err);
      });
  }

}
