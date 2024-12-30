import { Component } from '@angular/core';
import { PageHeaderComponent } from '../common/page-header/page-header.component';
import { ExecutiveCommitteeComponent } from '../executive-committee/executive-committee.component';
import { SubHeadingComponent } from '../common/sub-heading/sub-heading.component';
import { VisionCommitteeComponent } from '../vision-committee/vision-committee.component';
import { DividerComponent } from '../common/divider/divider.component';
import { ButtonComponent } from '../common/button/button.component';
import { PageWrapperComponent } from '../common/page-wrapper/page-wrapper.component';
import { FooterComponent } from '../footer/footer.component';
import { ReadMoreComponent } from '../common/read-more/read-more.component';

@Component({
  selector: 'kyp-about',
  imports: [PageHeaderComponent, ExecutiveCommitteeComponent, SubHeadingComponent, VisionCommitteeComponent, DividerComponent, ButtonComponent, PageWrapperComponent, FooterComponent, ReadMoreComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
 private pdfUrl = "https://kentuckyparty-assets.s3.us-east-2.amazonaws.com/KentuckyPartyBylaws.pdf";

 public textForBylaws="Ready to see what the Kentucky Party is all about? These bylaws outline a bold vision for political change, putting power in the hands of its members and championing nonviolence, equality, and open participation. From ensuring ballot access to fostering grassroots leadership, the KYP is all about empowering Kentuckians to shape their future. Dive into their commitments to transparency, inclusivity, and dynamic decision-making. Click here to explore how the KYP is redefining politics in the Bluegrass State!";
 public textForPlatform="The Kentucky Party’s platform is a forward-thinking roadmap for progress, built on the pillars of equality, nonviolence, and people-centered governance. They’re committed to ending Kentucky’s role in military expansion, ensuring equal opportunities for all, and amplifying grassroots voices. With a focus on diplomacy, transparency, and sustainability, the KYP offers bold solutions for a fairer Commonwealth. Ready to see how they’re transforming Kentucky’s political landscape? Click here to explore their vision in detail!";
 public textForEC="The Kentucky Party Executive Committee (EC) is the engine driving the party’s mission, ensuring it operates with transparency, accountability, and effectiveness. This seven-member team handles everything from organizing conventions to setting agendas and filling leadership vacancies. They prioritize open communication, monthly meetings, and member-driven decision-making. With a focus on inclusivity and fostering leadership, the EC is dedicated to empowering all Kentuckians.";
 public textForVC="The Vision Committee (VC) of the Kentucky Party is where ideas become action, crafting the platform that drives the party forward. Each year, this dynamic group of members gathers to discuss, refine, and vote on the policies that reflect the party’s principles of equality, nonviolence, and people-first governance. Open to all voices, the VC ensures the platform evolves with fresh ideas and member input.";
 openPdf(pdfToOpen: "bylaws"): void { 
  if(pdfToOpen == "bylaws") {
    window.open(this.pdfUrl, "_blank");
  }
 }
}
