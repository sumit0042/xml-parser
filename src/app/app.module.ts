import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule} from './app-routing/app-routing.module'

import { AppComponent } from './app.component';
import { DropzoneComponent}  from './dropzone/dropzone.component';
import { ReportsComponent}  from './reports/reports.component';
import { ReportService} from './report.service';
import { ExpsComponent } from './exps/exps.component';


@NgModule({
  declarations: [
    AppComponent,
    DropzoneComponent,
    ReportsComponent,
    ExpsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
