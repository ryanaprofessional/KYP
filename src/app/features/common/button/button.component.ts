// button.component.ts
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'kyp-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: '/button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = 'Click';
  @Input() disabled: boolean = false;
  @Output() buttonClick = new EventEmitter<void>();

  handleClick(): void {
    if (!this.disabled) {
      this.buttonClick.emit();
    }
  }
}
