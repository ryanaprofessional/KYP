import { Routes } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { EventsComponent } from './features/events/events.component';
import { ExecutiveCommitteeComponent } from './features/executive-committee/executive-committee.component';
import { VisionCommitteeComponent } from './features/vision-committee/vision-committee.component';
import { StoreComponent } from './features/store/store.component';
import { DonateComponent } from './features/donate/donate.component';

export const routes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'events', component: EventsComponent },
    { path: 'executive-committee', component: ExecutiveCommitteeComponent },
    { path: 'vision-committee', component: VisionCommitteeComponent },
    { path: 'store', component: StoreComponent },
    { path: 'donate', component: DonateComponent }
];
