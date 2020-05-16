import { AlternatifAPI, Alternatif } from './alternatif';
import { HelpersService } from './helpers.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlternatifService {

  constructor(
    private http: HttpClient,
    private helper: HelpersService
  ) { }

  endpoint = '/api/alternatif';
  getAll(search= '', sort= null, order= null, offset= 0, limit= 0) {
    const url = this.endpoint;
    let params = this.helper.getLimitParams(limit, offset);
    params = params.set('sort', sort).set('direction', order);
    if (search) {
      params = params.set('search', search);
    }
    return this.http.get<AlternatifAPI>(url, {params});
  }

  insert(data: Alternatif) {
    const url = this.endpoint;
    return this.http.post<Alternatif>(url, data);
  }

  updateById(id: string, data: Alternatif) {
    const url = `${this.endpoint}/${id}`;
    return this.http.put<Alternatif>(url, data);
  }

  removeById(id: string) {
    const url = `${this.endpoint}/${id}`;
    return this.http.delete<Alternatif>(url);
  }
}
