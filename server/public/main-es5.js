function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"layout === 'frontend'\">\n  <router-outlet *ngIf=\"true\"></router-outlet>\n</ng-container>\n<app-sidenav *ngIf=\"layout === 'backend'\">\n  <router-outlet *ngIf=\"true\"></router-outlet>\n</app-sidenav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/alternatif/alternatif-action/alternatif-action.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/alternatif/alternatif-action/alternatif-action.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBackendPagesAlternatifAlternatifActionAlternatifActionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form name=\"form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" novalidate>\n  <h1 mat-dialog-title class=\"mt-2\">{{ this.dialogTitle }}</h1>\n  <div mat-dialog-content>\n    <mat-form-field class=\"w-100\" appearance=\"outline\">\n      <mat-label>Nama</mat-label>\n      <input matInput formControlName=\"nama\" placeholder=\"Nama\">\n      <mat-error *ngIf=\"form.get('nama').hasError('required')\">\n        Nama wajib diisi\n      </mat-error>\n    </mat-form-field>\n    <div class=\"row w-100 m-0 p-0\">\n      <div class=\"col-6 w-100 m-0 p-0\">\n        <mat-form-field class=\"w-100 pr-2\" appearance=\"outline\">\n          <mat-label>C1 (Harga)</mat-label>\n          <input matInput formControlName=\"c1\" placeholder=\"C1 (Harga)\" type=\"number\">\n          <mat-error *ngIf=\"form.get('c1').hasError('required')\">\n            C1 (Harga) wajib diisi\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div class=\"col-6 w-100 m-0 p-0\">\n        <mat-form-field class=\"w-100 pl-2\" appearance=\"outline\">\n          <mat-label>C2 (Fasilitas)</mat-label>\n          <input matInput formControlName=\"c2\" placeholder=\"C2 (Fasilitas)\" type=\"number\">\n          <mat-error *ngIf=\"form.get('c2').hasError('required')\">\n            C2 (Fasilitas) wajib diisi\n          </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"row m-0 p-0\">\n      <div class=\"col-6 w-100 m-0 p-0\">\n        <mat-form-field class=\"w-100 pr-2\" appearance=\"outline\">\n          <mat-label>C3 (Jarak dengan Pusat Kota)</mat-label>\n          <input matInput formControlName=\"c3\" placeholder=\"C3 (Jarak dengan Pusat Kota)\" type=\"number\">\n          <mat-error *ngIf=\"form.get('c3').hasError('required')\">\n              C3 (Jarak dengan Pusat Kota) wajib diisi\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div class=\"col-6 w-100 m-0 p-0\">\n        <mat-form-field class=\"w-100 pl-2\" appearance=\"outline\">\n          <mat-label>C4 (Bintang/Kelas)</mat-label>\n          <mat-select formControlName=\"c4\">\n            <mat-option [value]=0>0</mat-option>\n            <mat-option [value]=1>1</mat-option>\n            <mat-option [value]=2>2</mat-option>\n            <mat-option [value]=3>3</mat-option>\n            <mat-option [value]=4>4</mat-option>\n            <mat-option [value]=5>5</mat-option>\n          </mat-select>\n          <mat-error *ngIf=\"form.get('c4').hasError('required')\">\n            C4 (Bintang/Kelas) wajib diisi\n          </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"row m-0 p-0\">\n      <div class=\"col-6 w-100 m-0 p-0\">\n        <mat-form-field class=\"w-100 pr-2\" appearance=\"outline\">\n          <mat-label>C5 (Jumlah Ulasan)</mat-label>\n          <input matInput formControlName=\"c5\" placeholder=\"C5 (Jumlah Ulasan)\" type=\"number\">\n          <mat-error *ngIf=\"form.get('c5').hasError('required')\">\n            C5 (Jumlah Ulasan) wajib diisi\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div class=\"col-6 w-100 m-0 p-0\">\n        <mat-form-field class=\"w-100 pl-2\" appearance=\"outline\">\n          <mat-label>C6 (Rating)</mat-label>\n          <input matInput formControlName=\"c6\" placeholder=\"C6 (Rating)\" type=\"number\">\n          <mat-error *ngIf=\"form.get('c6').hasError('required')\">\n            C6 (Rating) wajib diisi\n          </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n  </div>\n  <div mat-dialog-actions class=\"mb-1\">\n    <button mat-raised-button class=\"mx-auto mt-1\" type=\"button\" (click)=\"closeDialog()\">Batal</button>\n    <button mat-raised-button class=\"mx-auto mt-1\" color=\"primary\" type=\"submit\" [disabled]=\"form.invalid\">Simpan</button>\n  </div>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/alternatif/alternatif.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/alternatif/alternatif.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBackendPagesAlternatifAlternatifComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"m-4\">\n  <div class=\"bg-white w-100 p-4 shadow\">\n    <h4>Alternatif</h4>\n    <hr/>\n    <div class=\"row\">\n      <div *ngIf=\"peran !== 'user'\" class=\"col-9\">\n        <form [formGroup]=\"searchForm\" class=\"w-100\">\n          <mat-form-field class=\"w-100\">\n            <mat-icon matPrefix>search</mat-icon>\n            <input matInput formControlName=\"search\" placeholder=\"Cari...\" autocomplete=\"off\">\n          </mat-form-field>\n        </form>\n      </div>\n      <div *ngIf=\"peran === 'user'\" class=\"col-12\">\n        <form [formGroup]=\"searchForm\" class=\"w-100\">\n          <mat-form-field class=\"w-100\">\n            <mat-icon matPrefix>search</mat-icon>\n            <input matInput formControlName=\"search\" placeholder=\"Cari...\" autocomplete=\"off\">\n          </mat-form-field>\n        </form>\n      </div>\n      <div *ngIf=\"peran !== 'user'\" class=\"col-3 py-2\">\n        <button mat-raised-button class=\"w-100\" color=\"primary\" (click)=\"add()\">Tambah Alternatif</button>\n      </div>\n    </div>\n    <div class=\"backend-content\">\n      <div class=\"backend-loading-shade\" *ngIf=\"isLoadingResults\">\n        <mat-spinner></mat-spinner>\n      </div>\n      <div class=\"backend-loading-shade\" *ngIf=\"countDataSearch === 0\">\n        <mat-icon class=\"text-danger\">error_outline</mat-icon>\n        <span class=\"text-danger\">&nbsp;Data tidak ditemukan</span>\n      </div>\n      <table mat-table [dataSource]=\"dataSource\" class=\"w-100 backend-table\">\n        <ng-container matColumnDef=\"index\">\n          <th mat-header-cell *matHeaderCellDef> No </th>\n          <td mat-cell *matCellDef=\"let element; let i = index\"> {{ i + 1 }} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"nama\">\n          <th mat-header-cell *matHeaderCellDef> Nama Alternatif </th>\n          <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.nama}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"C01\">\n          <th mat-header-cell *matHeaderCellDef> C01 </th>\n          <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c1}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"C02\">\n          <th mat-header-cell *matHeaderCellDef> C02 </th>\n          <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c2}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"C03\">\n          <th mat-header-cell *matHeaderCellDef> C03 </th>\n          <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c3}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"C04\">\n          <th mat-header-cell *matHeaderCellDef> C04 </th>\n          <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c4}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"C05\">\n          <th mat-header-cell *matHeaderCellDef> C05 </th>\n          <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c5}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"C06\">\n          <th mat-header-cell *matHeaderCellDef> C06 </th>\n          <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c6}} </td>\n        </ng-container>\n        <ng-container *ngIf=\"peran !== 'user'\" matColumnDef=\"actions\">\n          <th mat-header-cell *matHeaderCellDef></th>\n          <td mat-cell *matCellDef=\"let element\" class=\"actions\">\n            <button mat-icon-button [matMenuTriggerFor]=\"actionMenu\">\n              <mat-icon>more_vert</mat-icon></button>\n            <mat-menu #actionMenu=\"matMenu\" xPosition=\"before\">\n              <button mat-menu-item (click)=\"edit(element)\">\n                <mat-icon>edit</mat-icon>\n                <span>Sunting</span>\n              </button>\n              <button mat-menu-item (click)=\"remove(element)\">\n                <mat-icon>delete</mat-icon>\n                <span>Hapus</span>\n              </button>\n            </mat-menu>\n          </td>\n        </ng-container>\n        <div *ngIf=\"peran !== 'user'\">\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns;\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </div>\n        <div *ngIf=\"peran === 'user'\">\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumnsUser;\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumnsUser;\"></tr>\n        </div>\n      </table>\n      <mat-paginator [length]=\"resultsLength\" [pageSize]=\"limit\" [pageSizeOptions]=\"pageSizeOpts\"></mat-paginator>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/bobot/bobot.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/bobot/bobot.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBackendPagesBobotBobotComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"m-4\">\n  <div class=\"bg-white w-100 p-4 shadow\">\n    <h4>Bobot</h4>\n    <hr/>\n    <p>\n      <i class=\"text-danger\">\n        <strong>\n          *)&nbsp;\n        </strong>\n        <span>\n          Semakin besar bobot berarti semakin penting.\n        </span>\n      </i>\n    </p>\n    <form name=\"form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" novalidate>\n      <div class=\"row w-100 m-0 p-0\">\n        <div class=\"col-4 w-100 m-0 p-0\">\n          <mat-form-field class=\"w-100 pr-2\" appearance=\"outline\">\n            <mat-label>Bobot Kriteria Harga</mat-label>\n            <mat-select formControlName=\"w1\">\n              <mat-option [value]=1>1</mat-option>\n              <mat-option [value]=2>2</mat-option>\n              <mat-option [value]=3>3</mat-option>\n              <mat-option [value]=4>4</mat-option>\n              <mat-option [value]=5>5</mat-option>\n              <mat-option [value]=6>6</mat-option>\n              <mat-option [value]=7>7</mat-option>\n              <mat-option [value]=8>8</mat-option>\n              <mat-option [value]=9>9</mat-option>\n              <mat-option [value]=10>10</mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"form.get('w1').hasError('required')\">\n              Bobot Kriteria Harga wajib diisi\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"col-4 w-100 m-0 p-0\">\n          <mat-form-field class=\"w-100 pl-1 pr-1\" appearance=\"outline\">\n            <mat-label>Bobot Kriteria Fasilitas</mat-label>\n            <mat-select formControlName=\"w2\">\n              <mat-option [value]=1>1</mat-option>\n              <mat-option [value]=2>2</mat-option>\n              <mat-option [value]=3>3</mat-option>\n              <mat-option [value]=4>4</mat-option>\n              <mat-option [value]=5>5</mat-option>\n              <mat-option [value]=6>6</mat-option>\n              <mat-option [value]=7>7</mat-option>\n              <mat-option [value]=8>8</mat-option>\n              <mat-option [value]=9>9</mat-option>\n              <mat-option [value]=10>10</mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"form.get('w2').hasError('required')\">\n              Bobot Kriteria Fasilitas wajib diisi\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"col-4 w-100 m-0 p-0\">\n          <mat-form-field class=\"w-100 pl-2\" appearance=\"outline\">\n            <mat-label>Bobot Kriteria Jarak Dengan Pusat Kota</mat-label>\n            <mat-select formControlName=\"w3\">\n              <mat-option [value]=1>1</mat-option>\n              <mat-option [value]=2>2</mat-option>\n              <mat-option [value]=3>3</mat-option>\n              <mat-option [value]=4>4</mat-option>\n              <mat-option [value]=5>5</mat-option>\n              <mat-option [value]=6>6</mat-option>\n              <mat-option [value]=7>7</mat-option>\n              <mat-option [value]=8>8</mat-option>\n              <mat-option [value]=9>9</mat-option>\n              <mat-option [value]=10>10</mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"form.get('w3').hasError('required')\">\n              Bobot Kriteria Jarak Dengan Pusat Kota wajib diisi\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row w-100 m-0 p-0\">\n        <div class=\"col-4 w-100 m-0 p-0\">\n          <mat-form-field class=\"w-100 pr-2\" appearance=\"outline\">\n            <mat-label>Bobot Kriteria Bintang</mat-label>\n            <mat-select formControlName=\"w4\">\n              <mat-option [value]=1>1</mat-option>\n              <mat-option [value]=2>2</mat-option>\n              <mat-option [value]=3>3</mat-option>\n              <mat-option [value]=4>4</mat-option>\n              <mat-option [value]=5>5</mat-option>\n              <mat-option [value]=6>6</mat-option>\n              <mat-option [value]=7>7</mat-option>\n              <mat-option [value]=8>8</mat-option>\n              <mat-option [value]=9>9</mat-option>\n              <mat-option [value]=10>10</mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"form.get('w4').hasError('required')\">\n              Bobot Kriteria Bintang wajib diisi\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"col-4 w-100 m-0 p-0\">\n          <mat-form-field class=\"w-100 pl-1 pr-1\" appearance=\"outline\">\n            <mat-label>Bobot Kriteria Jumlah Ulasan</mat-label>\n            <mat-select formControlName=\"w5\">\n              <mat-option [value]=1>1</mat-option>\n              <mat-option [value]=2>2</mat-option>\n              <mat-option [value]=3>3</mat-option>\n              <mat-option [value]=4>4</mat-option>\n              <mat-option [value]=5>5</mat-option>\n              <mat-option [value]=6>6</mat-option>\n              <mat-option [value]=7>7</mat-option>\n              <mat-option [value]=8>8</mat-option>\n              <mat-option [value]=9>9</mat-option>\n              <mat-option [value]=10>10</mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"form.get('w5').hasError('required')\">\n              Bobot Kriteria Jumlah Ulasan wajib diisi\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"col-4 w-100 m-0 p-0\">\n          <mat-form-field class=\"w-100 pl-2\" appearance=\"outline\">\n            <mat-label>Bobot Kriteria Rating</mat-label>\n            <mat-select formControlName=\"w6\">\n              <mat-option [value]=1>1</mat-option>\n              <mat-option [value]=2>2</mat-option>\n              <mat-option [value]=3>3</mat-option>\n              <mat-option [value]=4>4</mat-option>\n              <mat-option [value]=5>5</mat-option>\n              <mat-option [value]=6>6</mat-option>\n              <mat-option [value]=7>7</mat-option>\n              <mat-option [value]=8>8</mat-option>\n              <mat-option [value]=9>9</mat-option>\n              <mat-option [value]=10>10</mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"form.get('w6').hasError('required')\">\n              Bobot Kriteria Rating wajib diisi\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <button mat-raised-button class=\"mx-auto mt-1\" color=\"primary\" type=\"submit\" [disabled]=\"form.invalid\">Simpan</button>\n    </form>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/dashboard/dashboard.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/dashboard/dashboard.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBackendPagesDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"m-4\">\n  <div class=\"bg-white w-100 p-4 shadow\">\n    <h4>Dashboard</h4>\n    <hr/>\n    <div class=\"row w-100 mx-0 my-3 px-0 py-3\">\n      <div class=\"col-4 m-0 p-0\">\n        <div class=\"w-100 pr-2\">\n          <div class=\"w-100 bg-primary text-white p-4 rounded shadow d-flex flex-column justify-content-center align-items-center\">\n            <h3>{{ alternatifLength }}</h3>\n            <span>Alternatif</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-4 m-0 p-0\">\n        <div class=\"w-100 pl-1 pr-1\">\n          <div class=\"w-100 bg-success text-white p-4 rounded shadow d-flex flex-column justify-content-center align-items-center\">\n            <h3>{{ kriteriaLength }}</h3>\n            <span>Kriteria</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-4 m-0 p-0\">\n        <div class=\"w-100 pl-2\">\n          <div class=\"w-100 bg-danger text-white p-4 rounded shadow d-flex flex-column justify-content-center align-items-center\">\n            <h3>{{ penggunaLength }}</h3>\n            <span>Pengguna</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <h5>Langkah-langkah penggunaan aplikasi:</h5>\n    <ol>\n      <li>Daftar menggunakan nama dan email</li>\n      <li>Masuk menggunakan email yang telah didaftarkan</li>\n      <li>Untuk melihat daftar alternatif, masuk ke menu Alternatif</li>\n      <li>Untuk melihat daftar kriteria, masuk ke menu Kriteria</li>\n      <li>Atur bobot tiap kriteria dengan mengubah nilai bobot pada menu Bobot</li>\n      <li>Hasil perhitungan dapat dilihat di menu Perhitungan</li>\n    </ol>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/kriteria/kriteria-action/kriteria-action.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/kriteria/kriteria-action/kriteria-action.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBackendPagesKriteriaKriteriaActionKriteriaActionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form name=\"form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" novalidate>\n  <h1 mat-dialog-title class=\"mt-2\">{{ this.dialogTitle }}</h1>\n  <div mat-dialog-content>\n    <mat-form-field class=\"w-100\" appearance=\"outline\">\n      <mat-label>Kode</mat-label>\n      <mat-select formControlName=\"kode\">\n        <mat-option *ngFor=\"let kriteria of kriteriaList\" [value]=\"kriteria.kode\">\n          {{ kriteria.kode }}\n        </mat-option>\n      </mat-select>\n      <mat-error *ngIf=\"form.get('kode').hasError('required')\">\n        Kode wajib diisi\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"w-100\" appearance=\"outline\">\n      <mat-label>Keterangan</mat-label>\n      <input matInput formControlName=\"keterangan\" placeholder=\"Keterangan\">\n      <mat-error *ngIf=\"form.get('keterangan').hasError('required')\">\n        Keterangan wajib diisi\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"w-100\" appearance=\"outline\">\n      <mat-label>Atribut</mat-label>\n      <mat-select formControlName=\"atribut\">\n        <mat-option *ngFor=\"let atribut of atributList\" [value]=\"atribut\">\n          {{ atribut }}\n        </mat-option>\n      </mat-select>\n      <mat-error *ngIf=\"form.get('atribut').hasError('required')\">\n        Atribut wajib diisi\n      </mat-error>\n    </mat-form-field>\n  </div>\n  <div mat-dialog-actions class=\"mb-1\">\n    <button mat-raised-button class=\"mx-auto mt-1\" type=\"button\" (click)=\"closeDialog()\">Batal</button>\n    <button mat-raised-button class=\"mx-auto mt-1\" color=\"primary\" type=\"submit\" [disabled]=\"form.invalid\">Simpan</button>\n  </div>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/kriteria/kriteria.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/kriteria/kriteria.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBackendPagesKriteriaKriteriaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"m-4\">\n  <div class=\"bg-white w-100 p-4 shadow\">\n    <h4>Kriteria</h4>\n    <hr/>\n    <div class=\"row\">\n      <div *ngIf=\"peran !== 'user'\" class=\"col-9\">\n        <form [formGroup]=\"searchForm\" class=\"w-100\">\n          <mat-form-field class=\"w-100\">\n            <mat-icon matPrefix>search</mat-icon>\n            <input matInput formControlName=\"search\" placeholder=\"Cari...\" autocomplete=\"off\">\n          </mat-form-field>\n        </form>\n      </div>\n      <div *ngIf=\"peran === 'user'\" class=\"col-12\">\n        <form [formGroup]=\"searchForm\" class=\"w-100\">\n          <mat-form-field class=\"w-100\">\n            <mat-icon matPrefix>search</mat-icon>\n            <input matInput formControlName=\"search\" placeholder=\"Cari...\" autocomplete=\"off\">\n          </mat-form-field>\n        </form>\n      </div>\n      <div *ngIf=\"peran !== 'user'\" class=\"col-3 py-2\">\n        <button mat-raised-button class=\"w-100\" color=\"primary\" (click)=\"add()\">Tambah Kriteria</button>\n      </div>\n    </div>\n    <div class=\"backend-content\">\n      <div class=\"backend-loading-shade\" *ngIf=\"isLoadingResults\">\n        <mat-spinner></mat-spinner>\n      </div>\n      <div class=\"backend-loading-shade\" *ngIf=\"countDataSearch === 0\">\n        <mat-icon class=\"text-danger\">error_outline</mat-icon>\n        <span class=\"text-danger\">&nbsp;Data tidak ditemukan</span>\n      </div>\n      <table mat-table [dataSource]=\"dataSource\" class=\"w-100 backend-table\">\n        <ng-container matColumnDef=\"index\">\n          <th mat-header-cell *matHeaderCellDef> No </th>\n          <td mat-cell *matCellDef=\"let element; let i = index\"> {{ i + 1 }} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"kode\">\n          <th mat-header-cell *matHeaderCellDef> Kode </th>\n          <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.kode}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"keterangan\">\n          <th mat-header-cell *matHeaderCellDef> Keterangan </th>\n          <td mat-cell class=\"cols\" *matCellDef=\"let element\">{{ element.keterangan }}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"atribut\">\n          <th mat-header-cell *matHeaderCellDef> Atribut </th>\n          <td mat-cell class=\"cols\" *matCellDef=\"let element\">{{ element.atribut }}</td>\n        </ng-container>\n        <ng-container *ngIf=\"peran !== 'user'\" matColumnDef=\"actions\">\n          <th mat-header-cell *matHeaderCellDef></th>\n          <td mat-cell *matCellDef=\"let element\" class=\"actions\">\n            <button mat-icon-button [matMenuTriggerFor]=\"actionMenu\">\n              <mat-icon>more_vert</mat-icon></button>\n            <mat-menu #actionMenu=\"matMenu\" xPosition=\"before\">\n              <button mat-menu-item (click)=\"edit(element)\">\n                <mat-icon>edit</mat-icon>\n                <span>Sunting</span>\n              </button>\n              <button mat-menu-item (click)=\"remove(element)\">\n                <mat-icon>delete</mat-icon>\n                <span>Hapus</span>\n              </button>\n            </mat-menu>\n          </td>\n        </ng-container>\n        <div *ngIf=\"peran !== 'user'\">\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns;\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </div>\n        <div *ngIf=\"peran === 'user'\">\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumnsUser;\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumnsUser;\"></tr>\n        </div>\n      </table>\n      <mat-paginator [length]=\"resultsLength\" [pageSize]=\"limit\" [pageSizeOptions]=\"pageSizeOpts\"></mat-paginator>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/pengguna/pengguna-action/pengguna-action.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/pengguna/pengguna-action/pengguna-action.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBackendPagesPenggunaPenggunaActionPenggunaActionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form name=\"form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" novalidate>\n  <h1 mat-dialog-title class=\"mt-2\">{{ this.dialogTitle }}</h1>\n  <div mat-dialog-content>\n    <mat-form-field class=\"w-100\" appearance=\"outline\">\n      <mat-label>Nama</mat-label>\n      <input matInput formControlName=\"nama\" placeholder=\"Nama\">\n      <mat-error *ngIf=\"form.get('nama').hasError('required')\">\n        Nama wajib diisi\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"w-100\" appearance=\"outline\">\n      <mat-label>Email</mat-label>\n      <input matInput formControlName=\"email\" placeholder=\"Email\">\n      <mat-error *ngIf=\"form.get('email').hasError('required')\">\n        Email wajib diisi\n      </mat-error>\n      <mat-error *ngIf=\"form.get('email').hasError('email')\">\n        Email tidak valid\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"w-100\" appearance=\"outline\">\n      <mat-label>Peran</mat-label>\n      <mat-select formControlName=\"roleId\">\n        <mat-option *ngFor=\"let peran of rolesList\" [value]=\"peran._id\">\n          {{ peran.nama }}\n        </mat-option>\n      </mat-select>\n      <mat-error *ngIf=\"form.get('roleId').hasError('required')\">\n        Peran wajib diisi\n      </mat-error>\n    </mat-form-field>\n  </div>\n  <div mat-dialog-actions class=\"mb-1\">\n    <button mat-raised-button class=\"mx-auto mt-1\" type=\"button\" (click)=\"closeDialog()\">Batal</button>\n    <button mat-raised-button class=\"mx-auto mt-1\" color=\"primary\" type=\"submit\" [disabled]=\"form.invalid\">Simpan</button>\n  </div>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/pengguna/pengguna.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/pengguna/pengguna.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBackendPagesPenggunaPenggunaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"m-4\">\n  <div class=\"bg-white w-100 p-4 shadow\">\n    <h4>Pengguna</h4>\n    <hr/>\n    <div class=\"row\">\n      <div class=\"col-9\">\n        <form [formGroup]=\"searchForm\" class=\"w-100\">\n          <mat-form-field class=\"w-100\">\n            <mat-icon matPrefix>search</mat-icon>\n            <input matInput formControlName=\"search\" placeholder=\"Cari...\" autocomplete=\"off\">\n          </mat-form-field>\n        </form>\n      </div>\n      <div class=\"col-3 py-2\">\n        <button mat-raised-button class=\"w-100\" color=\"primary\" (click)=\"add()\">Tambah Pengguna</button>\n      </div>\n    </div>\n    <div class=\"backend-content\">\n      <div class=\"backend-loading-shade\" *ngIf=\"isLoadingResults\">\n        <mat-spinner></mat-spinner>\n      </div>\n      <div class=\"backend-loading-shade\" *ngIf=\"countDataSearch === 0\">\n        <mat-icon class=\"text-danger\">error_outline</mat-icon>\n        <span class=\"text-danger\">&nbsp;Data tidak ditemukan</span>\n      </div>\n      <table mat-table [dataSource]=\"dataSource\" class=\"w-100 backend-table\">\n        <ng-container matColumnDef=\"index\">\n          <th mat-header-cell *matHeaderCellDef> No </th>\n          <td mat-cell *matCellDef=\"let element; let i = index\"> {{ i + 1 }} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"nama\">\n          <th mat-header-cell *matHeaderCellDef> Nama </th>\n          <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.nama}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"email\">\n          <th mat-header-cell *matHeaderCellDef> Email </th>\n          <td mat-cell class=\"cols\" *matCellDef=\"let element\">{{ element.email }}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"peran\">\n          <th mat-header-cell *matHeaderCellDef> Peran </th>\n          <td mat-cell class=\"cols\" *matCellDef=\"let element\">{{ element.roleId.nama }}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"actions\">\n          <th mat-header-cell *matHeaderCellDef></th>\n          <td mat-cell *matCellDef=\"let element\" class=\"actions\">\n            <button mat-icon-button [matMenuTriggerFor]=\"actionMenu\">\n              <mat-icon>more_vert</mat-icon></button>\n            <mat-menu #actionMenu=\"matMenu\" xPosition=\"before\">\n              <button mat-menu-item (click)=\"edit(element)\">\n                <mat-icon>edit</mat-icon>\n                <span>Sunting</span>\n              </button>\n              <button mat-menu-item (click)=\"remove(element)\">\n                <mat-icon>delete</mat-icon>\n                <span>Hapus</span>\n              </button>\n            </mat-menu>\n          </td>\n        </ng-container>\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns;\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n      <mat-paginator [length]=\"resultsLength\" [pageSize]=\"limit\" [pageSizeOptions]=\"pageSizeOpts\"></mat-paginator>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/peran/peran-action/peran-action.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/peran/peran-action/peran-action.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBackendPagesPeranPeranActionPeranActionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form name=\"form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" novalidate>\n  <h1 mat-dialog-title class=\"mt-2\">{{ this.dialogTitle }}</h1>\n  <div mat-dialog-content>\n    <mat-form-field class=\"w-100\" appearance=\"outline\">\n      <mat-label>Nama</mat-label>\n      <input matInput formControlName=\"nama\" placeholder=\"Nama\">\n      <mat-error *ngIf=\"form.get('nama').hasError('required')\">\n        Nama wajib diisi\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"w-100\" appearance=\"outline\">\n      <mat-label>Prioritas</mat-label>\n      <mat-select formControlName=\"prioritas\">\n        <mat-option [value]=0>0</mat-option>\n        <mat-option [value]=1>1</mat-option>\n      </mat-select>\n      <mat-error *ngIf=\"form.get('prioritas').hasError('required')\">\n        Prioritas wajib diisi\n      </mat-error>\n    </mat-form-field>\n  </div>\n  <div mat-dialog-actions class=\"mb-1\">\n    <button mat-raised-button class=\"mx-auto mt-1\" type=\"button\" (click)=\"closeDialog()\">Batal</button>\n    <button mat-raised-button class=\"mx-auto mt-1\" color=\"primary\" type=\"submit\" [disabled]=\"form.invalid\">Simpan</button>\n  </div>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/peran/peran.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/peran/peran.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBackendPagesPeranPeranComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"m-4\">\n  <div class=\"bg-white w-100 p-4 shadow\">\n    <h4>Peran</h4>\n    <hr/>\n    <div class=\"row\">\n      <div class=\"col-9\">\n        <form [formGroup]=\"searchForm\" class=\"w-100\">\n          <mat-form-field class=\"w-100\">\n            <mat-icon matPrefix>search</mat-icon>\n            <input matInput formControlName=\"search\" placeholder=\"Cari...\" autocomplete=\"off\">\n          </mat-form-field>\n        </form>\n      </div>\n      <div class=\"col-3 py-2\">\n        <button mat-raised-button class=\"w-100\" color=\"primary\" (click)=\"add()\">Tambah Kriteria</button>\n      </div>\n    </div>\n    <div class=\"backend-content\">\n      <div class=\"backend-loading-shade\" *ngIf=\"isLoadingResults\">\n        <mat-spinner></mat-spinner>\n      </div>\n      <div class=\"backend-loading-shade\" *ngIf=\"countDataSearch === 0\">\n        <mat-icon class=\"text-danger\">error_outline</mat-icon>\n        <span class=\"text-danger\">&nbsp;Data tidak ditemukan</span>\n      </div>\n      <table mat-table [dataSource]=\"dataSource\" class=\"w-100 backend-table\">\n        <ng-container matColumnDef=\"index\">\n          <th mat-header-cell *matHeaderCellDef> No </th>\n          <td mat-cell *matCellDef=\"let element; let i = index\"> {{ i + 1 }} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"nama\">\n          <th mat-header-cell *matHeaderCellDef> Nama </th>\n          <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.nama}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"prioritas\">\n          <th mat-header-cell *matHeaderCellDef> Prioritas </th>\n          <td mat-cell class=\"cols\" *matCellDef=\"let element\">{{ element.prioritas }}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"actions\">\n          <th mat-header-cell *matHeaderCellDef></th>\n          <td mat-cell *matCellDef=\"let element\" class=\"actions\">\n            <button mat-icon-button [matMenuTriggerFor]=\"actionMenu\">\n              <mat-icon>more_vert</mat-icon></button>\n            <mat-menu #actionMenu=\"matMenu\" xPosition=\"before\">\n              <button mat-menu-item (click)=\"edit(element)\">\n                <mat-icon>edit</mat-icon>\n                <span>Sunting</span>\n              </button>\n              <button mat-menu-item (click)=\"remove(element)\">\n                <mat-icon>delete</mat-icon>\n                <span>Hapus</span>\n              </button>\n            </mat-menu>\n          </td>\n        </ng-container>\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns;\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n      <mat-paginator [length]=\"resultsLength\" [pageSize]=\"limit\" [pageSizeOptions]=\"pageSizeOpts\"></mat-paginator>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/perhitungan/perhitungan-matriks-keputusan/perhitungan-matriks-keputusan.component.html":
  /*!************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/perhitungan/perhitungan-matriks-keputusan/perhitungan-matriks-keputusan.component.html ***!
    \************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBackendPagesPerhitunganPerhitunganMatriksKeputusanPerhitunganMatriksKeputusanComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"bg-white w-100 p-4 mt-4 shadow\">\n  <h5 class=\"text-center\">Matriks Keputusan</h5>\n  <hr/>\n  <div class=\"backend-content\">\n    <div class=\"backend-loading-shade\" *ngIf=\"isLoadingResults\">\n      <mat-spinner></mat-spinner>\n    </div>\n    <div class=\"backend-loading-shade\" *ngIf=\"countDataSearch === 0\">\n      <mat-icon class=\"text-danger\">error_outline</mat-icon>\n      <span class=\"text-danger\">&nbsp;Data tidak ditemukan</span>\n    </div>\n    <table mat-table [dataSource]=\"matriksKeputusan\" class=\"w-100 backend-table\">\n      <ng-container matColumnDef=\"index\">\n        <th mat-header-cell *matHeaderCellDef> No </th>\n        <td mat-cell *matCellDef=\"let element; let i = index\"> {{ i + 1 }} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"nama\">\n        <th mat-header-cell *matHeaderCellDef> Nama Alternatif </th>\n        <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.nama}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"C01\">\n        <th mat-header-cell *matHeaderCellDef> C01 </th>\n        <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c1}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"C02\">\n        <th mat-header-cell *matHeaderCellDef> C02 </th>\n        <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c2}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"C03\">\n        <th mat-header-cell *matHeaderCellDef> C03 </th>\n        <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c3}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"C04\">\n        <th mat-header-cell *matHeaderCellDef> C04 </th>\n        <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c4}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"C05\">\n        <th mat-header-cell *matHeaderCellDef> C05 </th>\n        <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c5}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"C06\">\n        <th mat-header-cell *matHeaderCellDef> C06 </th>\n        <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c6}} </td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns;\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/perhitungan/perhitungan-nilai-terbobot/perhitungan-nilai-terbobot.component.html":
  /*!******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/perhitungan/perhitungan-nilai-terbobot/perhitungan-nilai-terbobot.component.html ***!
    \******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBackendPagesPerhitunganPerhitunganNilaiTerbobotPerhitunganNilaiTerbobotComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"bg-white w-100 p-4 mt-4 shadow\">\n  <h5 class=\"text-center\">Nilai Terbobot</h5>\n  <hr/>\n  <div class=\"backend-content\">\n    <div class=\"backend-loading-shade\" *ngIf=\"isLoadingResults\">\n      <mat-spinner></mat-spinner>\n    </div>\n    <div class=\"backend-loading-shade\" *ngIf=\"countDataSearch === 0\">\n      <mat-icon class=\"text-danger\">error_outline</mat-icon>\n      <span class=\"text-danger\">&nbsp;Data tidak ditemukan</span>\n    </div>\n    <table mat-table [dataSource]=\"matriksKeputusan\" class=\"w-100 backend-table\">\n      <ng-container matColumnDef=\"index\">\n        <th mat-header-cell *matHeaderCellDef> No </th>\n        <td mat-cell *matCellDef=\"let element; let i = index\"> {{ i + 1 }} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"nama\">\n        <th mat-header-cell *matHeaderCellDef> Nama Alternatif </th>\n        <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.nama}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"C01\">\n        <th mat-header-cell *matHeaderCellDef> C01 </th>\n        <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c1 | number: '1.2-5'}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"C02\">\n        <th mat-header-cell *matHeaderCellDef> C02 </th>\n        <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c2 | number: '1.2-5'}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"C03\">\n        <th mat-header-cell *matHeaderCellDef> C03 </th>\n        <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c3 | number: '1.2-5'}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"C04\">\n        <th mat-header-cell *matHeaderCellDef> C04 </th>\n        <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c4 | number: '1.2-5'}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"C05\">\n        <th mat-header-cell *matHeaderCellDef> C05 </th>\n        <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c5 | number: '1.2-5'}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"C06\">\n        <th mat-header-cell *matHeaderCellDef> C06 </th>\n        <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c6 | number: '1.2-5'}} </td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns;\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n</div>\n<div class=\"bg-white w-100 p-4 mt-4 shadow\">\n  <h5 class=\"text-center\">Nilai Optimasi</h5>\n  <hr/>\n  <div class=\"backend-content\">\n    <div class=\"backend-loading-shade\" *ngIf=\"isLoadingResults\">\n      <mat-spinner></mat-spinner>\n    </div>\n    <div class=\"backend-loading-shade\" *ngIf=\"countDataSearch === 0\">\n      <mat-icon class=\"text-danger\">error_outline</mat-icon>\n      <span class=\"text-danger\">&nbsp;Data tidak ditemukan</span>\n    </div>\n    <table mat-table [dataSource]=\"matriksO\" class=\"w-100 backend-table\">\n      <ng-container matColumnDef=\"index\">\n        <th mat-header-cell *matHeaderCellDef> No </th>\n        <td mat-cell *matCellDef=\"let element; let i = index\"> {{ i + 1 }} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"nama\">\n        <th mat-header-cell *matHeaderCellDef> Nama Alternatif </th>\n        <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.nama}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"max\">\n        <th mat-header-cell *matHeaderCellDef> Max </th>\n        <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.max | number: '1.2-5'}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"min\">\n        <th mat-header-cell *matHeaderCellDef> Min </th>\n        <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.min | number: '1.2-5'}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"yi\">\n        <th mat-header-cell *matHeaderCellDef> Yi </th>\n        <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.yi | number: '1.2-5'}} </td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumnsOptimasi;\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumnsOptimasi;\"></tr>\n    </table>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/perhitungan/perhitungan-normalisasi/perhitungan-normalisasi.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/perhitungan/perhitungan-normalisasi/perhitungan-normalisasi.component.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBackendPagesPerhitunganPerhitunganNormalisasiPerhitunganNormalisasiComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"bg-white w-100 p-4 mt-4 shadow\">\n  <h5 class=\"text-center\">Normalisasi</h5>\n  <hr/>\n  <div class=\"backend-content\">\n    <div class=\"backend-loading-shade\" *ngIf=\"isLoadingResults\">\n      <mat-spinner></mat-spinner>\n    </div>\n    <div class=\"backend-loading-shade\" *ngIf=\"countDataSearch === 0\">\n      <mat-icon class=\"text-danger\">error_outline</mat-icon>\n      <span class=\"text-danger\">&nbsp;Data tidak ditemukan</span>\n    </div>\n    <table mat-table [dataSource]=\"matriksKeputusan\" class=\"w-100 backend-table\">\n      <ng-container matColumnDef=\"index\">\n        <th mat-header-cell *matHeaderCellDef> No </th>\n        <td mat-cell *matCellDef=\"let element; let i = index\"> {{ i + 1 }} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"nama\">\n        <th mat-header-cell *matHeaderCellDef> Nama Alternatif </th>\n        <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.nama}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"C01\">\n        <th mat-header-cell *matHeaderCellDef> C01 </th>\n        <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c1 | number: '1.2-5'}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"C02\">\n        <th mat-header-cell *matHeaderCellDef> C02 </th>\n        <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c2 | number: '1.2-5'}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"C03\">\n        <th mat-header-cell *matHeaderCellDef> C03 </th>\n        <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c3 | number: '1.2-5'}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"C04\">\n        <th mat-header-cell *matHeaderCellDef> C04 </th>\n        <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c4 | number: '1.2-5'}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"C05\">\n        <th mat-header-cell *matHeaderCellDef> C05 </th>\n        <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c5 | number: '1.2-5'}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"C06\">\n        <th mat-header-cell *matHeaderCellDef> C06 </th>\n        <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c6 | number: '1.2-5'}} </td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns;\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/perhitungan/perhitungan-ranking/perhitungan-ranking.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/perhitungan/perhitungan-ranking/perhitungan-ranking.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBackendPagesPerhitunganPerhitunganRankingPerhitunganRankingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"bg-success text-white w-100 p-4 mt-4 shadow\">\n  <h5 class=\"text-center\">Hasil Ranking</h5>\n  <hr/>\n  <div class=\"backend-content\">\n    <div class=\"backend-loading-shade\" *ngIf=\"isLoadingResults\">\n      <mat-spinner></mat-spinner>\n    </div>\n    <div class=\"backend-loading-shade\" *ngIf=\"countDataSearch === 0\">\n      <mat-icon class=\"text-danger\">error_outline</mat-icon>\n      <span class=\"text-danger\">&nbsp;Data tidak ditemukan</span>\n    </div>\n    <table mat-table [dataSource]=\"matriksRank\" class=\"w-100 backend-table bg-success\">\n      <ng-container matColumnDef=\"index\">\n        <th mat-header-cell *matHeaderCellDef class=\"text-white\"> No </th>\n        <td mat-cell *matCellDef=\"let element; let i = index\" class=\"text-white\"> {{ i + 1 }} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"nama\">\n        <th mat-header-cell *matHeaderCellDef class=\"text-white\"> Nama Alternatif </th>\n        <td mat-cell class=\"cols\" *matCellDef=\"let element\" class=\"text-white\"> {{element.nama}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"yi\">\n        <th mat-header-cell *matHeaderCellDef class=\"text-white\"> Yi </th>\n        <td mat-cell class=\"cols\" *matCellDef=\"let element\" class=\"text-white\"> {{element.yi | number: '1.2-5'}} </td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns;\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n</div>\n<div class=\"bg-white w-100 p-4 mt-4 shadow\">\n  <h5 class=\"text-center\">Kesimpulan</h5>\n  <hr/>\n  <p>\n    Berdasarkan nilai bobot yang Anda berikan dan dari hasil perhitungan di atas, maka dapat disimpulkan bahwa hotel terbaik di kota Malang adalah <strong>{{ hotelTerbaik }}</strong> dengan nilai optimasi sebesar <strong>{{ nilaiTertinggi }}</strong>\n  </p>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/perhitungan/perhitungan.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/perhitungan/perhitungan.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBackendPagesPerhitunganPerhitunganComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"m-4\">\n  <div class=\"bg-white w-100 p-4 shadow\">\n    <h4>Perhitungan</h4>\n  </div>\n  <div class=\"bg-white w-100 p-4 mt-4 shadow\">\n    <h5 class=\"text-center\">Data Awal</h5>\n    <hr/>\n    <div class=\"backend-content\">\n      <div class=\"backend-loading-shade\" *ngIf=\"isLoadingResults\">\n        <mat-spinner></mat-spinner>\n      </div>\n      <div class=\"backend-loading-shade\" *ngIf=\"countDataSearch === 0\">\n        <mat-icon class=\"text-danger\">error_outline</mat-icon>\n        <span class=\"text-danger\">&nbsp;Data tidak ditemukan</span>\n      </div>\n      <table mat-table [dataSource]=\"dataSource\" class=\"w-100 backend-table\" onload=\"getMatriksKeputusan(dataSource)\">\n        <ng-container matColumnDef=\"index\">\n          <th mat-header-cell *matHeaderCellDef> No </th>\n          <td mat-cell *matCellDef=\"let element; let i = index\"> {{ i + 1 }} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"nama\">\n          <th mat-header-cell *matHeaderCellDef> Nama Alternatif </th>\n          <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.nama}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"C01\">\n          <th mat-header-cell *matHeaderCellDef> C01 </th>\n          <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c1}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"C02\">\n          <th mat-header-cell *matHeaderCellDef> C02 </th>\n          <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c2}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"C03\">\n          <th mat-header-cell *matHeaderCellDef> C03 </th>\n          <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c3}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"C04\">\n          <th mat-header-cell *matHeaderCellDef> C04 </th>\n          <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c4}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"C05\">\n          <th mat-header-cell *matHeaderCellDef> C05 </th>\n          <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c5}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"C06\">\n          <th mat-header-cell *matHeaderCellDef> C06 </th>\n          <td mat-cell class=\"cols\" *matCellDef=\"let element\"> {{element.c6}} </td>\n        </ng-container>\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns;\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n    </div>\n  </div>\n  <app-perhitungan-matriks-keputusan></app-perhitungan-matriks-keputusan>\n  <app-perhitungan-normalisasi></app-perhitungan-normalisasi>\n  <app-perhitungan-nilai-terbobot></app-perhitungan-nilai-terbobot>\n  <app-perhitungan-ranking></app-perhitungan-ranking>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/partials/remove-dialog/remove-dialog.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/backend/partials/remove-dialog/remove-dialog.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBackendPartialsRemoveDialogRemoveDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div mat-dialog-content class=\"my-1\">\n  {{message}}\n</div>\n<div mat-dialog-actions class=\"my-1 py-1\">\n  <button mat-raised-button class=\"mx-auto mt-1\" type=\"button\" (click)=\"cancel()\">Batal</button>\n  <button mat-raised-button class=\"mx-auto mt-1\" color=\"primary\" (click)=\"submit()\">Yakin</button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/partials/sidenav/sidenav.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/backend/partials/sidenav/sidenav.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBackendPartialsSidenavSidenavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav border-0 shadow\" fixedInViewport\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"(isHandset$ | async) === false\">\n    <mat-toolbar color=\"primary\" class=\"shadow\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"(isHandset$ | async) === true\">\n        <mat-icon aria-label=\"Side nav toggle icon\">clear</mat-icon>\n      </button>\n      <span>&nbsp;Menu</span>\n    </mat-toolbar>\n    <div class=\"d-flex flex-column align-items-center justify-content-center p-3 text-break text-center\">\n      <div style=\"width: 120px; height: 120px;\">\n        <img src=\"../../../../assets/user.png\" alt=\"profile picture\" class=\"w-100 rounded-circle border\">\n      </div>\n      <strong class=\"mt-2\">{{ currentUser.nama }}</strong>\n      <span>{{ currentUser.roleId.nama }}</span>\n    </div>\n    <mat-nav-list *ngFor=\"let menu of menus\">\n      <a mat-list-item *ngIf=\"!menu.hide\" [routerLink]=\"menu.url\" routerLinkActive=\"active\">{{ menu.name }}</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\" class=\"shadow\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>&nbsp;Moora</span>\n      <button mat-icon-button class=\"ml-auto\" (click)=\"logout()\">\n        <mat-icon>exit_to_app</mat-icon>\n      </button>\n    </mat-toolbar>\n    <ng-content></ng-content>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/daftar/daftar.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/daftar/daftar.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDaftarDaftarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-primary\">\n  <div class=\"p-5 bg-white rounded shadow text-center\" style=\"min-width: 500px;\">\n    <h4>Daftar</h4>\n    <hr>\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" class=\"mt-2\">\n      <mat-form-field class=\"w-100\" appearance=\"outline\">\n        <mat-label>Nama</mat-label>\n        <input matInput placeholder=\"Nama\" formControlName=\"nama\" autocomplete=\"off\">\n        <mat-icon matSuffix>create</mat-icon>\n        <mat-error *ngIf=\"form.get('nama').hasError('required')\">Nama harus diisi</mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"w-100\" appearance=\"outline\">\n        <mat-label>Email</mat-label>\n        <input matInput placeholder=\"Email\" formControlName=\"email\" autocomplete=\"off\">\n        <mat-icon matSuffix>email</mat-icon>\n        <mat-error *ngIf=\"form.get('email').hasError('required')\">Email harus diisi</mat-error>\n        <mat-error *ngIf=\"form.get('email').hasError('email')\">Email tidak valid</mat-error>\n      </mat-form-field>\n      <button mat-raised-button type=\"submit\" color=\"accent\" class=\"w-100\" [disabled]=\"form.invalid\">Masuk</button>\n    </form>\n    <hr>\n    <i>\n      Sudah memiliki akun?\n      <strong>\n        <a routerLink=\"/masuk\">Masuk</a>\n      </strong>\n    </i>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masuk/masuk.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masuk/masuk.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMasukMasukComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-primary\">\n  <div class=\"p-5 bg-white rounded shadow text-center\" style=\"min-width: 500px;\">\n    <h4>Masuk</h4>\n    <hr>\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" class=\"mt-2\">\n      <mat-form-field class=\"w-100\" appearance=\"outline\">\n        <mat-label>Email</mat-label>\n        <input matInput placeholder=\"Email\" formControlName=\"email\" autocomplete=\"off\">\n        <mat-icon matSuffix>email</mat-icon>\n        <mat-error *ngIf=\"loginForm.get('email').hasError('required')\">Email harus diisi</mat-error>\n        <mat-error *ngIf=\"loginForm.get('email').hasError('email')\">Email tidak valid</mat-error>\n      </mat-form-field>\n      <button mat-raised-button type=\"submit\" color=\"accent\" class=\"w-100\" [disabled]=\"loginForm.invalid\">Masuk</button>\n    </form>\n    <hr>\n    <i>\n      Belum memiliki akun?\n      <strong>\n        <a routerLink=\"/daftar\">Daftar</a>\n      </strong>\n    </i>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      redirectTo: 'masuk',
      pathMatch: 'full'
    }, {
      path: 'masuk',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/masuk/masuk.module */
        "./src/app/pages/masuk/masuk.module.ts")).then(function (m) {
          return m.MasukModule;
        });
      }
    }, {
      path: 'daftar',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/daftar/daftar.module */
        "./src/app/pages/daftar/daftar.module.ts")).then(function (m) {
          return m.DaftarModule;
        });
      }
    }, {
      path: 'backend',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./backend/backend.module */
        "./src/app/backend/backend.module.ts")).then(function (m) {
          return m.BackendModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AppComponent = function AppComponent(router) {
      var _this = this;

      _classCallCheck(this, AppComponent);

      this.router = router;
      this.title = 'client';
      this.layout = 'frontend';
      this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
      })).subscribe(function (a) {
        _this.layout = a.url.match(/\/(backend)(.+)?/gm) ? 'backend' : 'frontend';
      });
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _backend_backend_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./backend/backend.module */
    "./src/app/backend/backend.module.ts");
    /* harmony import */


    var _interceptors_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./interceptors/index */
    "./src/app/interceptors/index.ts");
    /* harmony import */


    var _pages_daftar_daftar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/daftar/daftar.module */
    "./src/app/pages/daftar/daftar.module.ts");
    /* harmony import */


    var _pages_masuk_masuk_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/masuk/masuk.module */
    "./src/app/pages/masuk/masuk.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _pages_masuk_masuk_module__WEBPACK_IMPORTED_MODULE_4__["MasukModule"], _pages_daftar_daftar_module__WEBPACK_IMPORTED_MODULE_3__["DaftarModule"], _backend_backend_module__WEBPACK_IMPORTED_MODULE_1__["BackendModule"]],
      providers: [_interceptors_index__WEBPACK_IMPORTED_MODULE_2__["httpInterceptorProviders"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/backend/backend.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/backend/backend.module.ts ***!
    \*******************************************/

  /*! exports provided: BackendModule */

  /***/
  function srcAppBackendBackendModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackendModule", function () {
      return BackendModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/auth.guard */
    "./src/app/services/auth.guard.ts");
    /* harmony import */


    var _partials_remove_dialog_remove_dialog_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./partials/remove-dialog/remove-dialog.module */
    "./src/app/backend/partials/remove-dialog/remove-dialog.module.ts");
    /* harmony import */


    var _pages_perhitungan_perhitungan_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/perhitungan/perhitungan.module */
    "./src/app/backend/pages/perhitungan/perhitungan.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _partials_sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./partials/sidenav/sidenav.module */
    "./src/app/backend/partials/sidenav/sidenav.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _pages_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/dashboard/dashboard.module */
    "./src/app/backend/pages/dashboard/dashboard.module.ts");
    /* harmony import */


    var _pages_alternatif_alternatif_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/alternatif/alternatif.module */
    "./src/app/backend/pages/alternatif/alternatif.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _pages_peran_peran_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/peran/peran.module */
    "./src/app/backend/pages/peran/peran.module.ts");
    /* harmony import */


    var _pages_pengguna_pengguna_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/pengguna/pengguna.module */
    "./src/app/backend/pages/pengguna/pengguna.module.ts");
    /* harmony import */


    var _pages_bobot_bobot_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/bobot/bobot.module */
    "./src/app/backend/pages/bobot/bobot.module.ts");
    /* harmony import */


    var _pages_kriteria_kriteria_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/kriteria/kriteria.module */
    "./src/app/backend/pages/kriteria/kriteria.module.ts");

    var routes = [{
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    }, {
      path: 'dashboard',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/dashboard/dashboard.module */
        "./src/app/backend/pages/dashboard/dashboard.module.ts")).then(function (m) {
          return m.DashboardModule;
        });
      }
    }, {
      path: 'alternatif',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/alternatif/alternatif.module */
        "./src/app/backend/pages/alternatif/alternatif.module.ts")).then(function (m) {
          return m.AlternatifModule;
        });
      }
    }, {
      path: 'bobot',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/bobot/bobot.module */
        "./src/app/backend/pages/bobot/bobot.module.ts")).then(function (m) {
          return m.BobotModule;
        });
      }
    }, {
      path: 'peran',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/peran/peran.module */
        "./src/app/backend/pages/peran/peran.module.ts")).then(function (m) {
          return m.PeranModule;
        });
      }
    }, {
      path: 'perhitungan',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/perhitungan/perhitungan.module */
        "./src/app/backend/pages/perhitungan/perhitungan.module.ts")).then(function (m) {
          return m.PerhitunganModule;
        });
      }
    }, {
      path: 'kriteria',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/kriteria/kriteria.module */
        "./src/app/backend/pages/kriteria/kriteria.module.ts")).then(function (m) {
          return m.KriteriaModule;
        });
      }
    }, {
      path: 'pengguna',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/pengguna/pengguna.module */
        "./src/app/backend/pages/pengguna/pengguna.module.ts")).then(function (m) {
          return m.PenggunaModule;
        });
      }
    }];

    var BackendModule = function BackendModule() {
      _classCallCheck(this, BackendModule);
    };

    BackendModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _pages_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_9__["DashboardModule"], _pages_alternatif_alternatif_module__WEBPACK_IMPORTED_MODULE_10__["AlternatifModule"], _pages_peran_peran_module__WEBPACK_IMPORTED_MODULE_12__["PeranModule"], _pages_bobot_bobot_module__WEBPACK_IMPORTED_MODULE_14__["BobotModule"], _pages_perhitungan_perhitungan_module__WEBPACK_IMPORTED_MODULE_3__["PerhitunganModule"], _pages_kriteria_kriteria_module__WEBPACK_IMPORTED_MODULE_15__["KriteriaModule"], _pages_pengguna_pengguna_module__WEBPACK_IMPORTED_MODULE_13__["PenggunaModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]],
      exports: [_partials_sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_5__["SidenavModule"], _partials_remove_dialog_remove_dialog_module__WEBPACK_IMPORTED_MODULE_2__["RemoveDialogModule"]]
    })], BackendModule);
    /***/
  },

  /***/
  "./src/app/backend/pages/alternatif/alternatif-action/alternatif-action.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/backend/pages/alternatif/alternatif-action/alternatif-action.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBackendPagesAlternatifAlternatifActionAlternatifActionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tlbmQvcGFnZXMvYWx0ZXJuYXRpZi9hbHRlcm5hdGlmLWFjdGlvbi9hbHRlcm5hdGlmLWFjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/backend/pages/alternatif/alternatif-action/alternatif-action.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/backend/pages/alternatif/alternatif-action/alternatif-action.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: AlternatifActionComponent */

  /***/
  function srcAppBackendPagesAlternatifAlternatifActionAlternatifActionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlternatifActionComponent", function () {
      return AlternatifActionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AlternatifActionComponent = /*#__PURE__*/function () {
      function AlternatifActionComponent(fb, dialogRef, md) {
        _classCallCheck(this, AlternatifActionComponent);

        this.fb = fb;
        this.dialogRef = dialogRef;
        this.md = md;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.dialogTitle = '';
        this.dialogTitle = 'Tambah Alternatif';
        this.form = this.fb.group({
          nama: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          c1: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          c2: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          c3: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          c4: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          c5: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          c6: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });

        if (this.md.data) {
          var _this$md$data = this.md.data,
              nama = _this$md$data.nama,
              c1 = _this$md$data.c1,
              c2 = _this$md$data.c2,
              c3 = _this$md$data.c3,
              c4 = _this$md$data.c4,
              c5 = _this$md$data.c5,
              c6 = _this$md$data.c6;
          this.form.setValue({
            nama: nama,
            c1: c1,
            c2: c2,
            c3: c3,
            c4: c4,
            c5: c5,
            c6: c6
          });
          this.dialogTitle = 'Sunting Alternatif (' + nama + ')';
        }
      }

      _createClass(AlternatifActionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs.unsubscribe();
        }
      }, {
        key: "closeDialog",
        value: function closeDialog() {
          this.dialogRef.close();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.dialogRef.close(this.form.value);
        }
      }]);

      return AlternatifActionComponent;
    }();

    AlternatifActionComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    AlternatifActionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-alternatif-action',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./alternatif-action.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/alternatif/alternatif-action/alternatif-action.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./alternatif-action.component.scss */
      "./src/app/backend/pages/alternatif/alternatif-action/alternatif-action.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], AlternatifActionComponent);
    /***/
  },

  /***/
  "./src/app/backend/pages/alternatif/alternatif.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/backend/pages/alternatif/alternatif.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBackendPagesAlternatifAlternatifComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tlbmQvcGFnZXMvYWx0ZXJuYXRpZi9hbHRlcm5hdGlmLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/backend/pages/alternatif/alternatif.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/backend/pages/alternatif/alternatif.component.ts ***!
    \******************************************************************/

  /*! exports provided: AlternatifComponent */

  /***/
  function srcAppBackendPagesAlternatifAlternatifComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlternatifComponent", function () {
      return AlternatifComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_helpers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../services/helpers.service */
    "./src/app/services/helpers.service.ts");
    /* harmony import */


    var _services_alternatif_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../services/alternatif.service */
    "./src/app/services/alternatif.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _alternatif_action_alternatif_action_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./alternatif-action/alternatif-action.component */
    "./src/app/backend/pages/alternatif/alternatif-action/alternatif-action.component.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _partials_remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../partials/remove-dialog/remove-dialog.component */
    "./src/app/backend/partials/remove-dialog/remove-dialog.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AlternatifComponent = /*#__PURE__*/function () {
      function AlternatifComponent(services, dialog, helper) {
        _classCallCheck(this, AlternatifComponent);

        this.services = services;
        this.dialog = dialog;
        this.helper = helper;
        this.displayedColumns = ['index', 'nama', 'C01', 'C02', 'C03', 'C04', 'C05', 'C06', 'actions'];
        this.displayedColumnsUser = ['index', 'nama', 'C01', 'C02', 'C03', 'C04', 'C05', 'C06'];
        this.dataSource = [];
        this.resultsLength = 0;
        this.modalWidth = '800px';
        this.unsubs = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.subject = 'nama';
        this.countDataSearch = 0;
        this.isLoadingResults = true;
        this.sortActive = 'nama';
        this.sortDirection = 'asc';
        this.limit = 10;
        this.offset = 0;
        this.page = 0;
        this.pageSizeOpts = [5, 10, 25, 100];
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          search: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
        this.peran = '';
        this.currentUser = this.helper.currentUser();
        this.peran = this.currentUser.roleId.nama;
      }

      _createClass(AlternatifComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.getData();
          this.searchForm.get('search').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])()).subscribe(function (val) {
            _this2.isLoadingResults = true;

            _this2.services.getAll(val, _this2.sortActive, _this2.sortDirection, _this2.offset).subscribe(function (_ref) {
              var count = _ref.count,
                  results = _ref.results;
              _this2.dataSource = results;
              _this2.resultsLength = count;
              _this2.countDataSearch = results.length;
              _this2.isLoadingResults = false;
            });
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubs.next();
          this.unsubs.complete();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this3 = this;

          this.paginator.page.subscribe(function () {
            _this3.offset = _this3.paginator.pageIndex * _this3.paginator.pageSize;
            _this3.limit = _this3.paginator.pageSize;
            _this3.page = _this3.paginator.pageIndex + 1;

            _this3.getData();
          });
          this.paginator._intl.itemsPerPageLabel = 'Jumlah Baris';
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this4 = this;

          this.isLoadingResults = true;
          this.services.getAll('', this.sortActive, this.sortDirection, this.offset, this.limit).subscribe(function (_ref2) {
            var count = _ref2.count,
                results = _ref2.results;
            _this4.dataSource = results;
            _this4.resultsLength = count;
            _this4.isLoadingResults = false;
            _this4.countDataSearch = results.length;
          }, function (err) {
            _this4.isLoadingResults = false;
            console.log(err);
          });
        }
      }, {
        key: "add",
        value: function add() {
          var _this5 = this;

          var dialogRef = this.dialog.open(_alternatif_action_alternatif_action_component__WEBPACK_IMPORTED_MODULE_5__["AlternatifActionComponent"], {
            data: {
              action: 'add',
              data: null
            },
            width: this.modalWidth
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this5.services.insert(result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this5.unsubs)).subscribe(function () {
                _this5.getData();

                _this5.helper.sbSuccess("".concat(result[_this5.subject], " berhasil ditambahkan"));
              }, function (err) {
                _this5.helper.sbError('Alternatif gagal ditambahkan');
              });
            }
          });
        }
      }, {
        key: "edit",
        value: function edit(data) {
          var _this6 = this;

          var dialogRef = this.dialog.open(_alternatif_action_alternatif_action_component__WEBPACK_IMPORTED_MODULE_5__["AlternatifActionComponent"], {
            data: {
              action: 'edit',
              data: data
            },
            width: this.modalWidth
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this6.services.updateById(data._id, result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this6.unsubs)).subscribe(function () {
                _this6.getData();

                _this6.helper.sbSuccess("".concat(result[_this6.subject], " berhasil disunting"));
              }, function (err) {
                _this6.helper.sbError("".concat(result[_this6.subject], " gagal disunting"));
              });
            }
          });
        }
      }, {
        key: "remove",
        value: function remove(data) {
          var _this7 = this;

          this.dialog.open(_partials_remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_7__["RemoveDialogComponent"]).afterClosed().subscribe(function (result) {
            if (result) {
              _this7.services.removeById(data._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this7.unsubs)).subscribe(function () {
                _this7.getData();

                _this7.helper.sbSuccess("".concat(data[_this7.subject], " berhasil dihapus"));
              }, function (err) {
                _this7.helper.sbError("".concat(data[_this7.subject], " gagal dihapus"));
              });
            }
          });
        }
      }]);

      return AlternatifComponent;
    }();

    AlternatifComponent.ctorParameters = function () {
      return [{
        type: _services_alternatif_service__WEBPACK_IMPORTED_MODULE_2__["AlternatifService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: _services_helpers_service__WEBPACK_IMPORTED_MODULE_1__["HelpersService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], {
      "static": false
    })], AlternatifComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], {
      "static": false
    })], AlternatifComponent.prototype, "sort", void 0);
    AlternatifComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
      selector: 'app-alternatif',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./alternatif.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/alternatif/alternatif.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./alternatif.component.scss */
      "./src/app/backend/pages/alternatif/alternatif.component.scss"))["default"]]
    })], AlternatifComponent);
    /***/
  },

  /***/
  "./src/app/backend/pages/alternatif/alternatif.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/backend/pages/alternatif/alternatif.module.ts ***!
    \***************************************************************/

  /*! exports provided: AlternatifModule */

  /***/
  function srcAppBackendPagesAlternatifAlternatifModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlternatifModule", function () {
      return AlternatifModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../services/auth.guard */
    "./src/app/services/auth.guard.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _alternatif_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./alternatif.component */
    "./src/app/backend/pages/alternatif/alternatif.component.ts");
    /* harmony import */


    var _alternatif_action_alternatif_action_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./alternatif-action/alternatif-action.component */
    "./src/app/backend/pages/alternatif/alternatif-action/alternatif-action.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var routes = [{
      path: '',
      component: _alternatif_component__WEBPACK_IMPORTED_MODULE_3__["AlternatifComponent"],
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    }];

    var AlternatifModule = function AlternatifModule() {
      _classCallCheck(this, AlternatifModule);
    };

    AlternatifModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      declarations: [_alternatif_component__WEBPACK_IMPORTED_MODULE_3__["AlternatifComponent"], _alternatif_action_alternatif_action_component__WEBPACK_IMPORTED_MODULE_4__["AlternatifActionComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      exports: [_alternatif_component__WEBPACK_IMPORTED_MODULE_3__["AlternatifComponent"]],
      entryComponents: [_alternatif_action_alternatif_action_component__WEBPACK_IMPORTED_MODULE_4__["AlternatifActionComponent"]]
    })], AlternatifModule);
    /***/
  },

  /***/
  "./src/app/backend/pages/bobot/bobot.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/backend/pages/bobot/bobot.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBackendPagesBobotBobotComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tlbmQvcGFnZXMvYm9ib3QvYm9ib3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/backend/pages/bobot/bobot.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/backend/pages/bobot/bobot.component.ts ***!
    \********************************************************/

  /*! exports provided: BobotComponent */

  /***/
  function srcAppBackendPagesBobotBobotComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BobotComponent", function () {
      return BobotComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_bobot_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../services/bobot.service */
    "./src/app/services/bobot.service.ts");
    /* harmony import */


    var _services_helpers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../services/helpers.service */
    "./src/app/services/helpers.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BobotComponent = /*#__PURE__*/function () {
      function BobotComponent(fb, router, helper, bobotService) {
        _classCallCheck(this, BobotComponent);

        this.fb = fb;
        this.router = router;
        this.helper = helper;
        this.bobotService = bobotService;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        this.form = this.fb.group({
          w1: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          w2: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          w3: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          w4: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          w5: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          w6: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        this.currentUser = this.helper.currentUser();
      }

      _createClass(BobotComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.bobotService.getAll().subscribe(function (_ref3) {
            var results = _ref3.results;
            results.forEach(function (element) {
              if (element.userId._id === _this8.currentUser._id) {
                _this8.bobot = element;
                var _this8$bobot = _this8.bobot,
                    w1 = _this8$bobot.w1,
                    w2 = _this8$bobot.w2,
                    w3 = _this8$bobot.w3,
                    w4 = _this8$bobot.w4,
                    w5 = _this8$bobot.w5,
                    w6 = _this8$bobot.w6;

                _this8.form.setValue({
                  w1: w1,
                  w2: w2,
                  w3: w3,
                  w4: w4,
                  w5: w5,
                  w6: w6
                });
              }
            });
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs.unsubscribe();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this9 = this;

          this.bobotService.updateById(this.bobot._id, this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.subject)).subscribe(function (results) {
            var route = '/backend/perhitungan';

            _this9.router.navigate([route]);

            _this9.helper.sbSuccess('Perubahan bobot berhasil disimpan');
          }, function (err) {
            _this9.helper.sbError('Perubahan bobot gagal disimpan');
          });
        }
      }]);

      return BobotComponent;
    }();

    BobotComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _services_helpers_service__WEBPACK_IMPORTED_MODULE_4__["HelpersService"]
      }, {
        type: _services_bobot_service__WEBPACK_IMPORTED_MODULE_3__["BobotService"]
      }];
    };

    BobotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
      selector: 'app-bobot',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bobot.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/bobot/bobot.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bobot.component.scss */
      "./src/app/backend/pages/bobot/bobot.component.scss"))["default"]]
    })], BobotComponent);
    /***/
  },

  /***/
  "./src/app/backend/pages/bobot/bobot.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/backend/pages/bobot/bobot.module.ts ***!
    \*****************************************************/

  /*! exports provided: BobotModule */

  /***/
  function srcAppBackendPagesBobotBobotModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BobotModule", function () {
      return BobotModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../services/auth.guard */
    "./src/app/services/auth.guard.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _bobot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bobot.component */
    "./src/app/backend/pages/bobot/bobot.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var routes = [{
      path: '',
      component: _bobot_component__WEBPACK_IMPORTED_MODULE_3__["BobotComponent"],
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    }];

    var BobotModule = function BobotModule() {
      _classCallCheck(this, BobotModule);
    };

    BobotModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      declarations: [_bobot_component__WEBPACK_IMPORTED_MODULE_3__["BobotComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
      exports: [_bobot_component__WEBPACK_IMPORTED_MODULE_3__["BobotComponent"]]
    })], BobotModule);
    /***/
  },

  /***/
  "./src/app/backend/pages/dashboard/dashboard.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/backend/pages/dashboard/dashboard.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBackendPagesDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tlbmQvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/backend/pages/dashboard/dashboard.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/backend/pages/dashboard/dashboard.component.ts ***!
    \****************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppBackendPagesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_pengguna_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../services/pengguna.service */
    "./src/app/services/pengguna.service.ts");
    /* harmony import */


    var _services_kriteria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../services/kriteria.service */
    "./src/app/services/kriteria.service.ts");
    /* harmony import */


    var _services_alternatif_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../services/alternatif.service */
    "./src/app/services/alternatif.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(alternatifService, kriteriaService, penggunaService) {
        _classCallCheck(this, DashboardComponent);

        this.alternatifService = alternatifService;
        this.kriteriaService = kriteriaService;
        this.penggunaService = penggunaService;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCountData();
        }
      }, {
        key: "getCountData",
        value: function getCountData() {
          var _this10 = this;

          this.alternatifService.getAll().subscribe(function (_ref4) {
            var count = _ref4.count;
            _this10.alternatifLength = count;
          });
          this.kriteriaService.getAll().subscribe(function (_ref5) {
            var count = _ref5.count;
            _this10.kriteriaLength = count;
          });
          this.penggunaService.getAll().subscribe(function (_ref6) {
            var count = _ref6.count;
            _this10.penggunaLength = count;
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _services_alternatif_service__WEBPACK_IMPORTED_MODULE_3__["AlternatifService"]
      }, {
        type: _services_kriteria_service__WEBPACK_IMPORTED_MODULE_2__["KriteriaService"]
      }, {
        type: _services_pengguna_service__WEBPACK_IMPORTED_MODULE_1__["PenggunaService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/backend/pages/dashboard/dashboard.component.scss"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/backend/pages/dashboard/dashboard.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/backend/pages/dashboard/dashboard.module.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppBackendPagesDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../services/auth.guard */
    "./src/app/services/auth.guard.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/backend/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var routes = [{
      path: '',
      component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    }];

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]]
    })], DashboardModule);
    /***/
  },

  /***/
  "./src/app/backend/pages/kriteria/kriteria-action/kriteria-action.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/backend/pages/kriteria/kriteria-action/kriteria-action.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBackendPagesKriteriaKriteriaActionKriteriaActionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tlbmQvcGFnZXMva3JpdGVyaWEva3JpdGVyaWEtYWN0aW9uL2tyaXRlcmlhLWFjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/backend/pages/kriteria/kriteria-action/kriteria-action.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/backend/pages/kriteria/kriteria-action/kriteria-action.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: KriteriaActionComponent */

  /***/
  function srcAppBackendPagesKriteriaKriteriaActionKriteriaActionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KriteriaActionComponent", function () {
      return KriteriaActionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_kriteria_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../services/kriteria.service */
    "./src/app/services/kriteria.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var KriteriaActionComponent = /*#__PURE__*/function () {
      function KriteriaActionComponent(fb, kriteriaService, dialogRef, md) {
        var _this11 = this;

        _classCallCheck(this, KriteriaActionComponent);

        this.fb = fb;
        this.kriteriaService = kriteriaService;
        this.dialogRef = dialogRef;
        this.md = md;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.kriteriaList = [];
        this.atributList = ['Benefit', 'Cost'];
        this.dialogTitle = '';
        this.dialogTitle = 'Tambah Kriteria';
        this.kriteriaService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.subject)).subscribe(function (_ref7) {
          var results = _ref7.results;
          _this11.kriteriaList = results;
        });
        this.form = this.fb.group({
          kode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          keterangan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          atribut: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });

        if (this.md.data) {
          var _this$md$data2 = this.md.data,
              kode = _this$md$data2.kode,
              keterangan = _this$md$data2.keterangan,
              atribut = _this$md$data2.atribut;
          this.form.setValue({
            kode: kode,
            keterangan: keterangan,
            atribut: atribut
          });
          this.dialogTitle = 'Sunting Kriteria (' + kode + ')';
        }
      }

      _createClass(KriteriaActionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs.unsubscribe();
        }
      }, {
        key: "closeDialog",
        value: function closeDialog() {
          this.dialogRef.close();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.dialogRef.close(this.form.value);
        }
      }]);

      return KriteriaActionComponent;
    }();

    KriteriaActionComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _services_kriteria_service__WEBPACK_IMPORTED_MODULE_1__["KriteriaService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    KriteriaActionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
      selector: 'app-kriteria-action',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./kriteria-action.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/kriteria/kriteria-action/kriteria-action.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./kriteria-action.component.scss */
      "./src/app/backend/pages/kriteria/kriteria-action/kriteria-action.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))], KriteriaActionComponent);
    /***/
  },

  /***/
  "./src/app/backend/pages/kriteria/kriteria.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/backend/pages/kriteria/kriteria.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBackendPagesKriteriaKriteriaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tlbmQvcGFnZXMva3JpdGVyaWEva3JpdGVyaWEuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/backend/pages/kriteria/kriteria.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/backend/pages/kriteria/kriteria.component.ts ***!
    \**************************************************************/

  /*! exports provided: KriteriaComponent */

  /***/
  function srcAppBackendPagesKriteriaKriteriaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KriteriaComponent", function () {
      return KriteriaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_helpers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../services/helpers.service */
    "./src/app/services/helpers.service.ts");
    /* harmony import */


    var _services_kriteria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../services/kriteria.service */
    "./src/app/services/kriteria.service.ts");
    /* harmony import */


    var _partials_remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../partials/remove-dialog/remove-dialog.component */
    "./src/app/backend/partials/remove-dialog/remove-dialog.component.ts");
    /* harmony import */


    var _kriteria_action_kriteria_action_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./kriteria-action/kriteria-action.component */
    "./src/app/backend/pages/kriteria/kriteria-action/kriteria-action.component.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var KriteriaComponent = /*#__PURE__*/function () {
      function KriteriaComponent(services, dialog, helper) {
        _classCallCheck(this, KriteriaComponent);

        this.services = services;
        this.dialog = dialog;
        this.helper = helper;
        this.displayedColumns = ['index', 'kode', 'keterangan', 'atribut', 'actions'];
        this.displayedColumnsUser = ['index', 'kode', 'keterangan', 'atribut'];
        this.dataSource = [];
        this.resultsLength = 0;
        this.modalWidth = '800px';
        this.unsubs = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.subject = 'kode';
        this.countDataSearch = 0;
        this.isLoadingResults = true;
        this.sortActive = 'kode';
        this.sortDirection = 'asc';
        this.limit = 10;
        this.offset = 0;
        this.page = 0;
        this.pageSizeOpts = [5, 10, 25, 100];
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"]({
          search: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('')
        });
        this.peran = '';
        this.currentUser = this.helper.currentUser();
        this.peran = this.currentUser.roleId.nama;
      }

      _createClass(KriteriaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.getData();
          this.searchForm.get('search').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])()).subscribe(function (val) {
            _this12.isLoadingResults = true;

            _this12.services.getAll(val, _this12.sortActive, _this12.sortDirection, _this12.offset).subscribe(function (_ref8) {
              var count = _ref8.count,
                  results = _ref8.results;
              _this12.dataSource = results;
              _this12.resultsLength = count;
              _this12.countDataSearch = results.length;
              _this12.isLoadingResults = false;
            });
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubs.next();
          this.unsubs.complete();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this13 = this;

          this.paginator.page.subscribe(function () {
            _this13.offset = _this13.paginator.pageIndex * _this13.paginator.pageSize;
            _this13.limit = _this13.paginator.pageSize;
            _this13.page = _this13.paginator.pageIndex + 1;

            _this13.getData();
          });
          this.paginator._intl.itemsPerPageLabel = 'Jumlah Baris';
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this14 = this;

          this.isLoadingResults = true;
          this.services.getAll('', this.sortActive, this.sortDirection, this.offset, this.limit).subscribe(function (_ref9) {
            var count = _ref9.count,
                results = _ref9.results;
            _this14.dataSource = results;
            _this14.resultsLength = count;
            _this14.isLoadingResults = false;
            _this14.countDataSearch = results.length;
          }, function (err) {
            _this14.isLoadingResults = false;
            console.log(err);
          });
        }
      }, {
        key: "add",
        value: function add() {
          var _this15 = this;

          var dialogRef = this.dialog.open(_kriteria_action_kriteria_action_component__WEBPACK_IMPORTED_MODULE_4__["KriteriaActionComponent"], {
            data: {
              action: 'add',
              data: null
            },
            width: this.modalWidth
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this15.services.insert(result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(_this15.unsubs)).subscribe(function () {
                _this15.getData();

                _this15.helper.sbSuccess("".concat(result[_this15.subject], " berhasil ditambahkan"));
              }, function (err) {
                _this15.helper.sbError('Kriteria gagal ditambahkan');
              });
            }
          });
        }
      }, {
        key: "edit",
        value: function edit(data) {
          var _this16 = this;

          var dialogRef = this.dialog.open(_kriteria_action_kriteria_action_component__WEBPACK_IMPORTED_MODULE_4__["KriteriaActionComponent"], {
            data: {
              action: 'edit',
              data: data
            },
            width: this.modalWidth
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this16.services.updateById(data._id, result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(_this16.unsubs)).subscribe(function () {
                _this16.getData();

                _this16.helper.sbSuccess("".concat(result[_this16.subject], " berhasil disunting"));
              }, function (err) {
                _this16.helper.sbError("".concat(result[_this16.subject], " gagal disunting"));
              });
            }
          });
        }
      }, {
        key: "remove",
        value: function remove(data) {
          var _this17 = this;

          this.dialog.open(_partials_remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_3__["RemoveDialogComponent"]).afterClosed().subscribe(function (result) {
            if (result) {
              _this17.services.removeById(data._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(_this17.unsubs)).subscribe(function () {
                _this17.getData();

                _this17.helper.sbSuccess("".concat(data[_this17.subject], " berhasil dihapus"));
              }, function (err) {
                _this17.helper.sbError("".concat(data[_this17.subject], " gagal dihapus"));
              });
            }
          });
        }
      }]);

      return KriteriaComponent;
    }();

    KriteriaComponent.ctorParameters = function () {
      return [{
        type: _services_kriteria_service__WEBPACK_IMPORTED_MODULE_2__["KriteriaService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }, {
        type: _services_helpers_service__WEBPACK_IMPORTED_MODULE_1__["HelpersService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], {
      "static": false
    })], KriteriaComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"], {
      "static": false
    })], KriteriaComponent.prototype, "sort", void 0);
    KriteriaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
      selector: 'app-kriteria',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./kriteria.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/kriteria/kriteria.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./kriteria.component.scss */
      "./src/app/backend/pages/kriteria/kriteria.component.scss"))["default"]]
    })], KriteriaComponent);
    /***/
  },

  /***/
  "./src/app/backend/pages/kriteria/kriteria.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/backend/pages/kriteria/kriteria.module.ts ***!
    \***********************************************************/

  /*! exports provided: KriteriaModule */

  /***/
  function srcAppBackendPagesKriteriaKriteriaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KriteriaModule", function () {
      return KriteriaModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../services/auth.guard */
    "./src/app/services/auth.guard.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _kriteria_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./kriteria.component */
    "./src/app/backend/pages/kriteria/kriteria.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _kriteria_action_kriteria_action_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./kriteria-action/kriteria-action.component */
    "./src/app/backend/pages/kriteria/kriteria-action/kriteria-action.component.ts");

    var routes = [{
      path: '',
      component: _kriteria_component__WEBPACK_IMPORTED_MODULE_3__["KriteriaComponent"],
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    }];

    var KriteriaModule = function KriteriaModule() {
      _classCallCheck(this, KriteriaModule);
    };

    KriteriaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      declarations: [_kriteria_component__WEBPACK_IMPORTED_MODULE_3__["KriteriaComponent"], _kriteria_action_kriteria_action_component__WEBPACK_IMPORTED_MODULE_7__["KriteriaActionComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
      exports: [_kriteria_component__WEBPACK_IMPORTED_MODULE_3__["KriteriaComponent"]],
      entryComponents: [_kriteria_action_kriteria_action_component__WEBPACK_IMPORTED_MODULE_7__["KriteriaActionComponent"]]
    })], KriteriaModule);
    /***/
  },

  /***/
  "./src/app/backend/pages/pengguna/pengguna-action/pengguna-action.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/backend/pages/pengguna/pengguna-action/pengguna-action.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBackendPagesPenggunaPenggunaActionPenggunaActionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tlbmQvcGFnZXMvcGVuZ2d1bmEvcGVuZ2d1bmEtYWN0aW9uL3BlbmdndW5hLWFjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/backend/pages/pengguna/pengguna-action/pengguna-action.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/backend/pages/pengguna/pengguna-action/pengguna-action.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: PenggunaActionComponent */

  /***/
  function srcAppBackendPagesPenggunaPenggunaActionPenggunaActionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PenggunaActionComponent", function () {
      return PenggunaActionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_peran_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../services/peran.service */
    "./src/app/services/peran.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PenggunaActionComponent = /*#__PURE__*/function () {
      function PenggunaActionComponent(fb, preanService, dialogRef, md) {
        var _this18 = this;

        _classCallCheck(this, PenggunaActionComponent);

        this.fb = fb;
        this.preanService = preanService;
        this.dialogRef = dialogRef;
        this.md = md;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.rolesList = [];
        this.dialogTitle = '';
        this.dialogTitle = 'Tambah Pengguna';
        this.preanService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.subject)).subscribe(function (_ref10) {
          var results = _ref10.results;
          _this18.rolesList = results;
        });
        this.form = this.fb.group({
          nama: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
          roleId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          password: ['']
        });

        if (this.md.data) {
          var _this$md$data3 = this.md.data,
              nama = _this$md$data3.nama,
              email = _this$md$data3.email,
              roleId = _this$md$data3.roleId,
              password = _this$md$data3.password;
          this.form.setValue({
            nama: nama,
            email: email,
            roleId: roleId._id,
            password: password
          });
          this.dialogTitle = 'Sunting Pengguna (' + nama + ')';
        }
      }

      _createClass(PenggunaActionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs.unsubscribe();
        }
      }, {
        key: "closeDialog",
        value: function closeDialog() {
          this.dialogRef.close();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.form.controls.password.setValue('password');
          this.dialogRef.close(this.form.value);
        }
      }]);

      return PenggunaActionComponent;
    }();

    PenggunaActionComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _services_peran_service__WEBPACK_IMPORTED_MODULE_1__["PeranService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    PenggunaActionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
      selector: 'app-pengguna-action',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pengguna-action.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/pengguna/pengguna-action/pengguna-action.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pengguna-action.component.scss */
      "./src/app/backend/pages/pengguna/pengguna-action/pengguna-action.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))], PenggunaActionComponent);
    /***/
  },

  /***/
  "./src/app/backend/pages/pengguna/pengguna.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/backend/pages/pengguna/pengguna.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBackendPagesPenggunaPenggunaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tlbmQvcGFnZXMvcGVuZ2d1bmEvcGVuZ2d1bmEuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/backend/pages/pengguna/pengguna.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/backend/pages/pengguna/pengguna.component.ts ***!
    \**************************************************************/

  /*! exports provided: PenggunaComponent */

  /***/
  function srcAppBackendPagesPenggunaPenggunaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PenggunaComponent", function () {
      return PenggunaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_bobot_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../services/bobot.service */
    "./src/app/services/bobot.service.ts");
    /* harmony import */


    var _services_helpers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../services/helpers.service */
    "./src/app/services/helpers.service.ts");
    /* harmony import */


    var _services_pengguna_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../services/pengguna.service */
    "./src/app/services/pengguna.service.ts");
    /* harmony import */


    var _partials_remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../partials/remove-dialog/remove-dialog.component */
    "./src/app/backend/partials/remove-dialog/remove-dialog.component.ts");
    /* harmony import */


    var _pengguna_action_pengguna_action_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pengguna-action/pengguna-action.component */
    "./src/app/backend/pages/pengguna/pengguna-action/pengguna-action.component.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PenggunaComponent = /*#__PURE__*/function () {
      function PenggunaComponent(services, dialog, bobotService, helper) {
        _classCallCheck(this, PenggunaComponent);

        this.services = services;
        this.dialog = dialog;
        this.bobotService = bobotService;
        this.helper = helper;
        this.displayedColumns = ['index', 'nama', 'email', 'peran', 'actions'];
        this.dataSource = [];
        this.resultsLength = 0;
        this.modalWidth = '800px';
        this.unsubs = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.subject = 'nama';
        this.countDataSearch = 0;
        this.isLoadingResults = true;
        this.sortActive = 'nama';
        this.sortDirection = 'asc';
        this.limit = 10;
        this.offset = 0;
        this.page = 0;
        this.pageSizeOpts = [5, 10, 25, 100];
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
          search: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('')
        });
      }

      _createClass(PenggunaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.getData();
          this.searchForm.get('search').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])()).subscribe(function (val) {
            _this19.isLoadingResults = true;

            _this19.services.getAll(val, _this19.sortActive, _this19.sortDirection, _this19.offset).subscribe(function (_ref11) {
              var count = _ref11.count,
                  results = _ref11.results;
              _this19.dataSource = results;
              _this19.resultsLength = count;
              _this19.countDataSearch = results.length;
              _this19.isLoadingResults = false;
            });
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubs.next();
          this.unsubs.complete();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this20 = this;

          this.paginator.page.subscribe(function () {
            _this20.offset = _this20.paginator.pageIndex * _this20.paginator.pageSize;
            _this20.limit = _this20.paginator.pageSize;
            _this20.page = _this20.paginator.pageIndex + 1;

            _this20.getData();
          });
          this.paginator._intl.itemsPerPageLabel = 'Jumlah Baris';
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this21 = this;

          this.isLoadingResults = true;
          this.services.getAll('', this.sortActive, this.sortDirection, this.offset, this.limit).subscribe(function (_ref12) {
            var count = _ref12.count,
                results = _ref12.results;
            _this21.dataSource = results;
            _this21.resultsLength = count;
            _this21.isLoadingResults = false;
            _this21.countDataSearch = results.length;
          }, function (err) {
            _this21.isLoadingResults = false;
            console.log(err);
          });
        }
      }, {
        key: "add",
        value: function add() {
          var _this22 = this;

          var dialogRef = this.dialog.open(_pengguna_action_pengguna_action_component__WEBPACK_IMPORTED_MODULE_5__["PenggunaActionComponent"], {
            data: {
              action: 'add',
              data: null
            },
            width: this.modalWidth
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              console.log(result);

              _this22.services.insert(result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this22.unsubs)).subscribe(function (results) {
                _this22.dataBobot = {
                  userId: results
                };

                _this22.bobotService.insert(_this22.dataBobot).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this22.unsubs)).subscribe();

                _this22.getData();

                _this22.helper.sbSuccess("".concat(result[_this22.subject], " berhasil ditambahkan"));
              }, function (err) {
                _this22.helper.sbError('Pengguna gagal ditambahkan');
              });
            }
          });
        }
      }, {
        key: "edit",
        value: function edit(data) {
          var _this23 = this;

          var dialogRef = this.dialog.open(_pengguna_action_pengguna_action_component__WEBPACK_IMPORTED_MODULE_5__["PenggunaActionComponent"], {
            data: {
              action: 'edit',
              data: data
            },
            width: this.modalWidth
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this23.services.updateById(data._id, result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this23.unsubs)).subscribe(function () {
                _this23.getData();

                _this23.helper.sbSuccess("".concat(result[_this23.subject], " berhasil disunting"));
              }, function (err) {
                _this23.helper.sbError("".concat(result[_this23.subject], " gagal disunting"));
              });
            }
          });
        }
      }, {
        key: "remove",
        value: function remove(data) {
          var _this24 = this;

          this.dialog.open(_partials_remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_4__["RemoveDialogComponent"]).afterClosed().subscribe(function (result) {
            if (result) {
              _this24.services.removeById(data._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this24.unsubs)).subscribe(function () {
                _this24.getData();

                _this24.helper.sbSuccess("".concat(data[_this24.subject], " berhasil dihapus"));
              }, function (err) {
                _this24.helper.sbError("".concat(data[_this24.subject], " gagal dihapus"));
              });
            }
          });
        }
      }]);

      return PenggunaComponent;
    }();

    PenggunaComponent.ctorParameters = function () {
      return [{
        type: _services_pengguna_service__WEBPACK_IMPORTED_MODULE_3__["PenggunaService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
      }, {
        type: _services_bobot_service__WEBPACK_IMPORTED_MODULE_1__["BobotService"]
      }, {
        type: _services_helpers_service__WEBPACK_IMPORTED_MODULE_2__["HelpersService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], {
      "static": false
    })], PenggunaComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSort"], {
      "static": false
    })], PenggunaComponent.prototype, "sort", void 0);
    PenggunaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"])({
      selector: 'app-pengguna',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pengguna.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/pengguna/pengguna.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pengguna.component.scss */
      "./src/app/backend/pages/pengguna/pengguna.component.scss"))["default"]]
    })], PenggunaComponent);
    /***/
  },

  /***/
  "./src/app/backend/pages/pengguna/pengguna.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/backend/pages/pengguna/pengguna.module.ts ***!
    \***********************************************************/

  /*! exports provided: PenggunaModule */

  /***/
  function srcAppBackendPagesPenggunaPenggunaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PenggunaModule", function () {
      return PenggunaModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../services/auth.guard */
    "./src/app/services/auth.guard.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _pengguna_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pengguna.component */
    "./src/app/backend/pages/pengguna/pengguna.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pengguna_action_pengguna_action_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pengguna-action/pengguna-action.component */
    "./src/app/backend/pages/pengguna/pengguna-action/pengguna-action.component.ts");

    var routes = [{
      path: '',
      component: _pengguna_component__WEBPACK_IMPORTED_MODULE_3__["PenggunaComponent"],
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    }];

    var PenggunaModule = function PenggunaModule() {
      _classCallCheck(this, PenggunaModule);
    };

    PenggunaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      declarations: [_pengguna_component__WEBPACK_IMPORTED_MODULE_3__["PenggunaComponent"], _pengguna_action_pengguna_action_component__WEBPACK_IMPORTED_MODULE_7__["PenggunaActionComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
      exports: [_pengguna_component__WEBPACK_IMPORTED_MODULE_3__["PenggunaComponent"]],
      entryComponents: [_pengguna_action_pengguna_action_component__WEBPACK_IMPORTED_MODULE_7__["PenggunaActionComponent"]]
    })], PenggunaModule);
    /***/
  },

  /***/
  "./src/app/backend/pages/peran/peran-action/peran-action.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/backend/pages/peran/peran-action/peran-action.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBackendPagesPeranPeranActionPeranActionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tlbmQvcGFnZXMvcGVyYW4vcGVyYW4tYWN0aW9uL3BlcmFuLWFjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/backend/pages/peran/peran-action/peran-action.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/backend/pages/peran/peran-action/peran-action.component.ts ***!
    \****************************************************************************/

  /*! exports provided: PeranActionComponent */

  /***/
  function srcAppBackendPagesPeranPeranActionPeranActionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeranActionComponent", function () {
      return PeranActionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var PeranActionComponent = /*#__PURE__*/function () {
      function PeranActionComponent(fb, dialogRef, md) {
        _classCallCheck(this, PeranActionComponent);

        this.fb = fb;
        this.dialogRef = dialogRef;
        this.md = md;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.dialogTitle = '';
        this.dialogTitle = 'Tambah Peran';
        this.form = this.fb.group({
          nama: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          prioritas: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });

        if (this.md.data) {
          var _this$md$data4 = this.md.data,
              nama = _this$md$data4.nama,
              prioritas = _this$md$data4.prioritas;
          this.form.setValue({
            nama: nama,
            prioritas: prioritas
          });
          this.dialogTitle = 'Sunting Peran (' + nama + ')';
        }
      }

      _createClass(PeranActionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs.unsubscribe();
        }
      }, {
        key: "closeDialog",
        value: function closeDialog() {
          this.dialogRef.close();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.dialogRef.close(this.form.value);
        }
      }]);

      return PeranActionComponent;
    }();

    PeranActionComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    PeranActionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-peran-action',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./peran-action.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/peran/peran-action/peran-action.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./peran-action.component.scss */
      "./src/app/backend/pages/peran/peran-action/peran-action.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]))], PeranActionComponent);
    /***/
  },

  /***/
  "./src/app/backend/pages/peran/peran.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/backend/pages/peran/peran.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBackendPagesPeranPeranComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tlbmQvcGFnZXMvcGVyYW4vcGVyYW4uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/backend/pages/peran/peran.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/backend/pages/peran/peran.component.ts ***!
    \********************************************************/

  /*! exports provided: PeranComponent */

  /***/
  function srcAppBackendPagesPeranPeranComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeranComponent", function () {
      return PeranComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_helpers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../services/helpers.service */
    "./src/app/services/helpers.service.ts");
    /* harmony import */


    var _services_peran_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../services/peran.service */
    "./src/app/services/peran.service.ts");
    /* harmony import */


    var _partials_remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../partials/remove-dialog/remove-dialog.component */
    "./src/app/backend/partials/remove-dialog/remove-dialog.component.ts");
    /* harmony import */


    var _peran_action_peran_action_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./peran-action/peran-action.component */
    "./src/app/backend/pages/peran/peran-action/peran-action.component.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PeranComponent = /*#__PURE__*/function () {
      function PeranComponent(services, dialog, helper) {
        _classCallCheck(this, PeranComponent);

        this.services = services;
        this.dialog = dialog;
        this.helper = helper;
        this.displayedColumns = ['index', 'nama', 'prioritas', 'actions'];
        this.dataSource = [];
        this.resultsLength = 0;
        this.modalWidth = '800px';
        this.unsubs = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.subject = 'nama';
        this.countDataSearch = 0;
        this.isLoadingResults = true;
        this.sortActive = 'prioritas';
        this.sortDirection = 'asc';
        this.limit = 10;
        this.offset = 0;
        this.page = 0;
        this.pageSizeOpts = [5, 10, 25, 100];
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
          search: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('')
        });
      }

      _createClass(PeranComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          this.getData();
          this.searchForm.get('search').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])()).subscribe(function (val) {
            _this25.isLoadingResults = true;

            _this25.services.getAll(val, _this25.sortActive, _this25.sortDirection, _this25.offset).subscribe(function (_ref13) {
              var count = _ref13.count,
                  results = _ref13.results;
              _this25.dataSource = results;
              _this25.resultsLength = count;
              _this25.countDataSearch = results.length;
              _this25.isLoadingResults = false;
            });
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubs.next();
          this.unsubs.complete();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this26 = this;

          this.paginator.page.subscribe(function () {
            _this26.offset = _this26.paginator.pageIndex * _this26.paginator.pageSize;
            _this26.limit = _this26.paginator.pageSize;
            _this26.page = _this26.paginator.pageIndex + 1;

            _this26.getData();
          });
          this.paginator._intl.itemsPerPageLabel = 'Jumlah Baris';
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this27 = this;

          this.isLoadingResults = true;
          this.services.getAll('', this.sortActive, this.sortDirection, this.offset, this.limit).subscribe(function (_ref14) {
            var count = _ref14.count,
                results = _ref14.results;
            _this27.dataSource = results;
            _this27.resultsLength = count;
            _this27.isLoadingResults = false;
            _this27.countDataSearch = results.length;
          }, function (err) {
            _this27.isLoadingResults = false;
            console.log(err);
          });
        }
      }, {
        key: "add",
        value: function add() {
          var _this28 = this;

          var dialogRef = this.dialog.open(_peran_action_peran_action_component__WEBPACK_IMPORTED_MODULE_4__["PeranActionComponent"], {
            data: {
              action: 'add',
              data: null
            },
            width: this.modalWidth
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this28.services.insert(result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this28.unsubs)).subscribe(function () {
                _this28.getData();

                _this28.helper.sbSuccess("".concat(result[_this28.subject], " berhasil ditambahkan"));
              }, function (err) {
                _this28.helper.sbError('Peran gagal ditambahkan');
              });
            }
          });
        }
      }, {
        key: "edit",
        value: function edit(data) {
          var _this29 = this;

          var dialogRef = this.dialog.open(_peran_action_peran_action_component__WEBPACK_IMPORTED_MODULE_4__["PeranActionComponent"], {
            data: {
              action: 'edit',
              data: data
            },
            width: this.modalWidth
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this29.services.updateById(data._id, result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this29.unsubs)).subscribe(function () {
                _this29.getData();

                _this29.helper.sbSuccess("".concat(result[_this29.subject], " berhasil disunting"));
              }, function (err) {
                _this29.helper.sbError("".concat(result[_this29.subject], " gagal disunting"));
              });
            }
          });
        }
      }, {
        key: "remove",
        value: function remove(data) {
          var _this30 = this;

          this.dialog.open(_partials_remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_3__["RemoveDialogComponent"]).afterClosed().subscribe(function (result) {
            if (result) {
              _this30.services.removeById(data._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this30.unsubs)).subscribe(function () {
                _this30.getData();

                _this30.helper.sbSuccess("".concat(data[_this30.subject], " berhasil dihapus"));
              }, function (err) {
                _this30.helper.sbError("".concat(data[_this30.subject], " gagal dihapus"));
              });
            }
          });
        }
      }]);

      return PeranComponent;
    }();

    PeranComponent.ctorParameters = function () {
      return [{
        type: _services_peran_service__WEBPACK_IMPORTED_MODULE_2__["PeranService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }, {
        type: _services_helpers_service__WEBPACK_IMPORTED_MODULE_1__["HelpersService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], {
      "static": false
    })], PeranComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"], {
      "static": false
    })], PeranComponent.prototype, "sort", void 0);
    PeranComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
      selector: 'app-peran',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./peran.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/peran/peran.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./peran.component.scss */
      "./src/app/backend/pages/peran/peran.component.scss"))["default"]]
    })], PeranComponent);
    /***/
  },

  /***/
  "./src/app/backend/pages/peran/peran.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/backend/pages/peran/peran.module.ts ***!
    \*****************************************************/

  /*! exports provided: PeranModule */

  /***/
  function srcAppBackendPagesPeranPeranModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeranModule", function () {
      return PeranModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../services/auth.guard */
    "./src/app/services/auth.guard.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _peran_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./peran.component */
    "./src/app/backend/pages/peran/peran.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _peran_action_peran_action_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./peran-action/peran-action.component */
    "./src/app/backend/pages/peran/peran-action/peran-action.component.ts");

    var routes = [{
      path: '',
      component: _peran_component__WEBPACK_IMPORTED_MODULE_4__["PeranComponent"],
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    }];

    var PeranModule = function PeranModule() {
      _classCallCheck(this, PeranModule);
    };

    PeranModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      declarations: [_peran_component__WEBPACK_IMPORTED_MODULE_4__["PeranComponent"], _peran_action_peran_action_component__WEBPACK_IMPORTED_MODULE_7__["PeranActionComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
      exports: [_peran_component__WEBPACK_IMPORTED_MODULE_4__["PeranComponent"]],
      entryComponents: [_peran_action_peran_action_component__WEBPACK_IMPORTED_MODULE_7__["PeranActionComponent"]]
    })], PeranModule);
    /***/
  },

  /***/
  "./src/app/backend/pages/perhitungan/perhitungan-matriks-keputusan/perhitungan-matriks-keputusan.component.scss":
  /*!**********************************************************************************************************************!*\
    !*** ./src/app/backend/pages/perhitungan/perhitungan-matriks-keputusan/perhitungan-matriks-keputusan.component.scss ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBackendPagesPerhitunganPerhitunganMatriksKeputusanPerhitunganMatriksKeputusanComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tlbmQvcGFnZXMvcGVyaGl0dW5nYW4vcGVyaGl0dW5nYW4tbWF0cmlrcy1rZXB1dHVzYW4vcGVyaGl0dW5nYW4tbWF0cmlrcy1rZXB1dHVzYW4uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/backend/pages/perhitungan/perhitungan-matriks-keputusan/perhitungan-matriks-keputusan.component.ts":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/backend/pages/perhitungan/perhitungan-matriks-keputusan/perhitungan-matriks-keputusan.component.ts ***!
    \********************************************************************************************************************/

  /*! exports provided: PerhitunganMatriksKeputusanComponent */

  /***/
  function srcAppBackendPagesPerhitunganPerhitunganMatriksKeputusanPerhitunganMatriksKeputusanComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerhitunganMatriksKeputusanComponent", function () {
      return PerhitunganMatriksKeputusanComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_helpers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../../services/helpers.service */
    "./src/app/services/helpers.service.ts");
    /* harmony import */


    var _services_alternatif_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../services/alternatif.service */
    "./src/app/services/alternatif.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PerhitunganMatriksKeputusanComponent = /*#__PURE__*/function () {
      function PerhitunganMatriksKeputusanComponent(alternatifService, helper) {
        _classCallCheck(this, PerhitunganMatriksKeputusanComponent);

        this.alternatifService = alternatifService;
        this.helper = helper;
        this.displayedColumns = ['index', 'nama', 'C01', 'C02', 'C03', 'C04', 'C05', 'C06'];
        this.matriksKeputusan = [];
        this.resultsLength = 0;
        this.unsubs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.subject = 'nama';
        this.countDataSearch = 0;
        this.isLoadingResults = true;
        this.sortActive = 'nama';
        this.sortDirection = 'asc';
        this.limit = 0;
        this.offset = 0;
        this.page = 0;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          search: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.currentUser = this.helper.currentUser();
      }

      _createClass(PerhitunganMatriksKeputusanComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubs.next();
          this.unsubs.complete();
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this31 = this;

          this.isLoadingResults = true;
          this.alternatifService.getAll('', this.sortActive, this.sortDirection, this.offset, this.limit).subscribe(function (_ref15) {
            var count = _ref15.count,
                results = _ref15.results;
            _this31.matriksKeputusan = results;
            _this31.resultsLength = count;
            _this31.isLoadingResults = false;
            _this31.countDataSearch = results.length;

            _this31.matriksKeputusan.forEach(function (element) {
              var kriteria1 = element.c1;
              var kriteria2 = element.c2;
              var kriteria3 = element.c3;
              var kriteria4 = element.c4;
              var kriteria5 = element.c5;
              var kriteria6 = element.c6;

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
          }, function (err) {
            _this31.isLoadingResults = false;
            console.log(err);
          });
        }
      }]);

      return PerhitunganMatriksKeputusanComponent;
    }();

    PerhitunganMatriksKeputusanComponent.ctorParameters = function () {
      return [{
        type: _services_alternatif_service__WEBPACK_IMPORTED_MODULE_4__["AlternatifService"]
      }, {
        type: _services_helpers_service__WEBPACK_IMPORTED_MODULE_3__["HelpersService"]
      }];
    };

    PerhitunganMatriksKeputusanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
      selector: 'app-perhitungan-matriks-keputusan',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./perhitungan-matriks-keputusan.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/perhitungan/perhitungan-matriks-keputusan/perhitungan-matriks-keputusan.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./perhitungan-matriks-keputusan.component.scss */
      "./src/app/backend/pages/perhitungan/perhitungan-matriks-keputusan/perhitungan-matriks-keputusan.component.scss"))["default"]]
    })], PerhitunganMatriksKeputusanComponent);
    /***/
  },

  /***/
  "./src/app/backend/pages/perhitungan/perhitungan-nilai-terbobot/perhitungan-nilai-terbobot.component.scss":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/backend/pages/perhitungan/perhitungan-nilai-terbobot/perhitungan-nilai-terbobot.component.scss ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBackendPagesPerhitunganPerhitunganNilaiTerbobotPerhitunganNilaiTerbobotComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tlbmQvcGFnZXMvcGVyaGl0dW5nYW4vcGVyaGl0dW5nYW4tbmlsYWktdGVyYm9ib3QvcGVyaGl0dW5nYW4tbmlsYWktdGVyYm9ib3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/backend/pages/perhitungan/perhitungan-nilai-terbobot/perhitungan-nilai-terbobot.component.ts":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/backend/pages/perhitungan/perhitungan-nilai-terbobot/perhitungan-nilai-terbobot.component.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: PerhitunganNilaiTerbobotComponent */

  /***/
  function srcAppBackendPagesPerhitunganPerhitunganNilaiTerbobotPerhitunganNilaiTerbobotComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerhitunganNilaiTerbobotComponent", function () {
      return PerhitunganNilaiTerbobotComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_bobot_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../services/bobot.service */
    "./src/app/services/bobot.service.ts");
    /* harmony import */


    var _services_alternatif_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../services/alternatif.service */
    "./src/app/services/alternatif.service.ts");
    /* harmony import */


    var _services_helpers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../../services/helpers.service */
    "./src/app/services/helpers.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PerhitunganNilaiTerbobotComponent = /*#__PURE__*/function () {
      function PerhitunganNilaiTerbobotComponent(alternatifService, bobotService, helper) {
        _classCallCheck(this, PerhitunganNilaiTerbobotComponent);

        this.alternatifService = alternatifService;
        this.bobotService = bobotService;
        this.helper = helper;
        this.displayedColumns = ['index', 'nama', 'C01', 'C02', 'C03', 'C04', 'C05', 'C06'];
        this.displayedColumnsOptimasi = ['index', 'nama', 'max', 'min', 'yi'];
        this.matriksKeputusan = [];
        this.matriksOptimasi = [];
        this.matriksO = [];
        this.matriksRank = [];
        this.resultsLength = 0;
        this.unsubs = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.subject = 'nama';
        this.countDataSearch = 0;
        this.isLoadingResults = true;
        this.sortActive = 'nama';
        this.sortDirection = 'asc';
        this.limit = 0;
        this.offset = 0;
        this.page = 0;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
          search: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('')
        });
        this.sumBobot = 0;
        this.k1 = [];
        this.k2 = [];
        this.k3 = [];
        this.k4 = [];
        this.k5 = [];
        this.k6 = [];
        this.currentUser = this.helper.currentUser();
      }

      _createClass(PerhitunganNilaiTerbobotComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubs.next();
          this.unsubs.complete();
        }
      }, {
        key: "getBobot",
        value: function getBobot() {}
      }, {
        key: "getData",
        value: function getData() {
          var _this32 = this;

          this.isLoadingResults = true;
          this.alternatifService.getAll('', this.sortActive, this.sortDirection, this.offset, this.limit).subscribe(function (_ref16) {
            var count = _ref16.count,
                results = _ref16.results;
            _this32.matriksKeputusan = results;
            _this32.resultsLength = count;
            _this32.isLoadingResults = false;
            _this32.countDataSearch = results.length;

            _this32.matriksKeputusan.forEach(function (element) {
              var kriteria1 = element.c1;
              var kriteria2 = element.c2;
              var kriteria3 = element.c3;
              var kriteria4 = element.c4;
              var kriteria5 = element.c5;
              var kriteria6 = element.c6;

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

            _this32.matriksKeputusan.forEach(function (element) {
              var kriteria1 = element.c1;
              var kriteria2 = element.c2;
              var kriteria3 = element.c3;
              var kriteria4 = element.c4;
              var kriteria5 = element.c5;
              var kriteria6 = element.c6;

              _this32.k1.push(kriteria1);

              _this32.k2.push(kriteria2);

              _this32.k3.push(kriteria3);

              _this32.k4.push(kriteria4);

              _this32.k5.push(kriteria5);

              _this32.k6.push(kriteria6);
            });

            _this32.matriksKeputusan.forEach(function (element) {
              var kriteria1 = element.c1;
              var kriteria2 = element.c2;
              var kriteria3 = element.c3;
              var kriteria4 = element.c4;
              var kriteria5 = element.c5;
              var kriteria6 = element.c6;
              var c1 = 0;
              var c2 = 0;
              var c3 = 0;
              var c4 = 0;
              var c5 = 0;
              var c6 = 0;

              var _iterator = _createForOfIteratorHelper(_this32.k1),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var iterator = _step.value;
                  c1 += Math.pow(iterator, 2);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              var _iterator2 = _createForOfIteratorHelper(_this32.k2),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _iterator7 = _step2.value;
                  c2 += Math.pow(_iterator7, 2);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              var _iterator3 = _createForOfIteratorHelper(_this32.k3),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _iterator8 = _step3.value;
                  c3 += Math.pow(_iterator8, 2);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              var _iterator4 = _createForOfIteratorHelper(_this32.k4),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var _iterator9 = _step4.value;
                  c4 += Math.pow(_iterator9, 2);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              var _iterator5 = _createForOfIteratorHelper(_this32.k5),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var _iterator10 = _step5.value;
                  c5 += Math.pow(_iterator10, 2);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              var _iterator6 = _createForOfIteratorHelper(_this32.k6),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var _iterator11 = _step6.value;
                  c6 += Math.pow(_iterator11, 2);
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }

              element.c1 = kriteria1 / Math.sqrt(c1);
              element.c2 = kriteria2 / Math.sqrt(c2);
              element.c3 = kriteria3 / Math.sqrt(c3);
              element.c4 = kriteria4 / Math.sqrt(c4);
              element.c5 = kriteria5 / Math.sqrt(c5);
              element.c6 = kriteria6 / Math.sqrt(c6);
            });

            _this32.bobotService.getAll() // tslint:disable-next-line: no-shadowed-variable
            .subscribe(function (_ref17) {
              var results = _ref17.results;
              results.forEach(function (element) {
                if (element.userId._id === _this32.currentUser._id) {
                  var w1 = element.w1;
                  var w2 = element.w2;
                  var w3 = element.w3;
                  var w4 = element.w4;
                  var w5 = element.w5;
                  var w6 = element.w6;
                  _this32.sumBobot = w1 + w2 + w3 + w4 + w5 + w6;
                  element.w1 = w1 / _this32.sumBobot;
                  element.w2 = w2 / _this32.sumBobot;
                  element.w3 = w3 / _this32.sumBobot;
                  element.w4 = w4 / _this32.sumBobot;
                  element.w5 = w5 / _this32.sumBobot;
                  element.w6 = w6 / _this32.sumBobot;

                  _this32.matriksKeputusan.forEach(function (res) {
                    var kriteria1 = res.c1;
                    var kriteria2 = res.c2;
                    var kriteria3 = res.c3;
                    var kriteria4 = res.c4;
                    var kriteria5 = res.c5;
                    var kriteria6 = res.c6;
                    var c1 = kriteria1 * element.w1;
                    var c2 = kriteria2 * element.w2;
                    var c3 = kriteria3 * element.w3;
                    var c4 = kriteria4 * element.w4;
                    var c5 = kriteria5 * element.w5;
                    var c6 = kriteria6 * element.w6;
                    res.c1 = c1;
                    res.c2 = c2;
                    res.c3 = c3;
                    res.c4 = c4;
                    res.c5 = c5;
                    res.c6 = c6;
                    var optimasi = {
                      nama: res.nama,
                      max: c2 + c4 + c5 + c6,
                      min: c1 + c3,
                      yi: c2 + c4 + c5 + c6 - (c1 + c3)
                    };

                    _this32.matriksOptimasi.push(optimasi);
                  });
                }
              });
              _this32.matriksO = _this32.matriksOptimasi;
            });
          }, function (err) {
            _this32.isLoadingResults = false;
            console.log(err);
          });
        }
      }]);

      return PerhitunganNilaiTerbobotComponent;
    }();

    PerhitunganNilaiTerbobotComponent.ctorParameters = function () {
      return [{
        type: _services_alternatif_service__WEBPACK_IMPORTED_MODULE_2__["AlternatifService"]
      }, {
        type: _services_bobot_service__WEBPACK_IMPORTED_MODULE_1__["BobotService"]
      }, {
        type: _services_helpers_service__WEBPACK_IMPORTED_MODULE_3__["HelpersService"]
      }];
    };

    PerhitunganNilaiTerbobotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
      selector: 'app-perhitungan-nilai-terbobot',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./perhitungan-nilai-terbobot.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/perhitungan/perhitungan-nilai-terbobot/perhitungan-nilai-terbobot.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./perhitungan-nilai-terbobot.component.scss */
      "./src/app/backend/pages/perhitungan/perhitungan-nilai-terbobot/perhitungan-nilai-terbobot.component.scss"))["default"]]
    })], PerhitunganNilaiTerbobotComponent);
    /***/
  },

  /***/
  "./src/app/backend/pages/perhitungan/perhitungan-normalisasi/perhitungan-normalisasi.component.scss":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/backend/pages/perhitungan/perhitungan-normalisasi/perhitungan-normalisasi.component.scss ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBackendPagesPerhitunganPerhitunganNormalisasiPerhitunganNormalisasiComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tlbmQvcGFnZXMvcGVyaGl0dW5nYW4vcGVyaGl0dW5nYW4tbm9ybWFsaXNhc2kvcGVyaGl0dW5nYW4tbm9ybWFsaXNhc2kuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/backend/pages/perhitungan/perhitungan-normalisasi/perhitungan-normalisasi.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/backend/pages/perhitungan/perhitungan-normalisasi/perhitungan-normalisasi.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: PerhitunganNormalisasiComponent */

  /***/
  function srcAppBackendPagesPerhitunganPerhitunganNormalisasiPerhitunganNormalisasiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerhitunganNormalisasiComponent", function () {
      return PerhitunganNormalisasiComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_alternatif_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../services/alternatif.service */
    "./src/app/services/alternatif.service.ts");
    /* harmony import */


    var _services_helpers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../services/helpers.service */
    "./src/app/services/helpers.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PerhitunganNormalisasiComponent = /*#__PURE__*/function () {
      function PerhitunganNormalisasiComponent(alternatifService, helper) {
        _classCallCheck(this, PerhitunganNormalisasiComponent);

        this.alternatifService = alternatifService;
        this.helper = helper;
        this.displayedColumns = ['index', 'nama', 'C01', 'C02', 'C03', 'C04', 'C05', 'C06'];
        this.matriksKeputusan = [];
        this.resultsLength = 0;
        this.unsubs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.subject = 'nama';
        this.countDataSearch = 0;
        this.isLoadingResults = true;
        this.sortActive = 'nama';
        this.sortDirection = 'asc';
        this.limit = 0;
        this.offset = 0;
        this.page = 0;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
          search: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.k1 = [];
        this.k2 = [];
        this.k3 = [];
        this.k4 = [];
        this.k5 = [];
        this.k6 = [];
        this.currentUser = this.helper.currentUser();
      }

      _createClass(PerhitunganNormalisasiComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubs.next();
          this.unsubs.complete();
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this33 = this;

          this.isLoadingResults = true;
          this.alternatifService.getAll('', this.sortActive, this.sortDirection, this.offset, this.limit).subscribe(function (_ref18) {
            var count = _ref18.count,
                results = _ref18.results;
            _this33.matriksKeputusan = results;
            _this33.resultsLength = count;
            _this33.isLoadingResults = false;
            _this33.countDataSearch = results.length;

            _this33.matriksKeputusan.forEach(function (element) {
              var kriteria1 = element.c1;
              var kriteria2 = element.c2;
              var kriteria3 = element.c3;
              var kriteria4 = element.c4;
              var kriteria5 = element.c5;
              var kriteria6 = element.c6;

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

            _this33.matriksKeputusan.forEach(function (element) {
              var kriteria1 = element.c1;
              var kriteria2 = element.c2;
              var kriteria3 = element.c3;
              var kriteria4 = element.c4;
              var kriteria5 = element.c5;
              var kriteria6 = element.c6;

              _this33.k1.push(kriteria1);

              _this33.k2.push(kriteria2);

              _this33.k3.push(kriteria3);

              _this33.k4.push(kriteria4);

              _this33.k5.push(kriteria5);

              _this33.k6.push(kriteria6);
            });

            _this33.matriksKeputusan.forEach(function (element) {
              var kriteria1 = element.c1;
              var kriteria2 = element.c2;
              var kriteria3 = element.c3;
              var kriteria4 = element.c4;
              var kriteria5 = element.c5;
              var kriteria6 = element.c6;
              var c1 = 0;
              var c2 = 0;
              var c3 = 0;
              var c4 = 0;
              var c5 = 0;
              var c6 = 0;

              var _iterator12 = _createForOfIteratorHelper(_this33.k1),
                  _step7;

              try {
                for (_iterator12.s(); !(_step7 = _iterator12.n()).done;) {
                  var iterator = _step7.value;
                  c1 += Math.pow(iterator, 2);
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }

              var _iterator13 = _createForOfIteratorHelper(_this33.k2),
                  _step8;

              try {
                for (_iterator13.s(); !(_step8 = _iterator13.n()).done;) {
                  var _iterator18 = _step8.value;
                  c2 += Math.pow(_iterator18, 2);
                }
              } catch (err) {
                _iterator13.e(err);
              } finally {
                _iterator13.f();
              }

              var _iterator14 = _createForOfIteratorHelper(_this33.k3),
                  _step9;

              try {
                for (_iterator14.s(); !(_step9 = _iterator14.n()).done;) {
                  var _iterator19 = _step9.value;
                  c3 += Math.pow(_iterator19, 2);
                }
              } catch (err) {
                _iterator14.e(err);
              } finally {
                _iterator14.f();
              }

              var _iterator15 = _createForOfIteratorHelper(_this33.k4),
                  _step10;

              try {
                for (_iterator15.s(); !(_step10 = _iterator15.n()).done;) {
                  var _iterator20 = _step10.value;
                  c4 += Math.pow(_iterator20, 2);
                }
              } catch (err) {
                _iterator15.e(err);
              } finally {
                _iterator15.f();
              }

              var _iterator16 = _createForOfIteratorHelper(_this33.k5),
                  _step11;

              try {
                for (_iterator16.s(); !(_step11 = _iterator16.n()).done;) {
                  var _iterator21 = _step11.value;
                  c5 += Math.pow(_iterator21, 2);
                }
              } catch (err) {
                _iterator16.e(err);
              } finally {
                _iterator16.f();
              }

              var _iterator17 = _createForOfIteratorHelper(_this33.k6),
                  _step12;

              try {
                for (_iterator17.s(); !(_step12 = _iterator17.n()).done;) {
                  var _iterator22 = _step12.value;
                  c6 += Math.pow(_iterator22, 2);
                }
              } catch (err) {
                _iterator17.e(err);
              } finally {
                _iterator17.f();
              }

              element.c1 = kriteria1 / Math.sqrt(c1);
              element.c2 = kriteria2 / Math.sqrt(c2);
              element.c3 = kriteria3 / Math.sqrt(c3);
              element.c4 = kriteria4 / Math.sqrt(c4);
              element.c5 = kriteria5 / Math.sqrt(c5);
              element.c6 = kriteria6 / Math.sqrt(c6);
            });
          }, function (err) {
            _this33.isLoadingResults = false;
            console.log(err);
          });
        }
      }]);

      return PerhitunganNormalisasiComponent;
    }();

    PerhitunganNormalisasiComponent.ctorParameters = function () {
      return [{
        type: _services_alternatif_service__WEBPACK_IMPORTED_MODULE_1__["AlternatifService"]
      }, {
        type: _services_helpers_service__WEBPACK_IMPORTED_MODULE_2__["HelpersService"]
      }];
    };

    PerhitunganNormalisasiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
      selector: 'app-perhitungan-normalisasi',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./perhitungan-normalisasi.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/perhitungan/perhitungan-normalisasi/perhitungan-normalisasi.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./perhitungan-normalisasi.component.scss */
      "./src/app/backend/pages/perhitungan/perhitungan-normalisasi/perhitungan-normalisasi.component.scss"))["default"]]
    })], PerhitunganNormalisasiComponent);
    /***/
  },

  /***/
  "./src/app/backend/pages/perhitungan/perhitungan-ranking/perhitungan-ranking.component.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/backend/pages/perhitungan/perhitungan-ranking/perhitungan-ranking.component.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBackendPagesPerhitunganPerhitunganRankingPerhitunganRankingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tlbmQvcGFnZXMvcGVyaGl0dW5nYW4vcGVyaGl0dW5nYW4tcmFua2luZy9wZXJoaXR1bmdhbi1yYW5raW5nLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/backend/pages/perhitungan/perhitungan-ranking/perhitungan-ranking.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/backend/pages/perhitungan/perhitungan-ranking/perhitungan-ranking.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: PerhitunganRankingComponent */

  /***/
  function srcAppBackendPagesPerhitunganPerhitunganRankingPerhitunganRankingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerhitunganRankingComponent", function () {
      return PerhitunganRankingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_alternatif_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../services/alternatif.service */
    "./src/app/services/alternatif.service.ts");
    /* harmony import */


    var _services_bobot_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../../services/bobot.service */
    "./src/app/services/bobot.service.ts");
    /* harmony import */


    var _services_helpers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../services/helpers.service */
    "./src/app/services/helpers.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PerhitunganRankingComponent = /*#__PURE__*/function () {
      function PerhitunganRankingComponent(alternatifService, bobotService, helper) {
        _classCallCheck(this, PerhitunganRankingComponent);

        this.alternatifService = alternatifService;
        this.bobotService = bobotService;
        this.helper = helper;
        this.displayedColumns = ['index', 'nama', 'yi'];
        this.matriksKeputusan = [];
        this.matriksOptimasi = [];
        this.matriksO = [];
        this.matriksRank = [];
        this.resultsLength = 0;
        this.unsubs = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subject = 'nama';
        this.countDataSearch = 0;
        this.isLoadingResults = true;
        this.sortActive = 'nama';
        this.sortDirection = 'asc';
        this.limit = 0;
        this.offset = 0;
        this.page = 0;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
          search: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('')
        });
        this.sumBobot = 0;
        this.k1 = [];
        this.k2 = [];
        this.k3 = [];
        this.k4 = [];
        this.k5 = [];
        this.k6 = [];
        this.nilaiTertinggi = 0;
        this.hotelTerbaik = '';
        this.currentUser = this.helper.currentUser();
      }

      _createClass(PerhitunganRankingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubs.next();
          this.unsubs.complete();
        }
      }, {
        key: "getBobot",
        value: function getBobot() {}
      }, {
        key: "getData",
        value: function getData() {
          var _this34 = this;

          this.isLoadingResults = true;
          this.alternatifService.getAll('', this.sortActive, this.sortDirection, this.offset, this.limit).subscribe(function (_ref19) {
            var count = _ref19.count,
                results = _ref19.results;
            _this34.matriksKeputusan = results;
            _this34.resultsLength = count;
            _this34.isLoadingResults = false;
            _this34.countDataSearch = results.length;

            _this34.matriksKeputusan.forEach(function (element) {
              var kriteria1 = element.c1;
              var kriteria2 = element.c2;
              var kriteria3 = element.c3;
              var kriteria4 = element.c4;
              var kriteria5 = element.c5;
              var kriteria6 = element.c6;

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

            _this34.matriksKeputusan.forEach(function (element) {
              var kriteria1 = element.c1;
              var kriteria2 = element.c2;
              var kriteria3 = element.c3;
              var kriteria4 = element.c4;
              var kriteria5 = element.c5;
              var kriteria6 = element.c6;

              _this34.k1.push(kriteria1);

              _this34.k2.push(kriteria2);

              _this34.k3.push(kriteria3);

              _this34.k4.push(kriteria4);

              _this34.k5.push(kriteria5);

              _this34.k6.push(kriteria6);
            });

            _this34.matriksKeputusan.forEach(function (element) {
              var kriteria1 = element.c1;
              var kriteria2 = element.c2;
              var kriteria3 = element.c3;
              var kriteria4 = element.c4;
              var kriteria5 = element.c5;
              var kriteria6 = element.c6;
              var c1 = 0;
              var c2 = 0;
              var c3 = 0;
              var c4 = 0;
              var c5 = 0;
              var c6 = 0;

              var _iterator23 = _createForOfIteratorHelper(_this34.k1),
                  _step13;

              try {
                for (_iterator23.s(); !(_step13 = _iterator23.n()).done;) {
                  var iterator = _step13.value;
                  c1 += Math.pow(iterator, 2);
                }
              } catch (err) {
                _iterator23.e(err);
              } finally {
                _iterator23.f();
              }

              var _iterator24 = _createForOfIteratorHelper(_this34.k2),
                  _step14;

              try {
                for (_iterator24.s(); !(_step14 = _iterator24.n()).done;) {
                  var _iterator29 = _step14.value;
                  c2 += Math.pow(_iterator29, 2);
                }
              } catch (err) {
                _iterator24.e(err);
              } finally {
                _iterator24.f();
              }

              var _iterator25 = _createForOfIteratorHelper(_this34.k3),
                  _step15;

              try {
                for (_iterator25.s(); !(_step15 = _iterator25.n()).done;) {
                  var _iterator30 = _step15.value;
                  c3 += Math.pow(_iterator30, 2);
                }
              } catch (err) {
                _iterator25.e(err);
              } finally {
                _iterator25.f();
              }

              var _iterator26 = _createForOfIteratorHelper(_this34.k4),
                  _step16;

              try {
                for (_iterator26.s(); !(_step16 = _iterator26.n()).done;) {
                  var _iterator31 = _step16.value;
                  c4 += Math.pow(_iterator31, 2);
                }
              } catch (err) {
                _iterator26.e(err);
              } finally {
                _iterator26.f();
              }

              var _iterator27 = _createForOfIteratorHelper(_this34.k5),
                  _step17;

              try {
                for (_iterator27.s(); !(_step17 = _iterator27.n()).done;) {
                  var _iterator32 = _step17.value;
                  c5 += Math.pow(_iterator32, 2);
                }
              } catch (err) {
                _iterator27.e(err);
              } finally {
                _iterator27.f();
              }

              var _iterator28 = _createForOfIteratorHelper(_this34.k6),
                  _step18;

              try {
                for (_iterator28.s(); !(_step18 = _iterator28.n()).done;) {
                  var _iterator33 = _step18.value;
                  c6 += Math.pow(_iterator33, 2);
                }
              } catch (err) {
                _iterator28.e(err);
              } finally {
                _iterator28.f();
              }

              element.c1 = kriteria1 / Math.sqrt(c1);
              element.c2 = kriteria2 / Math.sqrt(c2);
              element.c3 = kriteria3 / Math.sqrt(c3);
              element.c4 = kriteria4 / Math.sqrt(c4);
              element.c5 = kriteria5 / Math.sqrt(c5);
              element.c6 = kriteria6 / Math.sqrt(c6);
            });

            _this34.bobotService.getAll() // tslint:disable-next-line: no-shadowed-variable
            .subscribe(function (_ref20) {
              var results = _ref20.results;
              results.forEach(function (element) {
                if (element.userId._id === _this34.currentUser._id) {
                  var w1 = element.w1;
                  var w2 = element.w2;
                  var w3 = element.w3;
                  var w4 = element.w4;
                  var w5 = element.w5;
                  var w6 = element.w6;
                  _this34.sumBobot = w1 + w2 + w3 + w4 + w5 + w6;
                  element.w1 = w1 / _this34.sumBobot;
                  element.w2 = w2 / _this34.sumBobot;
                  element.w3 = w3 / _this34.sumBobot;
                  element.w4 = w4 / _this34.sumBobot;
                  element.w5 = w5 / _this34.sumBobot;
                  element.w6 = w6 / _this34.sumBobot;

                  _this34.matriksKeputusan.forEach(function (res) {
                    var kriteria1 = res.c1;
                    var kriteria2 = res.c2;
                    var kriteria3 = res.c3;
                    var kriteria4 = res.c4;
                    var kriteria5 = res.c5;
                    var kriteria6 = res.c6;
                    var c1 = kriteria1 * element.w1;
                    var c2 = kriteria2 * element.w2;
                    var c3 = kriteria3 * element.w3;
                    var c4 = kriteria4 * element.w4;
                    var c5 = kriteria5 * element.w5;
                    var c6 = kriteria6 * element.w6;
                    res.c1 = c1;
                    res.c2 = c2;
                    res.c3 = c3;
                    res.c4 = c4;
                    res.c5 = c5;
                    res.c6 = c6;
                    var optimasi = {
                      nama: res.nama,
                      max: c2 + c4 + c5 + c6,
                      min: c1 + c3,
                      yi: c2 + c4 + c5 + c6 - (c1 + c3)
                    };

                    _this34.matriksOptimasi.push(optimasi);
                  });
                }
              });
              _this34.matriksO = _this34.matriksOptimasi;
              _this34.matriksRank = _this34.matriksO;
              var len = _this34.matriksRank.length;

              for (var i = len - 1; i >= 0; i--) {
                for (var j = 1; j <= i; j++) {
                  if (_this34.matriksRank[j - 1].yi < _this34.matriksRank[j].yi) {
                    var temp = _this34.matriksRank[j - 1];
                    _this34.matriksRank[j - 1] = _this34.matriksRank[j];
                    _this34.matriksRank[j] = temp;
                  }
                }
              }

              _this34.nilaiTertinggi = _this34.matriksRank[0].yi;
              _this34.hotelTerbaik = _this34.matriksRank[0].nama;
            });
          }, function (err) {
            _this34.isLoadingResults = false;
            console.log(err);
          });
        }
      }]);

      return PerhitunganRankingComponent;
    }();

    PerhitunganRankingComponent.ctorParameters = function () {
      return [{
        type: _services_alternatif_service__WEBPACK_IMPORTED_MODULE_2__["AlternatifService"]
      }, {
        type: _services_bobot_service__WEBPACK_IMPORTED_MODULE_3__["BobotService"]
      }, {
        type: _services_helpers_service__WEBPACK_IMPORTED_MODULE_4__["HelpersService"]
      }];
    };

    PerhitunganRankingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
      selector: 'app-perhitungan-ranking',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./perhitungan-ranking.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/perhitungan/perhitungan-ranking/perhitungan-ranking.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./perhitungan-ranking.component.scss */
      "./src/app/backend/pages/perhitungan/perhitungan-ranking/perhitungan-ranking.component.scss"))["default"]]
    })], PerhitunganRankingComponent);
    /***/
  },

  /***/
  "./src/app/backend/pages/perhitungan/perhitungan.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/backend/pages/perhitungan/perhitungan.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBackendPagesPerhitunganPerhitunganComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tlbmQvcGFnZXMvcGVyaGl0dW5nYW4vcGVyaGl0dW5nYW4uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/backend/pages/perhitungan/perhitungan.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/backend/pages/perhitungan/perhitungan.component.ts ***!
    \********************************************************************/

  /*! exports provided: PerhitunganComponent */

  /***/
  function srcAppBackendPagesPerhitunganPerhitunganComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerhitunganComponent", function () {
      return PerhitunganComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_helpers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../services/helpers.service */
    "./src/app/services/helpers.service.ts");
    /* harmony import */


    var _services_alternatif_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../services/alternatif.service */
    "./src/app/services/alternatif.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PerhitunganComponent = /*#__PURE__*/function () {
      function PerhitunganComponent(alternatifService, helper) {
        _classCallCheck(this, PerhitunganComponent);

        this.alternatifService = alternatifService;
        this.helper = helper;
        this.displayedColumns = ['index', 'nama', 'C01', 'C02', 'C03', 'C04', 'C05', 'C06'];
        this.dataSource = [];
        this.matriksKeputusan = [];
        this.resultsLength = 0;
        this.unsubs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.subject = 'nama';
        this.countDataSearch = 0;
        this.isLoadingResults = true;
        this.sortActive = 'nama';
        this.sortDirection = 'asc';
        this.limit = 0;
        this.offset = 0;
        this.page = 0;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          search: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.currentUser = this.helper.currentUser();
      }

      _createClass(PerhitunganComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubs.next();
          this.unsubs.complete();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "getData",
        value: function getData() {
          var _this35 = this;

          this.isLoadingResults = true;
          this.alternatifService.getAll('', this.sortActive, this.sortDirection, this.offset, this.limit).subscribe(function (_ref21) {
            var count = _ref21.count,
                results = _ref21.results;
            _this35.dataSource = results;
            _this35.resultsLength = count;
            _this35.isLoadingResults = false;
            _this35.countDataSearch = results.length;
          }, function (err) {
            _this35.isLoadingResults = false;
            console.log(err);
          });
        }
      }]);

      return PerhitunganComponent;
    }();

    PerhitunganComponent.ctorParameters = function () {
      return [{
        type: _services_alternatif_service__WEBPACK_IMPORTED_MODULE_4__["AlternatifService"]
      }, {
        type: _services_helpers_service__WEBPACK_IMPORTED_MODULE_3__["HelpersService"]
      }];
    };

    PerhitunganComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
      selector: 'app-perhitungan',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./perhitungan.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/pages/perhitungan/perhitungan.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./perhitungan.component.scss */
      "./src/app/backend/pages/perhitungan/perhitungan.component.scss"))["default"]]
    })], PerhitunganComponent);
    /***/
  },

  /***/
  "./src/app/backend/pages/perhitungan/perhitungan.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/backend/pages/perhitungan/perhitungan.module.ts ***!
    \*****************************************************************/

  /*! exports provided: PerhitunganModule */

  /***/
  function srcAppBackendPagesPerhitunganPerhitunganModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerhitunganModule", function () {
      return PerhitunganModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _services_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../services/auth.guard */
    "./src/app/services/auth.guard.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _perhitungan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./perhitungan.component */
    "./src/app/backend/pages/perhitungan/perhitungan.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _perhitungan_matriks_keputusan_perhitungan_matriks_keputusan_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./perhitungan-matriks-keputusan/perhitungan-matriks-keputusan.component */
    "./src/app/backend/pages/perhitungan/perhitungan-matriks-keputusan/perhitungan-matriks-keputusan.component.ts");
    /* harmony import */


    var _perhitungan_normalisasi_perhitungan_normalisasi_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./perhitungan-normalisasi/perhitungan-normalisasi.component */
    "./src/app/backend/pages/perhitungan/perhitungan-normalisasi/perhitungan-normalisasi.component.ts");
    /* harmony import */


    var _perhitungan_nilai_terbobot_perhitungan_nilai_terbobot_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./perhitungan-nilai-terbobot/perhitungan-nilai-terbobot.component */
    "./src/app/backend/pages/perhitungan/perhitungan-nilai-terbobot/perhitungan-nilai-terbobot.component.ts");
    /* harmony import */


    var _perhitungan_ranking_perhitungan_ranking_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./perhitungan-ranking/perhitungan-ranking.component */
    "./src/app/backend/pages/perhitungan/perhitungan-ranking/perhitungan-ranking.component.ts");

    var routes = [{
      path: '',
      component: _perhitungan_component__WEBPACK_IMPORTED_MODULE_4__["PerhitunganComponent"],
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }];

    var PerhitunganModule = function PerhitunganModule() {
      _classCallCheck(this, PerhitunganModule);
    };

    PerhitunganModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      declarations: [_perhitungan_component__WEBPACK_IMPORTED_MODULE_4__["PerhitunganComponent"], _perhitungan_matriks_keputusan_perhitungan_matriks_keputusan_component__WEBPACK_IMPORTED_MODULE_7__["PerhitunganMatriksKeputusanComponent"], _perhitungan_normalisasi_perhitungan_normalisasi_component__WEBPACK_IMPORTED_MODULE_8__["PerhitunganNormalisasiComponent"], _perhitungan_nilai_terbobot_perhitungan_nilai_terbobot_component__WEBPACK_IMPORTED_MODULE_9__["PerhitunganNilaiTerbobotComponent"], _perhitungan_ranking_perhitungan_ranking_component__WEBPACK_IMPORTED_MODULE_10__["PerhitunganRankingComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]],
      exports: [_perhitungan_component__WEBPACK_IMPORTED_MODULE_4__["PerhitunganComponent"]]
    })], PerhitunganModule);
    /***/
  },

  /***/
  "./src/app/backend/partials/remove-dialog/remove-dialog.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/backend/partials/remove-dialog/remove-dialog.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBackendPartialsRemoveDialogRemoveDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tlbmQvcGFydGlhbHMvcmVtb3ZlLWRpYWxvZy9yZW1vdmUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/backend/partials/remove-dialog/remove-dialog.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/backend/partials/remove-dialog/remove-dialog.component.ts ***!
    \***************************************************************************/

  /*! exports provided: RemoveDialogComponent */

  /***/
  function srcAppBackendPartialsRemoveDialogRemoveDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RemoveDialogComponent", function () {
      return RemoveDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RemoveDialogComponent = /*#__PURE__*/function () {
      function RemoveDialogComponent(dialogRef, md) {
        _classCallCheck(this, RemoveDialogComponent);

        this.dialogRef = dialogRef;
        this.md = md;
        this.message = this.md && this.md.message ? this.md.message : 'Yakin ingin mengapus?';
      }

      _createClass(RemoveDialogComponent, [{
        key: "cancel",
        value: function cancel() {
          this.dialogRef.close();
        }
      }, {
        key: "submit",
        value: function submit() {
          this.dialogRef.close(true);
        }
      }]);

      return RemoveDialogComponent;
    }();

    RemoveDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    RemoveDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-remove-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./remove-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/partials/remove-dialog/remove-dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./remove-dialog.component.scss */
      "./src/app/backend/partials/remove-dialog/remove-dialog.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]))], RemoveDialogComponent);
    /***/
  },

  /***/
  "./src/app/backend/partials/remove-dialog/remove-dialog.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/backend/partials/remove-dialog/remove-dialog.module.ts ***!
    \************************************************************************/

  /*! exports provided: RemoveDialogModule */

  /***/
  function srcAppBackendPartialsRemoveDialogRemoveDialogModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RemoveDialogModule", function () {
      return RemoveDialogModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _remove_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./remove-dialog.component */
    "./src/app/backend/partials/remove-dialog/remove-dialog.component.ts");

    var RemoveDialogModule = function RemoveDialogModule() {
      _classCallCheck(this, RemoveDialogModule);
    };

    RemoveDialogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_remove_dialog_component__WEBPACK_IMPORTED_MODULE_4__["RemoveDialogComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]],
      entryComponents: [_remove_dialog_component__WEBPACK_IMPORTED_MODULE_4__["RemoveDialogComponent"]]
    })], RemoveDialogModule);
    /***/
  },

  /***/
  "./src/app/backend/partials/sidenav/sidenav.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/backend/partials/sidenav/sidenav.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBackendPartialsSidenavSidenavComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 300px;\n}\n\na.active {\n  background-color: #f1f1f1;\n  border-left: 4px solid #3f51b5;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21tZGl5dWwvcHJvamVjdC9tb29yYS9jbGllbnQvc3JjL2FwcC9iYWNrZW5kL3BhcnRpYWxzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmFja2VuZC9wYXJ0aWFscy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2JhY2tlbmQvcGFydGlhbHMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuYS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMzZjUxYjU7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cbiIsIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMzAwcHg7XG59XG5cbmEuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjM2Y1MWI1O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/backend/partials/sidenav/sidenav.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/backend/partials/sidenav/sidenav.component.ts ***!
    \***************************************************************/

  /*! exports provided: SidenavComponent */

  /***/
  function srcAppBackendPartialsSidenavSidenavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidenavComponent", function () {
      return SidenavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_helpers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../services/helpers.service */
    "./src/app/services/helpers.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var SidenavComponent = /*#__PURE__*/function () {
      function SidenavComponent(breakpointObserver, auth, helper) {
        _classCallCheck(this, SidenavComponent);

        this.breakpointObserver = breakpointObserver;
        this.auth = auth;
        this.helper = helper;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
          return result.matches;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])());
        this.currentUser = this.helper.currentUser();
      }

      _createClass(SidenavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var prioritas = this.currentUser.roleId.prioritas;
          this.menus = [{
            name: 'Dashboard',
            url: '/backend/dashboard',
            hide: false
          }, {
            name: 'Alternatif',
            url: '/backend/alternatif',
            hide: false
          }, {
            name: 'Kriteria',
            url: '/backend/kriteria',
            hide: false
          }, {
            name: 'Bobot',
            url: '/backend/bobot',
            hide: false
          }, {
            name: 'Perhitungan',
            url: '/backend/perhitungan',
            hide: false
          }, {
            name: 'Pengguna',
            url: '/backend/pengguna',
            hide: prioritas > 0 ? true : false
          }, {
            name: 'Peran',
            url: '/backend/peran',
            hide: prioritas > 0 ? true : false
          }];
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this36 = this;

          setTimeout(function () {
            _this36.auth.logout();
          }, 500);
        }
      }]);

      return SidenavComponent;
    }();

    SidenavComponent.ctorParameters = function () {
      return [{
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _services_helpers_service__WEBPACK_IMPORTED_MODULE_1__["HelpersService"]
      }];
    };

    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-sidenav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidenav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/backend/partials/sidenav/sidenav.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidenav.component.scss */
      "./src/app/backend/partials/sidenav/sidenav.component.scss"))["default"]]
    })], SidenavComponent);
    /***/
  },

  /***/
  "./src/app/backend/partials/sidenav/sidenav.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/backend/partials/sidenav/sidenav.module.ts ***!
    \************************************************************/

  /*! exports provided: SidenavModule */

  /***/
  function srcAppBackendPartialsSidenavSidenavModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidenavModule", function () {
      return SidenavModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sidenav.component */
    "./src/app/backend/partials/sidenav/sidenav.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var SidenavModule = function SidenavModule() {
      _classCallCheck(this, SidenavModule);
    };

    SidenavModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      declarations: [_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
      exports: [_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"]]
    })], SidenavModule);
    /***/
  },

  /***/
  "./src/app/interceptors/error-interceptor.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/interceptors/error-interceptor.service.ts ***!
    \***********************************************************/

  /*! exports provided: ErrorInterceptorService */

  /***/
  function srcAppInterceptorsErrorInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptorService", function () {
      return ErrorInterceptorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ErrorInterceptorService = /*#__PURE__*/function () {
      function ErrorInterceptorService(auth) {
        _classCallCheck(this, ErrorInterceptorService);

        this.auth = auth;
      }

      _createClass(ErrorInterceptorService, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this37 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            if (err.status === 401) {
              _this37.auth.logout();

              location.reload();
            }

            var error = err.error || err.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
          }));
        }
      }]);

      return ErrorInterceptorService;
    }();

    ErrorInterceptorService.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    ErrorInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    })], ErrorInterceptorService);
    /***/
  },

  /***/
  "./src/app/interceptors/https-interceptor.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/interceptors/https-interceptor.service.ts ***!
    \***********************************************************/

  /*! exports provided: HttpsInterceptorService */

  /***/
  function srcAppInterceptorsHttpsInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpsInterceptorService", function () {
      return HttpsInterceptorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HttpsInterceptorService = /*#__PURE__*/function () {
      function HttpsInterceptorService() {
        _classCallCheck(this, HttpsInterceptorService);
      }

      _createClass(HttpsInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          var match = /(\/(api|auth).+)/;
          var secureReq = req.clone({
            // tslint:disable-next-line: max-line-length
            url: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["isDevMode"])() ? req.url.replace(match, "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].host, ":").concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].port, "$1")) : req.url.replace(match, "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].host, "$1"))
          });
          return next.handle(secureReq);
        }
      }]);

      return HttpsInterceptorService;
    }();

    HttpsInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], HttpsInterceptorService);
    /***/
  },

  /***/
  "./src/app/interceptors/index.ts":
  /*!***************************************!*\
    !*** ./src/app/interceptors/index.ts ***!
    \***************************************/

  /*! exports provided: httpInterceptorProviders */

  /***/
  function srcAppInterceptorsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function () {
      return httpInterceptorProviders;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _https_interceptor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./https-interceptor.service */
    "./src/app/interceptors/https-interceptor.service.ts");
    /* harmony import */


    var _error_interceptor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./error-interceptor.service */
    "./src/app/interceptors/error-interceptor.service.ts");
    /* harmony import */


    var _jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./jwt-interceptor.service */
    "./src/app/interceptors/jwt-interceptor.service.ts");
    /* "Barrel" of Http Interceptors */

    /** Http interceptor providers in outside-in order */


    var httpInterceptorProviders = [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
      useClass: _https_interceptor_service__WEBPACK_IMPORTED_MODULE_2__["HttpsInterceptorService"],
      multi: true
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
      useClass: _jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_4__["JwtInterceptorService"],
      multi: true
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
      useClass: _error_interceptor_service__WEBPACK_IMPORTED_MODULE_3__["ErrorInterceptorService"],
      multi: true
    }];
    /***/
  },

  /***/
  "./src/app/interceptors/jwt-interceptor.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/interceptors/jwt-interceptor.service.ts ***!
    \*********************************************************/

  /*! exports provided: JwtInterceptorService */

  /***/
  function srcAppInterceptorsJwtInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptorService", function () {
      return JwtInterceptorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var JwtInterceptorService = /*#__PURE__*/function () {
      function JwtInterceptorService(auth) {
        _classCallCheck(this, JwtInterceptorService);

        this.auth = auth;
      }

      _createClass(JwtInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          var request = req;
          var match = /(\/(api|auth).+)/;

          if (!req.url.endsWith('login') && req.url.match(match) && localStorage.getItem(this.auth.localToken)) {
            request = req.clone({
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: "Bearer ".concat(localStorage.getItem(this.auth.localToken))
              })
            });
          }

          return next.handle(request);
        }
      }]);

      return JwtInterceptorService;
    }();

    JwtInterceptorService.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    JwtInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    })], JwtInterceptorService);
    /***/
  },

  /***/
  "./src/app/pages/daftar/daftar.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/pages/daftar/daftar.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDaftarDaftarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RhZnRhci9kYWZ0YXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/daftar/daftar.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/daftar/daftar.component.ts ***!
    \**************************************************/

  /*! exports provided: DaftarComponent */

  /***/
  function srcAppPagesDaftarDaftarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DaftarComponent", function () {
      return DaftarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_bobot_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/bobot.service */
    "./src/app/services/bobot.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_helpers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/helpers.service */
    "./src/app/services/helpers.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_pengguna_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../services/pengguna.service */
    "./src/app/services/pengguna.service.ts");
    /* harmony import */


    var _services_peran_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../services/peran.service */
    "./src/app/services/peran.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DaftarComponent = /*#__PURE__*/function () {
      function DaftarComponent(fb, penggunaService, peranService, bobotService, router, helper) {
        _classCallCheck(this, DaftarComponent);

        this.fb = fb;
        this.penggunaService = penggunaService;
        this.peranService = peranService;
        this.bobotService = bobotService;
        this.router = router;
        this.helper = helper;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.peranList = [];
        this.dialogTitle = '';
        this.form = this.fb.group({
          nama: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
          password: [''],
          roleId: [null]
        });
        this.currentUser = this.helper.currentUser();

        if (this.currentUser !== null) {
          this.router.navigate(['/backend/dashboard']);
        }
      }

      _createClass(DaftarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this38 = this;

          this.peranService.getAll('user').subscribe(function (_ref22) {
            var results = _ref22.results;
            _this38.peranList = results;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs.unsubscribe();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this39 = this;

          this.form.controls.password.setValue('password');
          this.form.controls.roleId.setValue(this.peranList[0]._id);
          this.penggunaService.insert(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.subject)).subscribe(function (results) {
            _this39.dataBobot = {
              userId: results
            };

            _this39.bobotService.insert(_this39.dataBobot).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this39.subject)).subscribe();

            _this39.form.reset();

            var route = '/masuk';

            _this39.router.navigate([route]);

            _this39.helper.sbError('Akun berhasil didaftarkan', 'OK');
          }, function (err) {
            _this39.helper.sbError('Pendaftaran gagal! ' + err.message, 'OK');
          });
        }
      }]);

      return DaftarComponent;
    }();

    DaftarComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _services_pengguna_service__WEBPACK_IMPORTED_MODULE_7__["PenggunaService"]
      }, {
        type: _services_peran_service__WEBPACK_IMPORTED_MODULE_8__["PeranService"]
      }, {
        type: _services_bobot_service__WEBPACK_IMPORTED_MODULE_1__["BobotService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_helpers_service__WEBPACK_IMPORTED_MODULE_4__["HelpersService"]
      }];
    };

    DaftarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
      selector: 'app-daftar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./daftar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/daftar/daftar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./daftar.component.scss */
      "./src/app/pages/daftar/daftar.component.scss"))["default"]]
    })], DaftarComponent);
    /***/
  },

  /***/
  "./src/app/pages/daftar/daftar.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/daftar/daftar.module.ts ***!
    \***********************************************/

  /*! exports provided: DaftarModule */

  /***/
  function srcAppPagesDaftarDaftarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DaftarModule", function () {
      return DaftarModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _daftar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./daftar.component */
    "./src/app/pages/daftar/daftar.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var routes = [{
      path: '',
      component: _daftar_component__WEBPACK_IMPORTED_MODULE_3__["DaftarComponent"]
    }];

    var DaftarModule = function DaftarModule() {
      _classCallCheck(this, DaftarModule);
    };

    DaftarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      declarations: [_daftar_component__WEBPACK_IMPORTED_MODULE_3__["DaftarComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]],
      exports: [_daftar_component__WEBPACK_IMPORTED_MODULE_3__["DaftarComponent"]]
    })], DaftarModule);
    /***/
  },

  /***/
  "./src/app/pages/masuk/masuk.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/pages/masuk/masuk.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMasukMasukComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hc3VrL21hc3VrLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/masuk/masuk.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/masuk/masuk.component.ts ***!
    \************************************************/

  /*! exports provided: MasukComponent */

  /***/
  function srcAppPagesMasukMasukComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MasukComponent", function () {
      return MasukComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_form_state_matcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/form-state-matcher */
    "./src/app/services/form-state-matcher.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_helpers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/helpers.service */
    "./src/app/services/helpers.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MasukComponent = /*#__PURE__*/function () {
      function MasukComponent(formBuilder, auth, helper, activatedRoute, router) {
        _classCallCheck(this, MasukComponent);

        this.formBuilder = formBuilder;
        this.auth = auth;
        this.helper = helper;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.fm = new _services_form_state_matcher__WEBPACK_IMPORTED_MODULE_2__["FormStateMatcher"]();
        this.unsubs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.loginForm = this.formBuilder.group({
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]],
          password: ['']
        });
        this.currentUser = this.helper.currentUser();

        if (this.currentUser !== null) {
          this.router.navigate(['/backend']);
        }
      }

      _createClass(MasukComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubs.next();
          this.unsubs.complete();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this40 = this;

          this.loginForm.controls.password.setValue('password');
          var uname = this.loginForm.get('email').value;
          var pass = this.loginForm.get('password').value;
          this.auth.login(uname.toLowerCase(), pass).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubs)).subscribe(function (res) {
            localStorage.setItem(_this40.auth.localUser, JSON.stringify(res.user));
            localStorage.setItem(_this40.auth.localToken, res.token);

            _this40.activatedRoute.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(_this40.unsubs)).subscribe(function (params) {
              var route = params.returnUrl ? params.returnUrl : '/backend';
              setTimeout(function () {
                _this40.router.navigate([route]);
              }, 500);
            });

            _this40.helper.sbError('Berhasil masuk', 'OK');
          }, function (err) {
            _this40.helper.sbError(err.message, 'OK');
          });
        }
      }]);

      return MasukComponent;
    }();

    MasukComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _services_helpers_service__WEBPACK_IMPORTED_MODULE_4__["HelpersService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }];
    };

    MasukComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
      selector: 'app-masuk',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./masuk.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masuk/masuk.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./masuk.component.scss */
      "./src/app/pages/masuk/masuk.component.scss"))["default"]]
    })], MasukComponent);
    /***/
  },

  /***/
  "./src/app/pages/masuk/masuk.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/masuk/masuk.module.ts ***!
    \*********************************************/

  /*! exports provided: MasukModule */

  /***/
  function srcAppPagesMasukMasukModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MasukModule", function () {
      return MasukModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _masuk_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./masuk.component */
    "./src/app/pages/masuk/masuk.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var routes = [{
      path: '',
      component: _masuk_component__WEBPACK_IMPORTED_MODULE_2__["MasukComponent"]
    }];

    var MasukModule = function MasukModule() {
      _classCallCheck(this, MasukModule);
    };

    MasukModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      declarations: [_masuk_component__WEBPACK_IMPORTED_MODULE_2__["MasukComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]],
      exports: [_masuk_component__WEBPACK_IMPORTED_MODULE_2__["MasukComponent"]]
    })], MasukModule);
    /***/
  },

  /***/
  "./src/app/services/alternatif.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/alternatif.service.ts ***!
    \************************************************/

  /*! exports provided: AlternatifService */

  /***/
  function srcAppServicesAlternatifServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlternatifService", function () {
      return AlternatifService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _helpers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./helpers.service */
    "./src/app/services/helpers.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AlternatifService = /*#__PURE__*/function () {
      function AlternatifService(http, helper) {
        _classCallCheck(this, AlternatifService);

        this.http = http;
        this.helper = helper;
        this.endpoint = '/api/alternatif';
      }

      _createClass(AlternatifService, [{
        key: "getAll",
        value: function getAll() {
          var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var sort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var limit = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
          var url = this.endpoint;
          var params = this.helper.getLimitParams(limit, offset);
          params = params.set('sort', sort).set('direction', order);

          if (search) {
            params = params.set('search', search);
          }

          return this.http.get(url, {
            params: params
          });
        }
      }, {
        key: "insert",
        value: function insert(data) {
          var url = this.endpoint;
          return this.http.post(url, data);
        }
      }, {
        key: "updateById",
        value: function updateById(id, data) {
          var url = "".concat(this.endpoint, "/").concat(id);
          return this.http.put(url, data);
        }
      }, {
        key: "removeById",
        value: function removeById(id) {
          var url = "".concat(this.endpoint, "/").concat(id);
          return this.http["delete"](url);
        }
      }]);

      return AlternatifService;
    }();

    AlternatifService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _helpers_service__WEBPACK_IMPORTED_MODULE_1__["HelpersService"]
      }];
    };

    AlternatifService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    })], AlternatifService);
    /***/
  },

  /***/
  "./src/app/services/auth.guard.ts":
  /*!****************************************!*\
    !*** ./src/app/services/auth.guard.ts ***!
    \****************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppServicesAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(auth, router) {
        _classCallCheck(this, AuthGuard);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.auth.isLoggedIn()) {
            return true;
          }

          return this.router.navigate(['masuk'], {
            queryParams: {
              returnUrl: state.url
            }
          });
        }
      }, {
        key: "canActivateChild",
        value: function canActivateChild(next, state) {
          if (this.auth.isLoggedIn()) {
            return true;
          }

          return this.router.navigate(['masuk'], {
            queryParams: {
              returnUrl: state.url
            }
          });
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http, router) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.router = router;
        this.localToken = 'x-moora-token';
        this.localUser = 'x-moora-user';
        this.token = localStorage.getItem(this.localToken);
      }

      _createClass(AuthService, [{
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return localStorage.getItem(this.localUser) ? true : false;
        }
      }, {
        key: "login",
        value: function login(username, password) {
          var auth = 'Basic ' + btoa("".concat(username, ":").concat(password));
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', auth);
          var url = '/auth/login';
          return this.http.get(url, {
            headers: headers
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this41 = this;

          localStorage.removeItem(this.localUser);
          localStorage.removeItem(this.localToken);
          this.http.get('/auth/logout').subscribe(function () {
            _this41.router.navigate(['masuk']);
          });
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/bobot.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/bobot.service.ts ***!
    \*******************************************/

  /*! exports provided: BobotService */

  /***/
  function srcAppServicesBobotServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BobotService", function () {
      return BobotService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _helpers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./helpers.service */
    "./src/app/services/helpers.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BobotService = /*#__PURE__*/function () {
      function BobotService(http, helper) {
        _classCallCheck(this, BobotService);

        this.http = http;
        this.helper = helper;
        this.endpoint = '/api/bobotKriteria';
      }

      _createClass(BobotService, [{
        key: "getAll",
        value: function getAll() {
          var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var sort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var limit = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
          var url = this.endpoint;
          var params = this.helper.getLimitParams(limit, offset);
          params = params.set('sort', sort).set('direction', order);

          if (search) {
            params = params.set('search', search);
          }

          return this.http.get(url, {
            params: params
          });
        }
      }, {
        key: "insert",
        value: function insert(data) {
          var url = this.endpoint;
          return this.http.post(url, data);
        }
      }, {
        key: "updateById",
        value: function updateById(id, data) {
          var url = "".concat(this.endpoint, "/").concat(id);
          return this.http.put(url, data);
        }
      }, {
        key: "removeById",
        value: function removeById(id) {
          var url = "".concat(this.endpoint, "/").concat(id);
          return this.http["delete"](url);
        }
      }]);

      return BobotService;
    }();

    BobotService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _helpers_service__WEBPACK_IMPORTED_MODULE_1__["HelpersService"]
      }];
    };

    BobotService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    })], BobotService);
    /***/
  },

  /***/
  "./src/app/services/form-state-matcher.ts":
  /*!************************************************!*\
    !*** ./src/app/services/form-state-matcher.ts ***!
    \************************************************/

  /*! exports provided: FormStateMatcher */

  /***/
  function srcAppServicesFormStateMatcherTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormStateMatcher", function () {
      return FormStateMatcher;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var FormStateMatcher = /*#__PURE__*/function () {
      function FormStateMatcher() {
        _classCallCheck(this, FormStateMatcher);
      }

      _createClass(FormStateMatcher, [{
        key: "isErrorState",

        /** Error when invalid control is dirty, touched, or submitted. */
        value: function isErrorState(control, form) {
          var isSubmitted = form && form.submitted;
          return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
        }
      }]);

      return FormStateMatcher;
    }();
    /***/

  },

  /***/
  "./src/app/services/helpers.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/helpers.service.ts ***!
    \*********************************************/

  /*! exports provided: HelpersService */

  /***/
  function srcAppServicesHelpersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpersService", function () {
      return HelpersService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var HelpersService = /*#__PURE__*/function () {
      function HelpersService(sb, auth, sanitize) {
        _classCallCheck(this, HelpersService);

        this.sb = sb;
        this.auth = auth;
        this.sanitize = sanitize;
        this.pageTitleObserver = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('Halaman Admin');
      }

      _createClass(HelpersService, [{
        key: "sbError",
        value: function sbError(message) {
          var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          this.sb.open(message, action ? action : 'Galat', {
            duration: 5000
          });
        }
      }, {
        key: "sbSuccess",
        value: function sbSuccess(message) {
          var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          this.sb.open(message, action ? action : 'Sukses', {
            duration: 5000
          });
        }
      }, {
        key: "getLimitParams",
        value: function getLimitParams(limit, offset) {
          return new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]().set('limit', limit.toString()).set('offset', offset.toString());
        }
      }, {
        key: "setPageTitle",
        value: function setPageTitle(name) {
          this.pageTitleObserver.next(name);
        }
      }, {
        key: "currentUser",
        value: function currentUser() {
          if (localStorage.getItem(this.auth.localUser)) {
            return JSON.parse(localStorage.getItem(this.auth.localUser));
          }

          return null;
        }
      }, {
        key: "parseWhere",
        value: function parseWhere(where, params) {
          var keys = Object.keys(where);

          if (keys.length) {
            keys.forEach(function (i) {
              params = params.set("where[".concat(i, "]"), where[i]);
            });
          }

          return params;
        }
      }]);

      return HelpersService;
    }();

    HelpersService.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }];
    };

    HelpersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    })], HelpersService);
    /***/
  },

  /***/
  "./src/app/services/kriteria.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/kriteria.service.ts ***!
    \**********************************************/

  /*! exports provided: KriteriaService */

  /***/
  function srcAppServicesKriteriaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KriteriaService", function () {
      return KriteriaService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _helpers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./helpers.service */
    "./src/app/services/helpers.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var KriteriaService = /*#__PURE__*/function () {
      function KriteriaService(http, helper) {
        _classCallCheck(this, KriteriaService);

        this.http = http;
        this.helper = helper;
        this.endpoint = '/api/kriteria';
      }

      _createClass(KriteriaService, [{
        key: "getAll",
        value: function getAll() {
          var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var sort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var limit = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
          var url = this.endpoint;
          var params = this.helper.getLimitParams(limit, offset);
          params = params.set('sort', sort).set('direction', order);

          if (search) {
            params = params.set('search', search);
          }

          return this.http.get(url, {
            params: params
          });
        }
      }, {
        key: "insert",
        value: function insert(data) {
          var url = this.endpoint;
          return this.http.post(url, data);
        }
      }, {
        key: "updateById",
        value: function updateById(id, data) {
          var url = "".concat(this.endpoint, "/").concat(id);
          return this.http.put(url, data);
        }
      }, {
        key: "removeById",
        value: function removeById(id) {
          var url = "".concat(this.endpoint, "/").concat(id);
          return this.http["delete"](url);
        }
      }]);

      return KriteriaService;
    }();

    KriteriaService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _helpers_service__WEBPACK_IMPORTED_MODULE_2__["HelpersService"]
      }];
    };

    KriteriaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], KriteriaService);
    /***/
  },

  /***/
  "./src/app/services/pengguna.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/pengguna.service.ts ***!
    \**********************************************/

  /*! exports provided: PenggunaService */

  /***/
  function srcAppServicesPenggunaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PenggunaService", function () {
      return PenggunaService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _helpers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./helpers.service */
    "./src/app/services/helpers.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PenggunaService = /*#__PURE__*/function () {
      function PenggunaService(http, helper) {
        _classCallCheck(this, PenggunaService);

        this.http = http;
        this.helper = helper;
        this.endpoint = '/api/user';
      }

      _createClass(PenggunaService, [{
        key: "getAll",
        value: function getAll() {
          var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var sort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var limit = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
          var url = this.endpoint;
          var params = this.helper.getLimitParams(limit, offset);
          params = params.set('sort', sort).set('direction', order);

          if (search) {
            params = params.set('search', search);
          }

          return this.http.get(url, {
            params: params
          });
        }
      }, {
        key: "insert",
        value: function insert(data) {
          var url = this.endpoint;
          data.email = data.email.toLowerCase();
          return this.http.post(url, data);
        }
      }, {
        key: "updateById",
        value: function updateById(id, data) {
          var url = "".concat(this.endpoint, "/").concat(id);
          data.email = data.email.toLowerCase();
          return this.http.put(url, data);
        }
      }, {
        key: "removeById",
        value: function removeById(id) {
          var url = "".concat(this.endpoint, "/").concat(id);
          return this.http["delete"](url);
        }
      }]);

      return PenggunaService;
    }();

    PenggunaService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _helpers_service__WEBPACK_IMPORTED_MODULE_1__["HelpersService"]
      }];
    };

    PenggunaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    })], PenggunaService);
    /***/
  },

  /***/
  "./src/app/services/peran.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/peran.service.ts ***!
    \*******************************************/

  /*! exports provided: PeranService */

  /***/
  function srcAppServicesPeranServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeranService", function () {
      return PeranService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _helpers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./helpers.service */
    "./src/app/services/helpers.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PeranService = /*#__PURE__*/function () {
      function PeranService(http, helper) {
        _classCallCheck(this, PeranService);

        this.http = http;
        this.helper = helper;
        this.endpoint = '/api/role';
      }

      _createClass(PeranService, [{
        key: "getAll",
        value: function getAll() {
          var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var sort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var limit = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
          var url = this.endpoint;
          var params = this.helper.getLimitParams(limit, offset);
          params = params.set('sort', sort).set('direction', order);

          if (search) {
            params = params.set('search', search);
          }

          return this.http.get(url, {
            params: params
          });
        }
      }, {
        key: "insert",
        value: function insert(data) {
          var url = this.endpoint;
          return this.http.post(url, data);
        }
      }, {
        key: "updateById",
        value: function updateById(id, data) {
          var url = "".concat(this.endpoint, "/").concat(id);
          return this.http.put(url, data);
        }
      }, {
        key: "removeById",
        value: function removeById(id) {
          var url = "".concat(this.endpoint, "/").concat(id);
          return this.http["delete"](url);
        }
      }]);

      return PeranService;
    }();

    PeranService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _helpers_service__WEBPACK_IMPORTED_MODULE_1__["HelpersService"]
      }];
    };

    PeranService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    })], PeranService);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js"); // tslint:disable-next-line: max-line-length


    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"]],
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      host: 'http://localhost',
      port: 3000
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/mmdiyul/project/moora/client/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map