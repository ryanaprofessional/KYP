import { Routes } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { EventsComponent } from './features/events/events.component';
import { ExecutiveCommitteeComponent } from './features/executive-committee/executive-committee.component';
import { VisionCommitteeComponent } from './features/vision-committee/vision-committee.component';
import { StoreComponent } from './features/store/store.component';
import { DonateComponent } from './features/donate/donate.component';
import { ResourcesComponent } from './features/resources/resources.component';

const titlePrefix = "Kentucky Party -";
export const routes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent, title: `${titlePrefix} About` },
    { path: 'contact', component: ContactComponent,title: `${titlePrefix} Contact`   },
    { path: 'events', component: EventsComponent, title: `${titlePrefix} Events`  },
    { path: 'executive-committee', component: ExecutiveCommitteeComponent, title: `${titlePrefix} EC`  },
    { path: 'vision-committee', component: VisionCommitteeComponent, title: `${titlePrefix} VC`  },
    { path: 'store', component: StoreComponent, title: `${titlePrefix} Store`  },
    { path: 'donate', component: DonateComponent, title: `${titlePrefix} Donate`  },
    { path: 'resources', component: ResourcesComponent, title: `${titlePrefix} Resources`  }
];
