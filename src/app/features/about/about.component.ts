import { Component } from '@angular/core';
import { ExecutiveCommitteeComponent } from '../executive-committee/executive-committee.component';
import { SubHeadingComponent } from '../common/sub-heading/sub-heading.component';
import { VisionCommitteeComponent } from '../vision-committee/vision-committee.component';
import { DividerComponent } from '../common/divider/divider.component';
import { ButtonComponent } from '../common/button/button.component';
import { PageWrapperComponent } from '../common/page-wrapper/page-wrapper.component';
import { FooterComponent } from '../footer/footer.component';
import { ASSETS_URL } from '../../data/assets';
import { LogoComponent } from '../common/logo/logo.component';

@Component({
  selector: 'kyp-about',
  imports: [ExecutiveCommitteeComponent, SubHeadingComponent, VisionCommitteeComponent, DividerComponent, ButtonComponent, PageWrapperComponent, FooterComponent, LogoComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  // need to update to use cloudfront
 private bylawPdfUrl = `${ASSETS_URL}KentuckyPartyBylaws.pdf`;
 private platformPdfUrl = `${ASSETS_URL}KentuckyPartyPlatform.pdf`;

 openPlatformPdf(): void { 
    window.open(this.platformPdfUrl, "_blank");
}

openBylawsPdf(): void { 
  window.open(this.bylawPdfUrl, "_blank");
}

}
