import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Smartphone } from './smartphone.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface HttpResponse {
  _embedded: {
    smartphones: Smartphone[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  list(): Observable<Smartphone[]> {
    return this.http.get<HttpResponse>('/api/smartphones')
      .pipe(
        map(response => response._embedded.smartphones)
      );
  }

  query(q: string): Observable<Smartphone[]> {
    return this.http.get<HttpResponse>(`/api/smartphones/search/query?model=${q}&code=${q}&brand=${q}`)
      .pipe(
        map(response => response._embedded.smartphones)
      );
  }

  get(href: string): Observable<Smartphone> {
    return this.http.get<Smartphone>(href);
  }

  create(smartphone: Smartphone): Observable<Smartphone> {
    return this.http.post<Smartphone>('/api/smartphones', smartphone, this.httpOptions);
  }

  delete(href: string): Observable<Smartphone> {
    return this.http.delete<Smartphone>(href);
  }
}
