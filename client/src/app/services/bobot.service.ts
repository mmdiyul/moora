import { BobotAPI, Bobot } from './bobot';
import { HelpersService } from './helpers.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BobotService {

  constructor(
    private http: HttpClient,
    private helper: HelpersService
  ) { }

  endpoint = '/api/bobotKriteria';
  getAll(search= '', sort= null, order= null, offset= 0, limit= 0) {
    const url = this.endpoint;
    let params = this.helper.getLimitParams(limit, offset);
    params = params.set('sort', sort).set('direction', order);
    if (search) {
      params = params.set('search', search);
    }
    return this.http.get<BobotAPI>(url, {params});
  }

  insert(data: Bobot) {
    const url = this.endpoint;
    return this.http.post<Bobot>(url, data);
  }

  updateById(id: string, data: Bobot) {
    const url = `${this.endpoint}/${id}`;
    return this.http.put<Bobot>(url, data);
  }

  removeById(id: string) {
    const url = `${this.endpoint}/${id}`;
    return this.http.delete<Bobot>(url);
  }
}
