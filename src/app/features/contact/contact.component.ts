import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageHeaderComponent } from '../common/page-header/page-header.component';

@Component({
  selector: 'kyp-contact',
  imports: [CommonModule, PageHeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  items = [{contactType: 'Email', contactDetails: 'email@email.com'}, {contactType: 'Phone', contactDetails: '888-111-1111'}]
}
