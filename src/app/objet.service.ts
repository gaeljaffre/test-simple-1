import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

const url = 'https://us-central1-telephone1-41de6.cloudfunctions.net/app/';

export interface Cat {
  name: string
}

@Injectable()
export class ObjetService {
  
  constructor(
      private http: HttpClient
    ) {}

  getTexte(): Observable<string> {
    return this.http.get<string>(url);
  }

/*
  getAllCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(url);
  }

  getCat(name: string): Observable<Cat> {
    return this.http.get<Cat>(url + name)
  }

  insertCat(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>(url, cat)
  }

  updateCat(cat: Cat): Observable<void> {
    return this.http.put<void>(
      url + cat.name,
      cat
    )
  }

  deleteCat(name: string) {
    return this.http.delete(url + name)
  }
*/

}
