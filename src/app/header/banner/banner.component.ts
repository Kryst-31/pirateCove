import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, UrlSerializer } from '@angular/router';
import { UrlListenerService } from '../services/url-listener.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent{

  banner: string = '';

  constructor(private router: Router, private serialize: UrlSerializer, private urlListener: UrlListenerService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.banner = this.urlListener.getComponentName(val)
      }
    })
  }
}
