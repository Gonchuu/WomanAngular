import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-woman-list',
  templateUrl: './woman-list.component.html',
  styleUrls: ['./woman-list.component.scss']
})
export class WomanListComponent implements OnInit {

  public womans: IWoman[]

  constructor() { }

  ngOnInit(): void {
  }

}
