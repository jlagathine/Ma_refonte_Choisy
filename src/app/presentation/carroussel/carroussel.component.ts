import { Component, Input, OnInit } from '@angular/core';
import { lesImages } from '../image';
import { PresentationService } from '../presentation.service';

@Component({
  selector: 'app-carroussel',
  templateUrl: './carroussel.component.html',
  styleUrls: ['./carroussel.component.css']
})
export class CarrousselComponent implements OnInit {
  @Input() images: lesImages | undefined
  @Input() img : lesImages [] | undefined
  selectindex = 0;

  constructor(
    private presentationService: PresentationService
  ) { }

  ngOnInit(){
   this.images = this.presentationService.getImages();
  }

}
