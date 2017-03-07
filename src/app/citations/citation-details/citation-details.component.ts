import {Component, Input} from '@angular/core';
import {Citation} from '../citation';
import {CitationService} from '../citation.service';

@Component({
  selector: 'citation-details',
  templateUrl: './citation-details.component.html',
  styleUrls: ['./citation-details.component.css']
})

export class CitationDetailsComponent {

  @Input()
  citation: Citation;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor(private citationService: CitationService) {
  }

  createCitation(citation: Citation) {
    this.citationService.createCitation(citation).then((newCitation: Citation) => {
      this.createHandler(newCitation);
    });
  }

  updateCitation(citation: Citation): void {
    this.citationService.updateCitation(citation).then((updatedCitation: Citation) => {
      this.updateHandler(updatedCitation);
    });
  }

  deleteCitation(citationId: String): void {
    this.citationService.deleteCitation(citationId).then((deletedCitationId: String) => {
      this.deleteHandler(deletedCitationId);
    });
  }

}

