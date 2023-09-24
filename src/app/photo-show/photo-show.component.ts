import { Component } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css'],
})
export class PhotoShowComponent {
  photoUrl = '';
  constructor(private photoService: PhotosService) {
    this.fetchPhoto();
  }

  onClick() {
    this.fetchPhoto();
  }
  fetchPhoto() {
    this.photoService.getPhoto().subscribe((response) => {
      console.log(response.urls.regular);
      this.photoUrl = response.urls.regular;
    });
  }
}
