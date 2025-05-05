import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './features/navigation/navigation.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'kyp';
  showModal = false;
  ngOnInit(): void {
    const lastClosed = localStorage.getItem('modalClosedAt');
  
    if (lastClosed) {
      const closedDate = new Date(lastClosed);
      const now = new Date();
      const daysSinceClosed = (now.getTime() - closedDate.getTime()) / (1000 * 60 * 60 * 24);
  
      this.showModal = daysSinceClosed >= 3;
      if(this.showModal) {
        document.body.classList.add('modal-open');
      }
    } else {
      this.showModal = true;
      document.body.classList.add('modal-open');
    }
  }

  onCloseModal() {
    this.showModal = false;
    document.body.classList.remove('modal-open');
    const now = new Date();
    localStorage.setItem('modalClosedAt', now.toISOString());
    this.showModal = false;
  }
}
