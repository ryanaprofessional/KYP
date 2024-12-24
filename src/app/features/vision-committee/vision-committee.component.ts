import { Component } from '@angular/core';
import { CardComponent } from '../common/card/card.component';
import { CommonModule } from '@angular/common';
import { SubHeadingComponent } from '../common/sub-heading/sub-heading.component';

@Component({
  selector: 'kyp-vision-committee',
  imports: [CardComponent, CommonModule, SubHeadingComponent],
  templateUrl: './vision-committee.component.html',
  styleUrl: './vision-committee.component.scss'
})
export class VisionCommitteeComponent {
  items = [{name: 'Chris Campbell', content: 'Chair', imageUrl: ''},
    {name: 'Alexin Hunter', content: 'Vice Chair', imageUrl: ''}
   ]
}
