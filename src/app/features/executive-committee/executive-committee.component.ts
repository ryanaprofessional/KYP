import { Component } from '@angular/core';
import { CardComponent } from '../common/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'kyp-executive-committee',
  imports: [CardComponent, CommonModule],
  templateUrl: './executive-committee.component.html',
  styleUrl: './executive-committee.component.scss'
})
export class ExecutiveCommitteeComponent {
 items = [{name: 'Geoff Sebesta', content: 'Chair', imageUrl: ''},
  {name: 'Evy Tomboly', content: 'Vice Chair', imageUrl: ''},
  {name: 'Geoff Young', content: 'Treasurer', imageUrl: ''},
  {name: 'Ryan Anderson', content: 'Secretary', imageUrl: ''},
  {name: 'Shauna Rudd', content: 'Committee Member', imageUrl: ''},
  {name: 'Mikael Malone', content: 'Committee Member', imageUrl: ''},
  {name: 'Riley Kelly', content: 'Committee Member', imageUrl: ''}
 ]
}
