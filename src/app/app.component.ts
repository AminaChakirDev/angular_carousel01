import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  scrollToRight(e: any, carousel: any, carouselImg: any) {
    carousel.scrollLeft += carouselImg.width + 14;
  }

  scrollToLeft(e: any, carousel: any, carouselImg: any) {
    carousel.scrollLeft -= carouselImg.width + 14;
  }
}
