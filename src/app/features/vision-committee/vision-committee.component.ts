import { Component } from '@angular/core';
import { CardComponent } from '../common/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'kyp-vision-committee',
  imports: [CardComponent, CommonModule],
  templateUrl: './vision-committee.component.html',
  styleUrl: './vision-committee.component.scss'
})
export class VisionCommitteeComponent {
  items = [{name: 'Chris Campbell', content: 'Chair', imageUrl: ''},
    {name: 'Alexin Hunter', content: 'Vice Chair', imageUrl: ''}
   ]
}
