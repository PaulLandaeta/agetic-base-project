import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Ingresos } from '../models';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';
import { User } from '../models/user.model';

@Injectable()
export class IngresosService {
  constructor (
    private apiService: ApiService,
    private userService: UserService
  ) {}


  async get(): Promise<Observable<Ingresos>> {
    const user = await this.userService.getCurrentUser();
    return this.apiService.get('/ingresos/user' + user.id)
      .pipe(map(data => data.ingreso));
  }
  /*
  save(article): Observable<Article> {
    // If we're updating an existing article
    if (article.slug) {
      return this.apiService.put('/articles/' + article.slug, {article: article})
        .pipe(map(data => data.article));

    // Otherwise, create a new article
    } else {
      return this.apiService.post('/articles/', {article: article})
        .pipe(map(data => data.article));
    }
  }*/
}
