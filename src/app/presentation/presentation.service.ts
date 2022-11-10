import { Injectable } from '@angular/core';
import { lesImages } from './image';
import { mesImages } from './list-image';

@Injectable()
export class PresentationService {

  constructor() { }

  getListImag(): lesImages[] {
    return mesImages;
  }

  getImageById(imageId : number): lesImages | undefined{
    return mesImages.find((image) => image.id == imageId) 
  }

  getImages():lesImages | undefined{
  return mesImages.find((image)=> image.image)
}
}
