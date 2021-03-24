import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() img: string;
  @Input() nome: string;
  @Input() list: Array<any> = [];
  

  constructor() { }

  ngOnInit(): void {
  }

}
