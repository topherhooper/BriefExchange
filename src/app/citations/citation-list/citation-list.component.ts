import {Component, OnInit} from '@angular/core';
import {Citation} from '../citation';
import {CitationService} from '../citation.service';
import {CitationDetailsComponent} from '../citation-details/citation-details.component';

@Component({
  selector: 'citation-list',
  templateUrl: './citation-list.component.html',
  styleUrls: ['./citation-list.component.css'],
  providers: [CitationService]
})

export class CitationListComponent implements OnInit {

  citations: Citation[]
  selectedCitation: Citation

  constructor(private citationService: CitationService) {
  }

  ngOnInit() {
    this.citationService
      .getCitations()
      .then((citations: Citation[]) => {
        this.citations = citations.map((citation) => {
          return citation;
        });
      });
  }

  private getIndexOfCitation = (citationId: String) => {
    return this.citations.findIndex((citation) => {
      return citation._id === citationId;
    });
  }

  selectCitation(citation: Citation) {
    this.selectedCitation = citation
  }

  createNewCitation() {
    var citation: Citation = {
      name: '',
      citation_client: '',
      citation_fixed: ''
    };

    // By default, a newly-created citation will have the selected state.
    this.selectCitation(citation);
  }

  deleteCitation = (citationId: String) => {
    var idx = this.getIndexOfCitation(citationId);
    if (idx !== -1) {
      this.citations.splice(idx, 1);
      this.selectCitation(null);
    }
    return this.citations;
  }

  addCitation = (citation: Citation) => {
    this.citations.push(citation);
    this.selectCitation(citation);
    return this.citations;
  }

  updateCitation = (citation: Citation) => {
    var idx = this.getIndexOfCitation(citation._id);
    if (idx !== -1) {
      this.citations[idx] = citation;
      this.selectCitation(citation);
    }
    return this.citations;
  }

  openCheckout(name: string, amount: number) {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_live_wmonvJiL1mkU14vAZa2J8Xy8',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });

    handler.open({name: name, amount: amount});

  }
}
