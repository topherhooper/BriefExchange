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
  @Input() client_id: string;
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
      formats: {smallcaps: {inline: 'span', 'classes': 'small-caps'}},
      content_css: 'css/editor.css',
      selector: 'textarea',
      toolbar: 'undo redo | styleselect | bold italic | link image | smallcaps',
      min_width: 700,
      min_height: 70,
      plugins: ['link', 'paste', 'table'],
      skin_url: 'assets/skins/lightgray',
      paste_enable_default_filters: false,
      paste_filter_drop: false,
      paste_retain_style_properties: "all",
      paste_merge_formats: false,
      setup: editor => {
        this.editor = editor;
        editor.addButton('smallcaps', {
          title: 'Smallcaps',
          icon: 'forecolor',
          onclick: function () {
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

  createNewCitation() {
    var citation: Citation = {
      citation_client: tinymce.activeEditor.getContent({format: 'raw'}),
      client_id: this.client_id,
      citation_worker: '',
      worker_id: '',
      status: ''
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
      token: function (token: any) {
      }
    });
    handler.open({name: name, amount: amount});

  }
}
