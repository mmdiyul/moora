import { Subject } from 'rxjs';
import { AlternatifService } from './../../../../services/alternatif.service';
import { BobotService } from './../../../../services/bobot.service';
import { HelpersService } from './../../../../services/helpers.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Pengguna } from './../../../../services/pengguna';
import { Bobot } from './../../../../services/bobot';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-perhitungan-ranking',
  templateUrl: './perhitungan-ranking.component.html',
  styleUrls: ['./perhitungan-ranking.component.scss']
})
export class PerhitunganRankingComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['index', 'nama', 'yi'];
  matriksKeputusan = [];
  matriksOptimasi = [];
  matriksO = [];
  matriksRank = [];
  resultsLength = 0;

  constructor(
    private alternatifService: AlternatifService,
    private bobotService: BobotService,
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
  bobot: Bobot;
  sumBobot = 0;
  k1 = [];
  k2 = [];
  k3 = [];
  k4 = [];
  k5 = [];
  k6 = [];
  nilaiTertinggi = 0;
  hotelTerbaik = '';

  ngOnInit() {
    this.getData();
  }

  ngOnDestroy() {
    this.unsubs.next();
    this.unsubs.complete();
  }

  getBobot() {
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

        this.matriksKeputusan.forEach(element => {
          const kriteria1 = element.c1;
          const kriteria2 = element.c2;
          const kriteria3 = element.c3;
          const kriteria4 = element.c4;
          const kriteria5 = element.c5;
          const kriteria6 = element.c6;

          this.k1.push(kriteria1);
          this.k2.push(kriteria2);
          this.k3.push(kriteria3);
          this.k4.push(kriteria4);
          this.k5.push(kriteria5);
          this.k6.push(kriteria6);
        });

        this.matriksKeputusan.forEach(element => {
          const kriteria1 = element.c1;
          const kriteria2 = element.c2;
          const kriteria3 = element.c3;
          const kriteria4 = element.c4;
          const kriteria5 = element.c5;
          const kriteria6 = element.c6;

          let c1 = 0;
          let c2 = 0;
          let c3 = 0;
          let c4 = 0;
          let c5 = 0;
          let c6 = 0;

          for (const iterator of this.k1) {
            c1 += Math.pow(iterator, 2);
          }
          for (const iterator of this.k2) {
            c2 += Math.pow(iterator, 2);
          }
          for (const iterator of this.k3) {
            c3 += Math.pow(iterator, 2);
          }
          for (const iterator of this.k4) {
            c4 += Math.pow(iterator, 2);
          }
          for (const iterator of this.k5) {
            c5 += Math.pow(iterator, 2);
          }
          for (const iterator of this.k6) {
            c6 += Math.pow(iterator, 2);
          }

          element.c1 = kriteria1 / Math.sqrt(c1);
          element.c2 = kriteria2 / Math.sqrt(c2);
          element.c3 = kriteria3 / Math.sqrt(c3);
          element.c4 = kriteria4 / Math.sqrt(c4);
          element.c5 = kriteria5 / Math.sqrt(c5);
          element.c6 = kriteria6 / Math.sqrt(c6);
        });

        this.bobotService.getAll()
          // tslint:disable-next-line: no-shadowed-variable
          .subscribe(({results}) => {
            results.forEach(element => {
              if (element.userId._id === this.currentUser._id) {
                const w1 = element.w1;
                const w2 = element.w2;
                const w3 = element.w3;
                const w4 = element.w4;
                const w5 = element.w5;
                const w6 = element.w6;

                this.sumBobot = w1 + w2 + w3 + w4 + w5 + w6;
                element.w1 = w1 / this.sumBobot;
                element.w2 = w2 / this.sumBobot;
                element.w3 = w3 / this.sumBobot;
                element.w4 = w4 / this.sumBobot;
                element.w5 = w5 / this.sumBobot;
                element.w6 = w6 / this.sumBobot;

                this.matriksKeputusan.forEach(res => {
                  const kriteria1 = res.c1;
                  const kriteria2 = res.c2;
                  const kriteria3 = res.c3;
                  const kriteria4 = res.c4;
                  const kriteria5 = res.c5;
                  const kriteria6 = res.c6;

                  const c1 = kriteria1 * element.w1;
                  const c2 = kriteria2 * element.w2;
                  const c3 = kriteria3 * element.w3;
                  const c4 = kriteria4 * element.w4;
                  const c5 = kriteria5 * element.w5;
                  const c6 = kriteria6 * element.w6;

                  res.c1 = c1;
                  res.c2 = c2;
                  res.c3 = c3;
                  res.c4 = c4;
                  res.c5 = c5;
                  res.c6 = c6;

                  const optimasi = {
                    nama: res.nama,
                    max: c2 + c4 + c5 + c6,
                    min: c1 + c3,
                    yi: (c2 + c4 + c5 + c6) - (c1 + c3)
                  };

                  this.matriksOptimasi.push(optimasi);
                });
              }
            });
            this.matriksO = this.matriksOptimasi;

            this.matriksRank = this.matriksO;

            const len = this.matriksRank.length;
            for (let i = len - 1; i >= 0; i--) {
              for (let j = 1; j <= i; j++) {
                if (this.matriksRank[j - 1].yi < this.matriksRank[j].yi) {
                  const temp = this.matriksRank[j - 1];
                  this.matriksRank[j - 1] = this.matriksRank[j];
                  this.matriksRank[j] = temp;
                }
              }
            }
            this.nilaiTertinggi = this.matriksRank[0].yi;
            this.hotelTerbaik = this.matriksRank[0].nama;
          });
      }, (err) => {
        this.isLoadingResults = false;
        console.log(err);
      });
  }

}
