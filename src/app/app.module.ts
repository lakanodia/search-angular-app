import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HousingListComponent } from './housing-list/housing-list.component';
import { HousingDetailComponent } from './housing-detail/housing-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HousingListComponent,
    HousingDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
