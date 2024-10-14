import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ToyModel } from '../models/my-api/toy-model';
import { CategoryModel } from '../models/my-api/category-model';
import { ErrorHandlerService } from './error-handler.service';

const API_ENDPOINT = 'https://toystoreapi.appbuilder.dev';

@Injectable({
  providedIn: 'root'
})
export class MyAPIService {
  constructor(
    private http: HttpClient
  ) { }

  public getCategoryModelList(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(`${API_ENDPOINT}/api/Toys/categories`)
      .pipe(catchError(ErrorHandlerService.handleError<CategoryModel[]>('getCategoryModelList', [])));
  }

  public getToyModelList(categoryId: number): Observable<ToyModel[]> {
    const params = new HttpParams()
      .append('categoryId', categoryId);
    const options = {
      params,
    };
    return this.http.get<ToyModel[]>(`${API_ENDPOINT}/api/Toys/toysByCategoryID`, options)
      .pipe(catchError(ErrorHandlerService.handleError<ToyModel[]>('getToyModelList', [])));
  }

  public getToyModel(id: number): Observable<ToyModel | undefined> {
    if (!id) {
      return of(undefined);
    }
    return this.http.get<ToyModel | undefined>(`${API_ENDPOINT}/api/Toys/${id}`)
      .pipe(catchError(ErrorHandlerService.handleError<ToyModel | undefined>('getToyModel', undefined)));
  }
}
