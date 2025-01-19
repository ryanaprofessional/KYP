import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

export type CollapsibleItems = {
  label: string; 
  subLabel: string; 
  text: string; 
  isOpen?: boolean,
  seeDetailsLink?: string
}
@Component({
  selector: 'kyp-collapsible',
  imports: [CommonModule, MatIconModule],
  templateUrl: './collapsible.component.html',
  styleUrl: './collapsible.component.scss'
})
export class CollapsibleComponent {

  @Input() items: CollapsibleItems[] = [];

  togglePanel(item: any) {
    item.isOpen = !item.isOpen;
  }
}
