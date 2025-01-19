import { Component } from '@angular/core';
import { PageHeaderComponent } from '../common/page-header/page-header.component';
import { ExecutiveCommitteeComponent } from '../executive-committee/executive-committee.component';
import { SubHeadingComponent } from '../common/sub-heading/sub-heading.component';
import { VisionCommitteeComponent } from '../vision-committee/vision-committee.component';
import { DividerComponent } from '../common/divider/divider.component';
import { ButtonComponent } from '../common/button/button.component';
import { PageWrapperComponent } from '../common/page-wrapper/page-wrapper.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'kyp-about',
  imports: [PageHeaderComponent, ExecutiveCommitteeComponent, SubHeadingComponent, VisionCommitteeComponent, DividerComponent, ButtonComponent, PageWrapperComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
 private pdfUrl = "https://kentuckyparty-assets.s3.us-east-2.amazonaws.com/KentuckyPartyBylaws.pdf";

 openPdf(pdfToOpen: "bylaws"): void { 
  if(pdfToOpen == "bylaws") {
    window.open(this.pdfUrl, "_blank");
  }
 }
}
