import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../../core/services/photo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-image-done',
  templateUrl: './image-done.component.html',
  styleUrls: ['./image-done.component.scss'],
})
export class ImageDoneComponent implements OnInit {
  imageSrc = 'assets/icon/hey.png';
  source = 'assets/icon/royalty.png';
  page = 'take';
  constructor(public photo: PhotoService, private router: Router) {}

  ngOnInit() {}

  async takePhoto() {
    const res = await this.photo.addNewToGallery();
    if (this.photo.selectedImage) {
      this.page = 'success';
    } else {
      this.page = 'fail';
    }
  }
  retake() {
    this.page = 'take';
  }
  next() {
    this.router.navigate(['/register/royal-setup']);
  }
}
