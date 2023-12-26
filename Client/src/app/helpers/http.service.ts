import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // constructor(private http: HttpClient) { }

  // get<T>(url: string): Observable<T> {
  //   return this.http.get<T>(`${environment.baseUrl + url}`);
  // }

  // getWithParams<T>(url: string, params: HttpParams): Observable<T> {
  //   return this.http.get<T>(`${environment.baseUrl + url}`, { params: params });
  // }

  // postWithHeader<T>(url: string, data: any, headers: HttpHeaders): Observable<T> {
  //   return this.http.post<T>(`${url}`, data, { headers: headers });
  // }

  // post<T>(data: any, url: string): Observable<T> {
  //   return this.http.post<T>(`${environment.baseUrl + url}`, data);
  // }

  // put<T>(id: any, data: any, url: string): Observable<T> {
  //   return this.http.put<T>(`${environment.baseUrl + url + '/' + id}`, data);
  // }

  // delete<T>(id: any, url: string): Observable<T> {
  //   const endpointUrl = `${environment.baseUrl + url}/${id}`;
  //   return this.http.delete<T>(endpointUrl);
  // }

  // getExternal<T>(url: string): Observable<T> {
  //   return this.http.get<T>(`${url}`);
  // }

  // uploader(formData: FormData, url: string) {
  //   const uploadReq = new HttpRequest('POST', `${environment.baseUrl}${url}`, formData, {
  //     reportProgress: true,
  //   });
  //   return this.http.request(uploadReq);
  // }

  // getFile(url: string) {
  //   return this.http.get(`${environment.baseUrl + url}`, { responseType: "blob" });
  // }

  // getLocal<T>(url: string): Observable<T> {
  //   return this.http.get<T>(`${url}`);
  // }

  // download(data: any, url: string) {
  //   return this.http.post(`${environment.baseUrl + url}`, data, { responseType: 'blob' });
  // }
}
