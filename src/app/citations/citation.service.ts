import { Injectable } from '@angular/core';
import { Citation } from './citation';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CitationService {
    private citationsUrl = '/api/citations';

    constructor (private http: Http) {}

    // get("/api/citations")
    getCitations(): Promise<Citation[]> {
      return this.http.get(this.citationsUrl)
                 .toPromise()
                 .then(response => response.json() as Citation[])
                 .catch(this.handleError);
    }

    // post("/api/citations")
    createCitation(newCitation: Citation): Promise<Citation> {
      return this.http.post(this.citationsUrl, newCitation)
                 .toPromise()
                 .then(response => response.json() as Citation)
                 .catch(this.handleError);
    }

    // get("/api/citations/:id") endpoint not used by Angular app

    // delete("/api/citations/:id")
    deleteCitation(delCitationId: String): Promise<String> {
      return this.http.delete(this.citationsUrl + '/' + delCitationId)
                 .toPromise()
                 .then(response => response.json() as String)
                 .catch(this.handleError);
    }

    // put("/api/citations/:id")
    updateCitation(putCitation: Citation): Promise<Citation> {
      var putUrl = this.citationsUrl + '/' + putCitation._id;
      return this.http.put(putUrl, putCitation)
                 .toPromise()
                 .then(response => response.json() as Citation)
                 .catch(this.handleError);
    }

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}
