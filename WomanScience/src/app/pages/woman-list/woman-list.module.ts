import { RouterModule } from '@angular/router';
import { WomanComponent } from './components/woman/woman.component';
import { WomanListComponent } from './woman-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WomanListComponent,
    WomanComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class WomanListModule { }
