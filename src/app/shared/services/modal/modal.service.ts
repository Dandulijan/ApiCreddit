import {
  ApplicationRef,
  Injectable,
  Type,
  createComponent,
  EnvironmentInjector,
  ComponentRef,
  ViewContainerRef,
  inject,
} from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private containerRef?: ViewContainerRef;
  private readonly _http = inject(HttpClient);

  constructor(
    private appRef: ApplicationRef,
    private envInjector: EnvironmentInjector
  ) {}

  registerContainer(container: ViewContainerRef) {
    this.containerRef = container;
  }

  /**
   * Generic GET method to fetch data
   */
  get<T>(url: string, params?: HttpParams, headers?: HttpHeaders) {
    return this._http.get<T>(url, { params, headers });
  }

  /**
   * Generic POST method to add new data
   */
  post<T>(url: string, body: T, headers?: HttpHeaders) {
    return this._http.post<T>(url, body, { headers });
  }

  /**
   * Generic PUT method to update data
   */
  put<T>(url: string, body: T, headers?: HttpHeaders) {
    return this._http.put<T>(url, body, { headers });
  }

  /**
   * Generic DELETE method to remove data
   */
  delete<T>(url: string, params?: HttpParams, headers?: HttpHeaders) {
    return this._http.delete<T>(url, { params, headers });
  }
}
