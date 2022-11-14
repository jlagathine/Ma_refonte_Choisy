import { Injectable } from '@angular/core';
import { carouselImage } from './carouselImage';
import { mesImages } from './images';

@Injectable()
export class PresentationService {

  constructor() { }

  getImage() : carouselImage[]{
  return mesImages;
  }

  getImageById(imageId:number) : carouselImage | undefined{
    return mesImages.find((image)=>image.id == imageId)
  }
}
