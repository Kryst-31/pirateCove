import { Injectable } from '@angular/core';
import { Router, UrlSerializer, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlListenerService {

  bannerNames: {[key: string]: string} = {
    "home": "Home",
    "menu": "Menu",
    "dungeon-generator": "Dungeon Generator"
  }

  constructor(private router: Router, private serializer: UrlSerializer) {}

  public getComponentName(event : NavigationEnd): string {
    const parentPath = event.url.split("/")[1]
    return (parentPath in this.bannerNames ? this.bannerNames[parentPath] : "404 - Page Not Found")
  }

}
