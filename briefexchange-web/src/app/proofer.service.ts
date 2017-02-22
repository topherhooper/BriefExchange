import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Proofer} from './proofer';

@Injectable()
export class ProoferService {
  private proofersUrl = 'api/proofers';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  update(proofer: Proofer): Promise<Proofer> {
    const url = `${this.proofersUrl}/${proofer.id}`;
    return this.http
      .put(url, JSON.stringify(proofer), {headers: this.headers})
      .toPromise()
      .then(() => proofer)
      .catch(this.handleError);
  }

  create(name: string): Promise<Proofer> {
    return this.http
      .post(this.proofersUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.proofersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  getProofers(): Promise<Proofer[]> {
    return this.http.get(this.proofersUrl)
      .toPromise()
      .then(response => response.json().data as Proofer[])
      .catch(this.handleError);
  }

  getProofer(id: number): Promise<Proofer> {
    const url = `${this.proofersUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Proofer)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
