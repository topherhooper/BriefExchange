import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';

// Import rxjs map operator
import 'rxjs/add/operator/map';

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'upload',
  templateUrl: 'upload.component.html',
  styleUrls: ['upload.component.css'],
})
export class UploadComponent implements OnInit {
  title = 'app works!';
  bluebookUserName: string = '';
  cartStatus: string = '';
  orderStatus: string = '';
  citeStatus: string = '';
  closedStatus: string = '';

  // Link to our api, pointing to localhost
  API = 'http://express:3000';

  // Declare empty list of people
  citations: any[] = [];

  constructor(private http: Http) {
  }

  // Angular 2 Life Cycle event when component has been initialized
  ngOnInit() {
    this.getAllCites();
  }

  // Add one person to the API
  addCiteCart(citation, clientUserName) {
    this.http.post(`${this.API}/citations`, {
      citation,
      clientUserName,
      bluebookUserName: this.bluebookUserName,
      cartStatus: this.cartStatus,
      orderStatus: this.orderStatus,
      citeStatus: this.citeStatus,
      closedStatus: this.closedStatus
    })
      .map(res => res.json())
      .subscribe(() => {
        this.getAllCites();
      }, error => console.log(error))
  }

  // Get all users from the API
  getAllCites() {
    this.http.get(`${this.API}/citations`)
      .map(res => res.json())
      .subscribe(citations => {
        console.log(citations)
        this.citations = citations
      }, error => console.log(error))
  }
}
