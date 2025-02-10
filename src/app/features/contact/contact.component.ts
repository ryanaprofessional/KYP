import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageHeaderComponent } from '../common/page-header/page-header.component';
import { PageWrapperComponent } from '../common/page-wrapper/page-wrapper.component';
import { LogoComponent } from '../common/logo/logo.component';

@Component({
  selector: 'kyp-contact',
  imports: [CommonModule, PageHeaderComponent, PageWrapperComponent, LogoComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  items = [{contactType: 'Email', contactDetails: 'thekentuckyparty@gmail.com'}]
    //, {contactType: 'Phone', contactDetails: '888-111-1111'}]
}
