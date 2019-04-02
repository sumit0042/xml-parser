import { Component, OnInit, ViewChild } from '@angular/core';
import { ReportService } from '../report.service';
import { Report } from '../report'

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.css']
})
export class DropzoneComponent implements OnInit {

  @ViewChild("fileInput") fileInput;

  ifUploaded: boolean;
  errorMsg: string;

  items: Report[];
  failed: boolean;
  
  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.ifUploaded = true;
    this.items = [];
    this.failed = false;
  }
  
  //passes file to reportservice for upload
  //fills items[] with response
  upload():void {
    let fi = this.fileInput.nativeElement;
    if (fi.files && fi.files[0]) {
        let fileToUpload = fi.files[0];
        this.reportService
            .upload(fileToUpload)
            .then(
              res => {
                this.ifUploaded = true;
                this.failed=false;
                this.items = res;
              }
            )
            .catch(err => {
              this.failed = true;
              this.ifUploaded = false;
            }
          );
    }
  }
}