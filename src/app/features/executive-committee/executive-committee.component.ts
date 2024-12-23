import { Component } from '@angular/core';
import { CardComponent } from '../common/card/card.component';
import { CommonModule } from '@angular/common';
import { SubHeadingComponent } from '../common/sub-heading/sub-heading.component';

@Component({
  selector: 'kyp-executive-committee',
  imports: [CardComponent, CommonModule, SubHeadingComponent],
  templateUrl: './executive-committee.component.html',
  styleUrl: './executive-committee.component.scss'
})
export class ExecutiveCommitteeComponent {
 items = [{name: 'Geoff Young', content: 'Chair', imageUrl: ''},
  {name: 'Evy Tomboly', content: 'Vice Chair', imageUrl: ''},
  {name: 'Geoff Young', content: 'Treasurer', imageUrl: ''},
  {name: 'Ryan Anderson', content: 'Secretary', imageUrl: ''},
  {name: 'Shauna Rudd', content: 'Committee Member', imageUrl: ''},
  {name: 'Mikael Malone', content: 'Committee Member', imageUrl: ''}
 ]
}
