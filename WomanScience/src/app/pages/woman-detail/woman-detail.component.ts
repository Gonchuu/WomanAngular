import { IWoman } from './../woman-list/models/woman.models';
import { womans } from './../woman-list/woman-list.config';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-woman-detail',
  templateUrl: './woman-detail.component.html',
  styleUrls: ['./woman-detail.component.scss'],
})
export class WomanDetailComponent implements OnInit {

 public womans: IWoman[] = womans as IWoman[];
 public currentWoman?: IWoman;

  constructor(
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
  this.activatedRoute.params.subscribe((params) => {
     const womanId = params['womanId'];
     this.currentWoman = this.womans.find(woman => woman.id === womanId);
    });
  }
}
