import { Component, Input } from '@angular/core';

@Component({
  selector: 'kyp-coming-soon',
  imports: [],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss'
})
export class ComingSoonComponent {
  @Input() pageName: string = 'This page';
}
