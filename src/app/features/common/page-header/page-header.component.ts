import { Component, Input } from '@angular/core';

@Component({
  selector: 'kyp-page-header',
  imports: [],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {
@Input() pageName: string = 'This page';
}
