import { Component } from '@angular/core';
import { PageHeaderComponent } from '../common/page-header/page-header.component';
import { ExecutiveCommitteeComponent } from '../executive-committee/executive-committee.component';

@Component({
  selector: 'kyp-about',
  imports: [PageHeaderComponent, ExecutiveCommitteeComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {

}
