import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { WomanDetailComponent } from './pages/woman-detail/woman-detail.component';
import { WomanDetailModule } from './pages/woman-detail/woman-detail.module';
import { WomanListModule } from './pages/woman-list/woman-list.module';
import { FormComponent } from './shared/components/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
