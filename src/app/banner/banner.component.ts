import { Component } from '@angular/core';
import { NavigationEnd, Router, UrlSerializer } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent{

  bannerNames: {[key: string]: string} = {
    "home": "Home",
    "menu": "Menu",
    "dungeon-generator": "Dungeon Generator"
  }

  banner: string = '';

  constructor(private router: Router, private serialize: UrlSerializer) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        const parentPath = val.url.split("/")[1]
        this.banner = (parentPath in this.bannerNames) ? this.bannerNames[parentPath] : "404 - Page Not Found";
      }
    })
  }


}
