import { Component } from '@angular/core';

@Component({
  selector: 'kyp-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  scrollToTopOfPage(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
