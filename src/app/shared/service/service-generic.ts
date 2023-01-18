import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, tap } from 'rxjs';
import { environment } from '@environment/environment';
import { ErrorLogService } from '@shared/service/error-log.service';

@Injectable({
  providedIn: 'root',
})
export class ServiceGeneric {
  private httpClient = inject(HttpClient);
  private errorLogService = inject(ErrorLogService);

  private readonly basePath = environment.alphaVantageEndpoint;

  public get<T>(appUrl: string): Observable<T> {
    const path = `${this.basePath}${appUrl}`;
    return this.httpClient
      .get<T>(path)
      .pipe(
        map(
          (json: T) => this.fromServerModel<T>(json),
          catchError(tap((error) => this.errorLogService.logError(error)))
        )
      );
  }

  public add<T>(appUrl: string, data: T): Observable<unknown> {
    return this.httpClient
      .post(`${this.basePath}/${appUrl}`, this.toServerModel(data))
      .pipe(catchError(tap((error) => this.errorLogService.logError(error))));
  }

  public update<T>(appUrl: string, data: T): Observable<unknown> {
    return this.httpClient
      .put(`${this.basePath}/${appUrl}`, this.toServerModel(data))
      .pipe(catchError(tap((error) => this.errorLogService.logError(error))));
  }

  public delete(appUrl: string): Observable<unknown> {
    return this.httpClient
      .delete(`${this.basePath}/${appUrl}`)
      .pipe(catchError(tap((error) => this.errorLogService.logError(error))));
  }

  private toServerModel<T>(entity: T): unknown {
    return entity;
  }

  private fromServerModel<T>(json: unknown): T {
    return <T>json;
  }
}
