import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})



export class DataService {
  constructor(private http: HttpClient) { }

  ngsavedata(form: any) {
    return this.http.post('/api/ng', form);
  }
  jssavedata(form: any) {
    return this.post('/api/js', form);
  }

  nggetdata() {
    return this.get('/api/ng');
  }

  jsgetdata() {
    return this.get('/api/js');
  }

  getHeaders() {
    let opt: any;
    const headers = new HttpHeaders({ 'content-type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' });
    opt = { headers };
    return opt;
  }

  _get(method, url, data?: any): Observable<any> {
    const opt = this.getHeaders();
    opt.params = opt.body = data;
    return this.http[method](url, opt).pipe(catchError((err: any) => {
      console.log(err);
      throw typeof err.error === 'string' && err.status !== 404 ? err.error : err.statusText;
    }));
  }

  _save(method, url, data): Observable<any> {
    const opt = this.getHeaders();
    return this.http[method](url, data, opt).pipe(catchError((err: any) => {
      console.log(err);
      throw typeof err.error === 'string' && err.status !== 404 ? err.error : err.statusText;
    }));
  }

  get(url: string, params?: any): Observable<any> {
    return this._get('get', url, params);
  }

  post(url: string, data: any): Observable<any> {
    return this._save('post', url, data);
  }
}
