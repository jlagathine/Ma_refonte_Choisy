import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationService } from './presentation.service';
import { CarrousselComponent } from './carroussel/carroussel.component';



@NgModule({
  declarations: [CarrousselComponent],
  imports: [
    CommonModule
  ],
  exports: [CarrousselComponent],
  providers:[PresentationService]
})
export class PresentationModule { }
