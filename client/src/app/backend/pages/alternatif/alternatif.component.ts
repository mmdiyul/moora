import { Pengguna } from './../../../services/pengguna';
import { HelpersService } from './../../../services/helpers.service';
import { AlternatifService } from './../../../services/alternatif.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSort, MatPaginator, MatDialog } from '@angular/material';
import { AlternatifActionComponent } from './alternatif-action/alternatif-action.component';
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { RemoveDialogComponent } from './../../partials/remove-dialog/remove-dialog.component';
import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-alternatif',
  templateUrl: './alternatif.component.html',
  styleUrls: ['./alternatif.component.scss']
})
export class AlternatifComponent implements OnInit, OnDestroy, AfterViewInit {

  displayedColumns: string[] = ['index', 'nama', 'C01', 'C02', 'C03', 'C04', 'C05', 'C06', 'actions'];
  displayedColumnsUser: string[] = ['index', 'nama', 'C01', 'C02', 'C03', 'C04', 'C05', 'C06'];
  dataSource = [];
  resultsLength = 0;

  constructor(
    private services: AlternatifService,
    private dialog: MatDialog,
    private helper: HelpersService
  ) {
    this.currentUser = this.helper.currentUser();
    this.peran = this.currentUser.roleId.nama;
  }

  private modalWidth = '800px';
  private unsubs = new Subject();
  private subject = 'nama';
  countDataSearch = 0;
  isLoadingResults = true;
  sortActive = 'nama';
  sortDirection = 'asc';
  limit = 10; offset = 0;
  page = 0;
  pageSizeOpts = [5, 10, 25, 100];
  searchForm = new FormGroup({
    search: new FormControl(''),
  });
  currentUser: Pengguna;
  peran = '';

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  ngOnInit() {
    this.getData();
    this.searchForm.get('search').valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe(val => {
      this.isLoadingResults = true;
      this.services.getAll(val, this.sortActive, this.sortDirection, this.offset).subscribe(({count, results}) => {
        this.dataSource = results;
        this.resultsLength = count;
        this.countDataSearch = results.length;
        this.isLoadingResults = false;
      });
    });
  }

  ngOnDestroy() {
    this.unsubs.next();
    this.unsubs.complete();
  }

  ngAfterViewInit(): void {
    this.paginator.page.subscribe(() => {
      this.offset = this.paginator.pageIndex * this.paginator.pageSize;
      this.limit = this.paginator.pageSize;
      this.page = this.paginator.pageIndex + 1;
      this.getData();
    });
    this.paginator._intl.itemsPerPageLabel = 'Jumlah Baris';
  }

  getData() {
    this.isLoadingResults = true;
    this.services.getAll( '', this.sortActive, this.sortDirection, this.offset, this.limit )
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

  add() {
    const dialogRef = this.dialog.open(AlternatifActionComponent, {
      data: { action: 'add', data: null },
      width: this.modalWidth
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.services.insert(result)
        .pipe(takeUntil(this.unsubs))
        .subscribe(() => {
          this.getData();
          this.helper.sbSuccess(`${result[this.subject]} berhasil ditambahkan`);
        }, err => {
          this.helper.sbError('Alternatif gagal ditambahkan');
        });
      }
    });
  }

  edit(data) {
    const dialogRef = this.dialog.open(AlternatifActionComponent, {
      data: { action: 'edit', data},
      width: this.modalWidth
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.services.updateById(data._id, result)
        .pipe(takeUntil(this.unsubs))
        .subscribe(() => {
          this.getData();
          this.helper.sbSuccess(`${result[this.subject]} berhasil disunting`);
        }, err => {
          this.helper.sbError(`${result[this.subject]} gagal disunting`);
        });
      }
    });
  }

  remove(data) {
    this.dialog.open(RemoveDialogComponent).afterClosed().subscribe(result => {
      if (result) {
        this.services.removeById(data._id).pipe(takeUntil(this.unsubs)).subscribe(() => {
          this.getData();
          this.helper.sbSuccess(`${data[this.subject]} berhasil dihapus`);
        }, err => {
          this.helper.sbError(`${data[this.subject]} gagal dihapus`);
        });
      }
    });
  }
}
