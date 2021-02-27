import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {
  @Input()
  title: string
  constructor() { 
    console.log(`[Constructor] - title value = ${this.title}`);
  }

  ngOnInit(): void {
    console.log(`[Constructor] - title value = ${this.title}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`[Before] title=${changes.title.previousValue}`);
    console.log(`[Current] title=${changes.title.currentValue}`);
  }

}
