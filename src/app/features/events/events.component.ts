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
    { label: 'NATO Protest', subLabel: 'May 24th - Dayton', text: 'Mike Harbaugh is organizing a protest in Dayton against the NATO meeting there (!) to celebrate the thirtieth anniversary of bombing Yugoslavia (!!).   We are going to car pool up there and bring as many people as we can, as well as signs and hopefully puppets and other such accoutrements.' },
    { label: 'Annual Convention', subLabel: 'May 31st - First Christian Church - Berea', text: 'The Kentucky Party Annual Convention is where members come together to shape the direction of the organization for the upcoming year. Open to all members (and registered guests), the convention serves for discussing and voting on key issues, including amendments to the bylaws and updates to the party’s platform.  Members will collaborate on strategies and advance public participation across the Commonwealth. The convention will also feature the election of the Executive Committee, providing an opportunity for members to choose leadership that reflects the goals of the KYP.  Virtual attendance options will be available to ensure accessibility for all members' },
    { label: 'Center for Political Innovation Convention', subLabel: 'July 12th-17th - Chicago', text: 'CPI national convention, anti-imperialist rally in Chicago' }, 
  ];

  onContactButtonClick() {
    const url = `${window.location.origin}/contact`;
    window.open(url, '_blank');
  }
}