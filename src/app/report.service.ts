import { Injectable } from '@angular/core';
import {Report} from './report'
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ReportService {

  constructor(private http: Http) { }


  //get list of all timestamps from database
  getIimestamps(): Promise<Array<string>> {
    return this.http
      .get("http://localhost:8080/timestamps")
      .toPromise()
      .then((response) => {
       return response.json() as Array<string>;
      })
      .catch(this.handleError);
  }

  //get report of one file with timestamp as identifier
  getFile(timestamp: string): Promise<Array<Report>> {
    let url:string = "http://localhost:8080/";
    let lur = timestamp.match(/[0-9]/g).join("").toString();
    return this.http
      .get(url+lur)
      .toPromise()
      .then((response) => {
       return response.json() as Array<Report>;
      })
      .catch(this.handleError);
  }

  //upload file, returns generated report as list
  upload(file:any):Promise<Array<Report>>{
    let input = new FormData();
    input.append("file", file);
    return this.http
        .post("http://localhost:8080/upload", input)
        .toPromise()
        .then(response => {
            return response.json() as Array<Report>;
        })
        .catch(this.handleError)
  }

  // gets original file as list of string for each line
  getOriginalData(timeStamp: string){
    let url:string = "http://localhost:8080/files/";
    let lur = timeStamp.match(/[0-9]/g).join("").toString();
    return this.http
      .get(url+lur)
      .toPromise()
      .then((response) => {
       return response.json() as Array<string>;
      })
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
