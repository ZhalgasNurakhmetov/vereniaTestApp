import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProjectList} from '../../../core/project-list.model';

@Injectable()
export class HomePageApi {

  constructor(
    private http: HttpClient,
  ) { }

  getProjectList(searchText: string): Observable<ProjectList> {
    return this.http.get<ProjectList>('https://api.github.com/search/repositories', {
      params: {
        q: searchText,
      }
    });
  }
}
