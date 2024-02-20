// list-card.component.ts
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {
  @Input() items: any[];

  constructor() { }

  ngOnInit(): void {
  }
}
