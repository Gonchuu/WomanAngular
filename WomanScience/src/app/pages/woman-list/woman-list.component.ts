import { Component, OnInit } from '@angular/core';
import { IWoman } from './models/woman.models';
import { womans } from './woman-list.config';

@Component({
  selector: 'app-woman-list',
  templateUrl: './woman-list.component.html',
  styleUrls: ['./woman-list.component.scss']
})
export class WomanListComponent implements OnInit {

  public womans: IWoman[] = womans as IWoman[];

  constructor() { }

  ngOnInit(): void {
  }

}
