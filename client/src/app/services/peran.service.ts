import { PeranAPI, Peran } from './peran';
import { HelpersService } from './helpers.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeranService {

  constructor(
    private http: HttpClient,
    private helper: HelpersService
  ) { }

  endpoint = '/api/role';
  getAll(search= '', sort= null, order= null, offset= 0, limit= 0) {
    const url = this.endpoint;
    let params = this.helper.getLimitParams(limit, offset);
    params = params.set('sort', sort).set('direction', order);
    if (search) {
      params = params.set('search', search);
    }
    return this.http.get<PeranAPI>(url, {params});
  }

  insert(data: Peran) {
    const url = this.endpoint;
    return this.http.post<Peran>(url, data);
  }

  updateById(id: string, data: Peran) {
    const url = `${this.endpoint}/${id}`;
    return this.http.put<Peran>(url, data);
  }

  removeById(id: string) {
    const url = `${this.endpoint}/${id}`;
    return this.http.delete<Peran>(url);
  }
}
