import { PenggunaAPI, Pengguna } from './pengguna';
import { HelpersService } from './helpers.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PenggunaService {

  constructor(
    private http: HttpClient,
    private helper: HelpersService
  ) { }

  endpoint = '/api/user';
  getAll(search= '', sort= null, order= null, offset= 0, limit= 0) {
    const url = this.endpoint;
    let params = this.helper.getLimitParams(limit, offset);
    params = params.set('sort', sort).set('direction', order);
    if (search) {
      params = params.set('search', search);
    }
    return this.http.get<PenggunaAPI>(url, {params});
  }

  insert(data: Pengguna) {
    const url = this.endpoint;
    data.email = data.email.toLowerCase();
    return this.http.post<Pengguna>(url, data);
  }

  updateById(id: string, data: Pengguna) {
    const url = `${this.endpoint}/${id}`;
    data.email = data.email.toLowerCase();
    return this.http.put<Pengguna>(url, data);
  }

  removeById(id: string) {
    const url = `${this.endpoint}/${id}`;
    return this.http.delete<Pengguna>(url);
  }
}
