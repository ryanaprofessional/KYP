import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'kyp-collapsible',
  imports: [CommonModule, MatIconModule],
  templateUrl: './collapsible.component.html',
  styleUrl: './collapsible.component.scss'
})
export class CollapsibleComponent {

  @Input() items: { label: string; subLabel: string; text: string; isOpen?: boolean }[] = [];

  togglePanel(item: any) {
    item.isOpen = !item.isOpen;
  }
}
