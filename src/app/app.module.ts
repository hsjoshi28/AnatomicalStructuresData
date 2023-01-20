import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnatomicalStructureComponent } from './anatomical-structure/anatomical-structure.component';
import { HttpClientModule } from '@angular/common/http';
import { StructureItemComponent } from './structure-item/structure-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AnatomicalStructureComponent,
    StructureItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
