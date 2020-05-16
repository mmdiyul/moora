import { Pengguna } from './../../../services/pengguna';
import { HelpersService } from './../../../services/helpers.service';
import { KriteriaService } from './../../../services/kriteria.service';
import { RemoveDialogComponent } from './../../partials/remove-dialog/remove-dialog.component';
import { KriteriaActionComponent } from './kriteria-action/kriteria-action.component';
import { Subject } from 'rxjs';
import { MatDialog, MatPaginator, MatSort } from '@angular/material';
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-kriteria',
  templateUrl: './kriteria.component.html',
  styleUrls: ['./kriteria.component.scss']
})
export class KriteriaComponent implements OnInit, OnDestroy, AfterViewInit {

  displayedColumns: string[] = ['index', 'kode', 'keterangan', 'atribut', 'actions'];
  displayedColumnsUser: string[] = ['index', 'kode', 'keterangan', 'atribut'];
  dataSource = [];
  resultsLength = 0;

  constructor(
    private services: KriteriaService,
    private dialog: MatDialog,
    private helper: HelpersService
  ) {
    this.currentUser = this.helper.currentUser();
    this.peran = this.currentUser.roleId.nama;
  }

  private modalWidth = '800px';
  private unsubs = new Subject();
  private subject = 'kode';
  countDataSearch = 0;
  isLoadingResults = true;
  sortActive = 'kode';
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
    const dialogRef = this.dialog.open(KriteriaActionComponent, {
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
          this.helper.sbError('Kriteria gagal ditambahkan');
        });
      }
    });
  }

  edit(data) {
    const dialogRef = this.dialog.open(KriteriaActionComponent, {
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
