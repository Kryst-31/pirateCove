import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UrlListenerService } from './services/url-listener.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  activeNav: string = ''

  constructor(private router: Router, private urlListener: UrlListenerService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.activeNav = this.urlListener.getComponentName(val)
      }
    })
  }

  isButtonActive(component: string): string {
    const active = "bg-gray-900 text-white"
    const inactive = "text-gray-300 hover:bg-gray-700 hover:text-white"

    return (component == this.activeNav ? active : inactive)
  }
}
