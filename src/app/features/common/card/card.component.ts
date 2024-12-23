import { Component, Input } from '@angular/core';

@Component({
  selector: 'kyp-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() imageUrl: string = '';
}
