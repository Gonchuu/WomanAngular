import { WomansService } from './../../core/services/womans/womans.service';
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

public currentWoman?: IWoman;

  constructor(
    private activatedRoute: ActivatedRoute,
    private womanService: WomansService
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const womanId = params['womanId'];
      this.womanService.getWomanByName(womanId).subscribe((woman) => {
        this.currentWoman = woman;
      });
    });
  }
}
