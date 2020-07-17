import { Component } from '@angular/core';
import { ImageList } from './flex-slides/image-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FlexSlider';

  ImageList: ImageList[] = [
    {imageUrl:"http://themes.2the.me/Semantic/1.1.4/Site/assets/images/section-2.jpg"},
    {imageUrl:"http://themes.2the.me/Semantic/1.1.4/Site/assets/images/section-9.jpg"},
    {imageUrl:"http://themes.2the.me/Semantic/1.1.4/Site/assets/images/section-8.jpg"},
    {imageUrl:"https://uathlonstorage.blob.core.windows.net/uathlonblobfiles/VideosThumbnail/99910242-25d2-40ce-a1ea-e5bb09a78a69.png"},
    {imageUrl:"https://uathlonstorage.blob.core.windows.net/uathlonblobfiles/VideosThumbnail/8cf2757b-7b5b-4a4a-a1c1-e3bc04cb87c3.png"}    
  ];

  ngOnInit(): void {    
  }
}
