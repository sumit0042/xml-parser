import { AfterViewChecked, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ReportService } from '../report.service';
import { Report } from '../report';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit,AfterViewChecked {

  items: Array<string>;
  selectedItem:Array<Report>;
  modalData:Array<string>;

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;  

  constructor(private reportService:ReportService) { }

  ngOnInit() {
    this.reportService.getIimestamps().then(
      res => {
        this.items = res;
      }
    ).catch(err => console.log(err));
  }

  ngAfterViewChecked() {        
    this.scrollToBottom();        
  }

  //executed after click of an element from list of processed files
  onSelect(timestamp: string){
    this.reportService.getFile(timestamp).then(res => {
      this.selectedItem = res;
      this.ngAfterViewChecked();
    });
    this.reportService.getOriginalData(timestamp).then(res =>
      this.modalData = res
    );
  }

  scrollToBottom():void{
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { console.log(err) }
  }
}
