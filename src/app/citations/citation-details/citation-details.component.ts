import {
  Component, Input,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Output
} from '@angular/core';
import {Citation} from '../citation';
import {CitationService} from '../citation.service';
declare var tinymce: any;
@Component({
  selector: 'citation-details',
  templateUrl: './citation-details.component.html',
  styleUrls: ['./citation-details.component.css']
})

export class CitationDetailsComponent implements AfterViewInit, OnDestroy {
  @Input() elementId: String;

  @Output() onEditorKeyup = new EventEmitter<any>();

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

  editor;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table'],
      skin_url: 'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
      },
    });
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

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

}

