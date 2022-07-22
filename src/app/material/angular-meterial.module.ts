import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";


@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class AngularMaterialModule {}
