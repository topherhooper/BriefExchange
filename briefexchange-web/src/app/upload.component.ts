import {Component} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './upload.component.html',
    styleUrls:['./upload.component.css'],
})
export class UploadComponent {
    public uploader: FileUploader = new FileUploader({url: 'http://localhost:3002/upload'});
}
