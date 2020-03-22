import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Smartphone } from '../model/smartphone.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpResponse } from '../model/http-response.model';


@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {

  constructor(private http: HttpClient) { }

  list(): Observable<Smartphone[]> {
    return this.http.get<HttpResponse>('/api/smartphones')
      .pipe(
        map(response => response._embedded.smartphones)
      );
  }

  get(href: string): Observable<Smartphone> {
    return this.http.get<Smartphone>(href);
  }

}
