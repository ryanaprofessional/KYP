import { Component } from '@angular/core';
import { PageHeaderComponent } from '../common/page-header/page-header.component';
import { PageWrapperComponent } from '../common/page-wrapper/page-wrapper.component';
import { LogoComponent } from '../common/logo/logo.component';
import { ASSETS_URL } from '../../data/assets';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'kyp-resources',
  imports: [PageHeaderComponent, PageWrapperComponent, LogoComponent, CommonModule],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.scss'
})

export class ResourcesComponent {
  items = [
    {text: '2025/04', url: `${ASSETS_URL}Minutes/2025_4.pdf`},
    {text: '2025/03', url: `${ASSETS_URL}Minutes/2025_3.pdf`},
    {text: '2025/02', url: `${ASSETS_URL}Minutes/2025_2.pdf`},
    {text: '2025/01', url: `${ASSETS_URL}Minutes/2025_1.pdf`}]
}
