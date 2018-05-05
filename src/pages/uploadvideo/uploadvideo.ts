import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-about',
  templateUrl: 'uploadvideo.html'
})
export class UploadVideoPage {

  constructor(public navCtrl: NavController) {

  }

  goRegisterPage(){
    this.navCtrl.push(RegisterPage);
  }
}
