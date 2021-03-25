import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() control = new FormControl('');
  @Input() campo: string;
  @Input() tipo: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.control);
  }
}
