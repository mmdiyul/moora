import { KriteriaAPI, Kriteria } from './kriteria';
import { Injectable } from '@angular/core';
import { HelpersService } from './helpers.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KriteriaService {

  constructor(
    private http: HttpClient,
    private helper: HelpersService
  ) { }

  endpoint = '/api/kriteria';
  getAll(search= '', sort= null, order= null, offset= 0, limit= 0) {
    const url = this.endpoint;
    let params = this.helper.getLimitParams(limit, offset);
    params = params.set('sort', sort).set('direction', order);
    if (search) {
      params = params.set('search', search);
    }
    return this.http.get<KriteriaAPI>(url, {params});
  }

  insert(data: Kriteria) {
    const url = this.endpoint;
    return this.http.post<Kriteria>(url, data);
  }

  updateById(id: string, data: Kriteria) {
    const url = `${this.endpoint}/${id}`;
    return this.http.put<Kriteria>(url, data);
  }

  removeById(id: string) {
    const url = `${this.endpoint}/${id}`;
    return this.http.delete<Kriteria>(url);
  }
}
