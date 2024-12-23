import { Component, Input } from '@angular/core';

@Component({
  selector: 'kyp-sub-heading',
  imports: [],
  templateUrl: './sub-heading.component.html',
  styleUrl: './sub-heading.component.scss'
})
export class SubHeadingComponent {
@Input() text: string = 'KYP';
}
