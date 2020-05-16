import { MatPaginator, MatSort } from '@angular/material';
import { Pengguna } from './../../../services/pengguna';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { HelpersService } from './../../../services/helpers.service';
import { AlternatifService } from './../../../services/alternatif.service';
import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-perhitungan',
  templateUrl: './perhitungan.component.html',
  styleUrls: ['./perhitungan.component.scss']
})
export class PerhitunganComponent implements OnInit, OnDestroy, AfterViewInit {

  displayedColumns: string[] = ['index', 'nama', 'C01', 'C02', 'C03', 'C04', 'C05', 'C06'];
  dataSource = [];
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

  ngAfterViewInit(): void {

  }

  getData() {
    this.isLoadingResults = true;
    this.alternatifService.getAll( '', this.sortActive, this.sortDirection, this.offset, this.limit )
      .subscribe(({count, results}) => {
        this.dataSource = results;
        this.resultsLength = count;
        this.isLoadingResults = false;
        this.countDataSearch = results.length;
      }, (err) => {
        this.isLoadingResults = false;
        console.log(err);
      });
  }
}
