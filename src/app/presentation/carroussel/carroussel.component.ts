import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { carouselImage } from '../carouselImage';
import { PresentationService } from '../presentation.service';

@Component({
  selector: 'app-carroussel',
  templateUrl: './carroussel.component.html',
  styleUrls: ['./carroussel.component.css'],
})
export class CarrousselComponent implements OnInit {
  images: carouselImage[];
  image: carouselImage | undefined;
  indexSelector: number = 0;
  indicator = true;
  controls = true;
  @Input() autoSlide = true;
  @Input() SlideInterval = 3000;

  constructor(
    private route: ActivatedRoute,
    private presentationService: PresentationService
  ) {}

  ngOnInit() {
    this.images = this.presentationService.getImage();

    const imageId: string | null = this.route.snapshot.paramMap.get('id');
    if (imageId) {
      this.image = this.presentationService.getImageById(+imageId);
    }

    if (this.indicator) {
      this.autoSlideImage();
    }
  }

  selectImage(i: number): void {
    this.indexSelector = i;
    console.log(i);
  }

  selectImagePrev(): void {
    if (this.indexSelector == 0) {
      this.indexSelector = this.images.length - 1;
    } else {
      this.indexSelector--;
    }
  }

  selectImageNext(): void {
    if (this.indexSelector === this.images.length - 1) {
      this.indexSelector = 0;
    } else {
      this.indexSelector++;
    }
  }

  intervalImage(): void {
    if (this.images) {
      setInterval(() => {
        this.images;
      }, 3000);
    }
  }

  autoSlideImage(): void {
    setInterval(() => {
      this.selectImageNext();
    }, this.SlideInterval);
  }
}
