import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kyp-read-more',
  imports: [CommonModule],
  templateUrl: './read-more.component.html',
  styleUrl: './read-more.component.scss'
})
export class ReadMoreComponent implements OnInit {
  @Input() text: string = "";
  @Input() limit: number = 100;
  truncatedText: string = '...';
  @Input() showFullText: boolean = false;
  
  ngOnInit(): void {
    this.truncatedText = this.text.substring(0, this.limit);
  }


  toggleText() {
    this.showFullText = !this.showFullText;
  }
}