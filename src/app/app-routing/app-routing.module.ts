import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import {ReportsComponent} from './../reports/reports.component';
import {DropzoneComponent} from './../dropzone/dropzone.component'
import { ExpsComponent } from '../exps/exps.component';

const routes: Routes = [
  { path: '', redirectTo: '/dropzone', pathMatch: 'full' },
  { path: 'dropzone', component: DropzoneComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'exps', component: ExpsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
