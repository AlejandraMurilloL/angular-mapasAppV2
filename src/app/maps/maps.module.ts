import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MapScreenComponent } from './pages/map-screen/map-screen.component';



@NgModule({
  declarations: [
    MapScreenComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MapScreenComponent
  ]
})
export class MapsModule { }
