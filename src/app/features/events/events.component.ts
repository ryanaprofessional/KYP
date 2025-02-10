import { CommonModule } from '@angular/common';
import {Component, signal} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { PageHeaderComponent } from '../common/page-header/page-header.component';
import { CollapsibleComponent, CollapsibleItems } from '../common/collapsible/collapsible.component';
import { PageWrapperComponent } from '../common/page-wrapper/page-wrapper.component';
import { LogoComponent } from '../common/logo/logo.component';


@Component({
  selector: 'kyp-events',
  imports: [    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
  CommonModule, PageHeaderComponent,
  CollapsibleComponent, PageWrapperComponent, LogoComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  readonly panelOpenState = signal(false);

  items: CollapsibleItems[] = [
    { label: 'Common Work Items Meetings', subLabel: 'Recurring - Sundays at 430PM - Lexington KY or Winchester KY', text: 'The Common Work Item Meetup is a dynamic, collaborative space for us to work together on key initiatives and projects. These sessions are designed to foster creativity and allow participants to contribute their insights toward advancing our shared goals.  We will brainstorm, develop our platform in real time, and work on initiatives together. This is a chance to engage directly in meaningful, hands-on work for the party. Join us to contribute your expertise and help drive forward the impactful work that defines the Kentucky Party!'},
    { label: 'Annual Convention', subLabel: 'TBD May', text: 'The Kentucky Party Annual Convention is where members come together to shape the direction of the organization for the upcoming year. Open to all members (and registered guests), the convention serves for discussing and voting on key issues, including amendments to the bylaws and updates to the party’s platform.  Members will collaborate on strategies and advance public participation across the Commonwealth. The convention will also feature the election of the Executive Committee, providing an opportunity for members to choose leadership that reflects the goals of the KYP.  Virtual attendance options will be available to ensure accessibility for all members' },
  ];

  onContactButtonClick() {
    const url = `${window.location.origin}/contact`;
    window.open(url, '_blank');
  }
}