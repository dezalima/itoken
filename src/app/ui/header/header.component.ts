import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  rotasMenu =[
    {
      label: 'perfil',
      route: '/perfil/'
    },
    {
      label: 'sair',
      route: '/login/'
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
