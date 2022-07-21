import { Component, Input, OnInit } from '@angular/core';
import { IWoman } from '../../models/woman.models';

@Component({
  selector: 'app-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.scss']
})
export class WomanComponent implements OnInit {

  @Input() public woman?: IWoman;
  @Input() public canDelete: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
