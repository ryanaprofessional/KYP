import { Component } from '@angular/core';
import { ASSETS_URL } from '../../../data/assets';
import { GO_FUND_ME_URL } from '../../../data/gofundme';

@Component({
  selector: 'kyp-logo',
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
 public logoUrl = `${ASSETS_URL}logo.png`
  public goFundMeUrl = `${GO_FUND_ME_URL}`
}
