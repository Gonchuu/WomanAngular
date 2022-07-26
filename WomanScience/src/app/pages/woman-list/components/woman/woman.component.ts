import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IWoman } from '../../models/woman.models';

@Component({
  selector: 'app-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.scss']
})
export class WomanComponent implements OnInit {

  @Input() public woman?: IWoman;
  @Input() public canDelete: boolean = false;
  @Output() public delete: EventEmitter<void> = new EventEmitter();

  public isSelected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onDelete() {
  this.delete.emit();
  }

  public onClick() {
    this.isSelected = !this.isSelected;
  }

}
