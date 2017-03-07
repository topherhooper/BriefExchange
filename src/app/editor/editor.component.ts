import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {Citation} from '../citations/citation';
import {CitationService} from '../citations/citation.service';

declare var tinymce: any;

@Component({
  selector: 'simple-tiny',
  templateUrl: './editor.component.html',
  providers: [CitationService]
})


export class EditorComponent implements AfterViewInit, OnDestroy {
  citations: Citation[]
  selectedCitation: Citation
  @Input() elementId: String;
  @Output() onEditorKeyup = new EventEmitter<any>();

  editor;

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

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table'],
      skin_url: 'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.addButton('smallcaps', {
          title: 'Smallcaps',
          icon: 'forecolor',
          onclick: function (evt) {
            editor.focus();
            editor.undoManager.beforeChange();//Preserve highlighted area for undo
            editor.formatter.toggle('smallcaps');
            editor.undoManager.add();//Add an undo point
          },
          onPostRender: function () {
            var ctrl = this;
            editor.on('NodeChange', function (e) {
              //Set the state of the smallcaps button to match the state of the selected text.
              ctrl.active(editor.formatter.match('smallcaps'));
            });
          }
        });
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

  createNewCitation(citation_client) {
    var citation: Citation = {
      name: '',
      citation_client: citation_client,
      citation_fixed: ''
    };

    // By default, a newly-created citation will have the selected state.
    this.addCitation(citation);
  }

  addCitation = (citation: Citation) => {
    this.citations.push(citation);
    return this.citations;
  }

  openCheckout(name: string, amount: number) {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_live_wmonvJiL1mkU14vAZa2J8Xy8',
      locale: 'auto',
      token: function (token: any) {}
    });
    handler.open({name: name, amount: amount});

  }
}
