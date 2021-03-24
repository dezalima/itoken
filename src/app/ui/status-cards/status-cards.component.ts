import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-cards',
  templateUrl: './status-cards.component.html',
  styleUrls: ['./status-cards.component.css']
})
export class StatusCardsComponent implements OnInit {

  @Input() title:string;

  constructor() { }

  ngOnInit(): void {
  }

}
