import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabifComponent } from './shared/components/tabif/tabif.component';
import { NgtabforComponent } from './shared/components/ngtabfor/ngtabfor.component';
import { NgswitchtabComponent } from './shared/components/ngswitchtab/ngswitchtab.component';
 
@NgModule({
  declarations: [
    AppComponent,
    TabifComponent,
    NgtabforComponent,
    NgswitchtabComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
