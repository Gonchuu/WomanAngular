import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WomanDetailRoutingModule } from './woman-detail-routing.module';
import { WomanDetailComponent } from './woman-detail.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    WomanDetailComponent
  ],
  imports: [
    CommonModule,
    WomanDetailRoutingModule,
    RouterModule
  ]
})
export class WomanDetailModule { }
