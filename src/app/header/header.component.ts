import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  activeNav: string = ''

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.activeNav = val.url.split("/")[1]
      }
    })
  }

  isButtonActive(component: string): string {
    const active = "bg-gray-900 text-white"
    const inactive = "text-gray-300 hover:bg-gray-700 hover:text-white"

    return (component == this.activeNav ? active : inactive)
  }
}
