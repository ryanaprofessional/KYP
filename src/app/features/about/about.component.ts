import { Component } from '@angular/core';
import { PageHeaderComponent } from '../common/page-header/page-header.component';
import { ExecutiveCommitteeComponent } from '../executive-committee/executive-committee.component';
import { SubHeadingComponent } from '../common/sub-heading/sub-heading.component';
import { VisionCommitteeComponent } from '../vision-committee/vision-committee.component';

@Component({
  selector: 'kyp-about',
  imports: [PageHeaderComponent, ExecutiveCommitteeComponent, SubHeadingComponent, VisionCommitteeComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {

}
