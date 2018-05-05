import { Component } from '@angular/core';

import { UploadVideoPage } from '../uploadvideo/uploadvideo';
import { FollowPage } from '../follow/follow';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = UploadVideoPage;
  tab3Root = FollowPage;

  constructor() {

  }
}
