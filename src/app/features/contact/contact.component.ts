import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageHeaderComponent } from '../common/page-header/page-header.component';
import { DividerComponent } from '../common/divider/divider.component';
import { SubHeadingComponent } from '../common/sub-heading/sub-heading.component';
import { PageWrapperComponent } from '../common/page-wrapper/page-wrapper.component';

@Component({
  selector: 'kyp-contact',
  imports: [CommonModule, PageHeaderComponent, DividerComponent, SubHeadingComponent, PageWrapperComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  items = [{contactType: 'Email', contactDetails: 'email@email.com'}, {contactType: 'Phone', contactDetails: '888-111-1111'}]
}
