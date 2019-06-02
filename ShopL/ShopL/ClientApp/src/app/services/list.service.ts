import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ListService {
  url = '/api/list/';
  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.url)
  }

  addItem(data) {
    return this.http.post(this.url, (data))
  }

  getItem(id) {
    return this.http.get(this.url, id)
  }

  updateItem(data) {
    return this.http.put(this.url,(data))
  }

  deleteItem(id) {
    return this.http.delete(this.url, id)
  }
}
