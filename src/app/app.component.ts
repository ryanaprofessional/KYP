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
  showModal = true;

  ngOnInit(): void {
    document.body.classList.add('modal-open');
  }

  onCloseModal() {
    this.showModal = false;
    document.body.classList.remove('modal-open');
  }
}
