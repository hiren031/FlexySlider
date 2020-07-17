import { Component, OnInit, Input } from '@angular/core';
import { ImageList } from './image-list';

@Component({
  selector: 'app-flex-slides',
  templateUrl: './flex-slides.component.html',
  styleUrls: ['./flex-slides.component.css']
})
export class FlexSlidesComponent implements OnInit {
  @Input() ImageList: ImageList[];

  constructor() { }

  ngOnInit(): void {
  }

}
