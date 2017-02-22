/**
 * Created by chooper on 2/16/17.
 */
import {Component, OnInit} from '@angular/core';
import {Router}            from '@angular/router';
import {Observable}        from 'rxjs/Observable';
import {Subject}           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {ProoferSearchService} from './proofer-search.service';
import {Proofer} from './proofer';

@Component({
  moduleId: module.id,
  selector: 'proofer-search',
  templateUrl: './proofer-search.component.html',
  styleUrls: ['./proofer-search.component.css'],
  providers: [ProoferSearchService]
})
export class ProoferSearchComponent implements OnInit {
  proofers: Observable<Proofer[]>;
  private searchTerms = new Subject<string>();

  constructor(private prooferSearchService: ProoferSearchService,
              private router: Router) {
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.proofers = this.searchTerms
      .debounceTime(100)        // wait 100ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.prooferSearchService.search(term)
        // or the observable of empty proofers if there was no search term
        : Observable.of<Proofer[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Proofer[]>([]);
      });
  }

  gotoDetail(proofer: Proofer): void {
    let link = ['/detail', proofer.id];
    this.router.navigate(link);
  }
}
