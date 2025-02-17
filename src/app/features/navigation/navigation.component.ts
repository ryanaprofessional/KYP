import { Component} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { GO_FUND_ME_URL } from '../../data/gofundme';


@Component({
  selector: 'kyp-navigation',
  imports: [MatToolbarModule,
    MatButtonModule,
  RouterModule, MatMenuModule, MatIconModule, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  standalone: true
})
export class NavigationComponent { 
  menuItems = [
    { label: 'About', link: '/about' },
    { label: 'Contact', link: '/contact' },
    { label: 'Events', link: '/events' },
    { label: 'Resources', link: '/resources' },
    { label: 'Donate', link: GO_FUND_ME_URL, external: true,  },
  ];


  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
