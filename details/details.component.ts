import { Component, OnInit } from '@angular/core';
import { Report} from '../report'
import { ReportService} from '../report.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  items: Report[];
  
  constructor( private reportService:ReportService ) {}

  getReports():void{
    this.items = this.reportService.getReports();
  }

  ngOnInit() {
    this.getReports();
    //this.reportService.testCors();
  }

}

