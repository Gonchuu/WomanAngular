import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WomanListComponent } from './pages/woman-list/woman-list.component';
import { WomanComponent } from './pages/woman-list/components/woman/woman.component';

@NgModule({
  declarations: [
    AppComponent,
    WomanListComponent,
    WomanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
