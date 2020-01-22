import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

interface WikipediaResponse {
  query: {
    search: {
      title: string;
      snippet: string;
      pageid: number;
    }[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  baseUrl = `https://en.wikipedia.org/w/api.php`;

  constructor(private http: HttpClient) {}

  search(term: string) {
    const params = new HttpParams()
      .set('action', 'query')
      .set('format', 'json')
      .set('list', 'search')
      .set('utf8', '1')
      .set('srsearch', term)
      .set('origin', '*');

    return this.http
      .get<WikipediaResponse>(`${this.baseUrl}`, { params })
      .pipe(pluck('query', 'search'));
  }
}
