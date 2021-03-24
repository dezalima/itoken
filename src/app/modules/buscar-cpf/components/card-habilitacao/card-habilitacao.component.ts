import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-habilitacao',
  templateUrl: './card-habilitacao.component.html',
  styleUrls: ['./card-habilitacao.component.css']
})
export class CardHabilitacaoComponent implements OnInit {

  @Input() info: string;

  constructor() { }

  ngOnInit(): void {
  }

}
