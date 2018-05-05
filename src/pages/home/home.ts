import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  buttons:Array<String> = ["推荐","热点","科技","娱乐","游戏","体育","财经","汽车"];

  constructor(public navCtrl: NavController) {
  }
  ngOnInit(): void{
    this.slides.slidesPerView = "7";
  }
  ngAfterViewInit() {
    this.slides.freeMode = true;
    // this.slides.slidesPerView = "auto";
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }
  slideTap(item):void{
    console.log(item);
  }

}
